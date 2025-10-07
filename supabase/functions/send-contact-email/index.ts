import "jsr:@supabase/functions-js/edge-runtime.d.ts";

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

    const formData = new FormData();
    formData.append("access_key", "a3e25f96-bf44-4fd8-b8bd-8e8b7c5e4e8c");
    formData.append("subject", `New Contact Form Message from ${name}`);
    formData.append("from_name", "LuminIQ Contact Form");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("to", "luminiq@zohomail.in");

    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await web3FormsResponse.json();

    if (!web3FormsResponse.ok || !responseData.success) {
      console.error("Web3Forms API Error:", responseData);
      return new Response(
        JSON.stringify({
          error: "Failed to send email. Please try again later.",
          details: responseData
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

    console.log("Email sent successfully:", responseData);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully"
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
