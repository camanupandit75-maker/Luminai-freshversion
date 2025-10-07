import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { Resend } from "npm:resend@3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          message,
          status: "new",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({
          error: "Failed to save your message. Please try again later.",
          details: error.message
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Contact submission saved:", data);

    const resendApiKey = "re_4Z2XAhho_oz96h9Lm2cEm1xmoyy4Fe5F6";

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const emailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #14b8a6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #475569; margin-bottom: 5px; }
                .value { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6d4; }
                .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">New Contact Form Submission</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">From LuminIQ Website</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value"><a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Message:</div>
                    <div class="value" style="white-space: pre-wrap;">${message}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This email was sent from the LuminIQ contact form.</p>
                </div>
              </div>
            </body>
          </html>
        `;

        const { data: emailData, error: emailError } = await resend.emails.send({
          from: "LuminIQ Contact Form <onboarding@resend.dev>",
          to: ["camanupandit75@gmail.com"],
          reply_to: email,
          subject: `New Contact Form Message from ${name}`,
          html: emailHtml,
        });

        if (emailError) {
          console.error("Failed to send email via Resend:", emailError);
        } else {
          console.log("Email sent successfully via Resend:", emailData);
        }
      } catch (emailError) {
        console.error("Email sending error (non-fatal):", emailError);
      }
    } else {
      console.log("RESEND_API_KEY not configured - skipping email notification");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message received successfully! We'll get back to you soon."
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "An unexpected error occurred",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
