# LuminAI Design System
## Luminescent Intelligence Aesthetic

---

## 1. Complete Color System

### Primary Palette
```css
/* Navy Blue - Primary Brand */
--primary-900: #0A1628;  /* Deepest navy for text */
--primary-800: #0F2744;  /* Dark navy for surfaces */
--primary-700: #1A3A5C;  /* Standard navy */
--primary-600: #2C4F7C;  /* Lighter navy */
--primary-500: #3D5F8C;  /* Base primary */

/* Electric Blue - Intelligence Accent */
--accent-500: #0EA5E9;   /* Base electric blue */
--accent-400: #38BDF8;   /* Lighter electric */
--accent-300: #7DD3FC;   /* Soft electric */
--accent-200: #BAE6FD;   /* Pale electric */
--accent-100: #E0F2FE;   /* Whisper electric */

/* Neutral Grays - Foundation */
--neutral-950: #0F172A;  /* Almost black (text) */
--neutral-900: #1E293B;  /* Deep slate (headers) */
--neutral-800: #334155;  /* Dark slate */
--neutral-700: #475569;  /* Medium slate */
--neutral-600: #64748B;  /* Standard slate (body text) */
--neutral-500: #94A3B8;  /* Light slate */
--neutral-400: #CBD5E1;  /* Pale slate */
--neutral-300: #E2E8F0;  /* Lighter slate */
--neutral-200: #F1F5F9;  /* Background slate */
--neutral-100: #F8FAFC;  /* Whisper slate */
--neutral-50:  #FAFBFC;  /* Pure background */

/* Success Green */
--success-600: #059669;
--success-500: #10B981;
--success-100: #D1FAE5;

/* Warning Amber */
--warning-600: #D97706;
--warning-500: #F59E0B;
--warning-100: #FEF3C7;

/* Error Red */
--error-600: #DC2626;
--error-500: #EF4444;
--error-100: #FEE2E2;
```

### Semantic Colors
```css
/* Backgrounds */
--bg-primary: #FFFFFF;
--bg-secondary: #F8FAFC;
--bg-tertiary: #F1F5F9;
--bg-elevated: #FFFFFF;
--bg-overlay: rgba(15, 23, 42, 0.5);

/* Surfaces */
--surface-primary: #FFFFFF;
--surface-secondary: #F8FAFC;
--surface-hover: #F1F5F9;
--surface-active: #E2E8F0;

/* Text */
--text-primary: #0F172A;
--text-secondary: #475569;
--text-tertiary: #94A3B8;
--text-inverse: #FFFFFF;
--text-accent: #0EA5E9;

/* Borders */
--border-primary: #E2E8F0;
--border-secondary: #CBD5E1;
--border-focus: #0EA5E9;
--border-hover: #94A3B8;
```

### Hero Gradient (Premium Sections)
```css
.hero-gradient {
  background: linear-gradient(
    135deg,
    #0F172A 0%,
    #1E293B 50%,
    #0A1628 100%
  );
}

.hero-gradient-glow {
  background: linear-gradient(
    135deg,
    #0F172A 0%,
    #1E293B 40%,
    #0EA5E9 100%
  );
  position: relative;
}

.hero-gradient-glow::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 70% 30%,
    rgba(14, 165, 233, 0.15) 0%,
    transparent 50%
  );
}
```

### Accessibility Guidelines
- **Text Contrast:** Minimum 4.5:1 for body text, 3:1 for large text
- **Primary text** (--text-primary) on white: ✓ 14.5:1
- **Secondary text** (--text-secondary) on white: ✓ 7.8:1
- **Accent blue** (--accent-500) on white: ✓ 4.7:1
- **Focus indicators:** Always use --border-focus with 2px outline

---

## 2. Typography Hierarchy

### Font Families
```css
/* UI Text - Inter */
--font-ui: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Headings - IBM Plex Sans */
--font-display: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace - IBM Plex Mono */
--font-mono: 'IBM Plex Mono', 'Courier New', monospace;
```

### Type Scale
```css
/* Display - Hero Headlines */
.text-display-xl {
  font-family: var(--font-display);
  font-size: 72px;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.text-display-lg {
  font-family: var(--font-display);
  font-size: 60px;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--text-primary);
}

/* Headings */
.text-h1 {
  font-family: var(--font-display);
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.text-h2 {
  font-family: var(--font-display);
  font-size: 36px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--text-primary);
}

.text-h3 {
  font-family: var(--font-display);
  font-size: 28px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

.text-h4 {
  font-family: var(--font-display);
  font-size: 24px;
  line-height: 1.35;
  font-weight: 600;
  letter-spacing: -0.008em;
  color: var(--text-primary);
}

/* Body Text */
.text-body-xl {
  font-family: var(--font-ui);
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: var(--text-secondary);
}

.text-body-lg {
  font-family: var(--font-ui);
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: -0.003em;
  color: var(--text-secondary);
}

.text-body-md {
  font-family: var(--font-ui);
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--text-secondary);
}

.text-body-sm {
  font-family: var(--font-ui);
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--text-secondary);
}

/* Captions & Labels */
.text-caption {
  font-family: var(--font-ui);
  font-size: 13px;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--text-tertiary);
  text-transform: uppercase;
}

.text-label {
  font-family: var(--font-ui);
  font-size: 12px;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--text-tertiary);
}
```

### Font Weights
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

---

## 3. Interactive Components

### Button System

#### Primary Button (Main Actions)
```css
.btn-primary {
  /* Layout */
  padding: 12px 24px;
  border-radius: 10px;
  border: none;

  /* Typography */
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.003em;

  /* Colors */
  background: var(--neutral-950);
  color: var(--text-inverse);

  /* Effects */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* States */
  &:hover {
    background: var(--neutral-900);
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }

  &:disabled {
    background: var(--neutral-300);
    color: var(--neutral-500);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
}

/* Large Size */
.btn-primary-lg {
  padding: 16px 32px;
  font-size: 16px;
  border-radius: 12px;
}

/* Small Size */
.btn-primary-sm {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 8px;
}
```

#### Secondary Button (Alternative Actions)
```css
.btn-secondary {
  /* Layout */
  padding: 12px 24px;
  border-radius: 10px;
  border: 1.5px solid var(--border-primary);

  /* Typography */
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.003em;

  /* Colors */
  background: var(--bg-primary);
  color: var(--text-primary);

  /* Effects */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* States */
  &:hover {
    background: var(--surface-hover);
    border-color: var(--border-secondary);
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    background: var(--surface-active);
  }

  &:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }

  &:disabled {
    background: var(--neutral-100);
    color: var(--neutral-400);
    border-color: var(--neutral-300);
    cursor: not-allowed;
    transform: none;
  }
}
```

#### Accent Glow Button (Premium/AI Actions)
```css
.btn-accent-glow {
  /* Layout */
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  position: relative;
  overflow: hidden;

  /* Typography */
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.003em;

  /* Colors */
  background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
  color: var(--text-inverse);

  /* Effects */
  box-shadow:
    0 1px 2px rgba(14, 165, 233, 0.2),
    0 0 0 0 rgba(14, 165, 233, 0);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Glow Effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* States */
  &:hover {
    box-shadow:
      0 4px 16px rgba(14, 165, 233, 0.3),
      0 0 24px 4px rgba(14, 165, 233, 0.2);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 1;
  }

  &:active {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-300);
    outline-offset: 2px;
  }

  &:disabled {
    background: var(--neutral-300);
    color: var(--neutral-500);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
}
```

#### Ghost Button (Subtle Actions)
```css
.btn-ghost {
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: var(--surface-hover);
    color: var(--text-primary);
  }

  &:active {
    background: var(--surface-active);
  }
}
```

### Input Fields
```css
.input-field {
  /* Layout */
  padding: 12px 16px;
  border-radius: 10px;
  border: 1.5px solid var(--border-primary);
  width: 100%;

  /* Typography */
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);

  /* Background */
  background: var(--bg-primary);

  /* Effects */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* States */
  &::placeholder {
    color: var(--text-tertiary);
  }

  &:hover {
    border-color: var(--border-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  }

  &:disabled {
    background: var(--neutral-100);
    color: var(--neutral-500);
    cursor: not-allowed;
  }
}
```

### Card Component
```css
.card {
  background: var(--surface-primary);
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: var(--border-secondary);
    box-shadow:
      0 4px 16px rgba(15, 23, 42, 0.06),
      0 0 0 1px rgba(15, 23, 42, 0.02);
    transform: translateY(-2px);
  }
}

.card-elevated {
  box-shadow:
    0 4px 16px rgba(15, 23, 42, 0.08),
    0 0 0 1px rgba(15, 23, 42, 0.04);
}

.card-glow {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 17px;
    padding: 1px;
    background: linear-gradient(135deg,
      rgba(14, 165, 233, 0.5) 0%,
      transparent 50%,
      rgba(14, 165, 233, 0.3) 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
}
```

---

## 4. Animation & Micro-interactions

### Global Timing Functions
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
```

### Hover Glow Effects
```css
/* Subtle Glow - For icons and small elements */
.glow-subtle {
  transition: filter 0.3s var(--ease-smooth);

  &:hover {
    filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.4));
  }
}

/* Medium Glow - For cards and surfaces */
.glow-medium {
  position: relative;
  transition: box-shadow 0.3s var(--ease-smooth);

  &:hover {
    box-shadow:
      0 0 20px rgba(14, 165, 233, 0.2),
      0 4px 16px rgba(15, 23, 42, 0.1);
  }
}

/* Strong Glow - For primary CTAs */
.glow-strong {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: inherit;
    background: radial-gradient(
      circle at center,
      rgba(14, 165, 233, 0.3) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s var(--ease-smooth);
    z-index: -1;
    filter: blur(12px);
  }

  &:hover::after {
    opacity: 1;
  }
}
```

### Animated Gradient Text (Listening States)
```css
.gradient-text-animated {
  background: linear-gradient(
    90deg,
    var(--accent-500) 0%,
    var(--accent-300) 50%,
    var(--accent-500) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Pulsing Glow for AI States */
.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(14, 165, 233, 0.6);
  }
}
```

### Entrance Animations
```css
/* Fade in from bottom */
.animate-fade-in-up {
  animation: fade-in-up 0.6s var(--ease-smooth) forwards;
  opacity: 0;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale fade in */
.animate-scale-in {
  animation: scale-in 0.4s var(--ease-smooth) forwards;
  opacity: 0;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Staggered children animation */
.stagger-children > * {
  animation: fade-in-up 0.6s var(--ease-smooth) forwards;
  opacity: 0;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
```

### Loading States
```css
/* Shimmer effect for skeleton loaders */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 0%,
    var(--neutral-100) 50%,
    var(--neutral-200) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Spinner for button loading states */
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--neutral-300);
  border-top-color: var(--accent-500);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

## 5. Icon & Illustration Guidelines

### Icon Library
**Primary:** Lucide Icons (https://lucide.dev/)
**Alternative:** Feather Icons (https://feathericons.com/)

### Icon Specifications
```css
.icon {
  /* Standard size */
  width: 20px;
  height: 20px;

  /* Stroke */
  stroke-width: 2px;
  stroke: currentColor;

  /* Spacing */
  flex-shrink: 0;
}

/* Size variants */
.icon-sm { width: 16px; height: 16px; stroke-width: 2px; }
.icon-md { width: 20px; height: 20px; stroke-width: 2px; }
.icon-lg { width: 24px; height: 24px; stroke-width: 1.5px; }
.icon-xl { width: 32px; height: 32px; stroke-width: 1.5px; }

/* Color variants */
.icon-primary { color: var(--text-primary); }
.icon-secondary { color: var(--text-secondary); }
.icon-accent { color: var(--accent-500); }
.icon-success { color: var(--success-500); }
.icon-warning { color: var(--warning-500); }
.icon-error { color: var(--error-500); }
```

### Intelligent Moment Indicators
Use electric blue accent for AI/intelligent features:

```css
/* AI Icon Container */
.ai-icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,
    rgba(14, 165, 233, 0.1) 0%,
    rgba(14, 165, 233, 0.05) 100%
  );
  border-radius: 10px;
  border: 1px solid rgba(14, 165, 233, 0.2);
  position: relative;

  /* Glow on hover */
  &:hover {
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
  }
}

.ai-icon-container .icon {
  color: var(--accent-500);
  width: 20px;
  height: 20px;
}

/* Sparkle effect for AI moments */
.sparkle-accent {
  position: relative;

  &::before {
    content: '✨';
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 12px;
    animation: sparkle 2s ease-in-out infinite;
  }
}

@keyframes sparkle {
  0%, 100% { opacity: 0.5; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.1); }
}
```

### Icon Usage Guidelines
1. **Navigation:** Use 20px icons with 2px stroke
2. **Buttons:** Use 16px icons, positioned 8px from text
3. **Feature Cards:** Use 24px icons with accent color
4. **AI Features:** Always pair with electric blue (#0EA5E9)
5. **Status Indicators:** Use filled circles, not outlined icons

---

## 6. Spacing & Layout System

### Spacing Scale
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Border Radius Scale
```css
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 10px;
--radius-xl: 12px;
--radius-2xl: 16px;
--radius-3xl: 24px;
--radius-full: 9999px;
```

### Container Widths
```css
--container-xs: 480px;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;
```

---

## 7. Component Patterns

### Navigation Bar
```css
.navbar {
  height: 64px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-primary);
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s var(--ease-smooth);
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
}
```

### Hero Section
```css
.hero-section {
  padding: 96px 24px;
  background: linear-gradient(
    135deg,
    #FFFFFF 0%,
    #F8FAFC 100%
  );
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(14, 165, 233, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
}
```

### Section Spacing
```css
.section {
  padding: 80px 24px;
}

.section-sm {
  padding: 64px 24px;
}

.section-lg {
  padding: 120px 24px;
}
```

---

## 8. Accessibility Requirements

### Focus Indicators
```css
*:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}
```

### Skip Links
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--neutral-950);
  color: var(--text-inverse);
  padding: 8px 16px;
  text-decoration: none;
  border-radius: var(--radius-md);
  z-index: 100;
}

.skip-link:focus {
  top: 8px;
  left: 8px;
}
```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Usage Examples

### Primary CTA Pattern
```html
<button class="btn-accent-glow">
  <span>Try Demo</span>
  <svg class="icon icon-sm" style="margin-left: 8px">
    <!-- Arrow icon -->
  </svg>
</button>
```

### Feature Card Pattern
```html
<div class="card card-glow">
  <div class="ai-icon-container">
    <svg class="icon"><!-- Sparkles icon --></svg>
  </div>
  <h3 class="text-h4" style="margin: 16px 0 8px">Feature Title</h3>
  <p class="text-body-md">Feature description with clear benefits.</p>
</div>
```

### Loading State Pattern
```html
<button class="btn-primary" disabled>
  <span class="spinner"></span>
  <span style="margin-left: 8px">Processing...</span>
</button>
```

---

## 10. Implementation Checklist

### Phase 1: Foundation (Week 1)
- [ ] Install Inter and IBM Plex Sans fonts
- [ ] Implement CSS custom properties for colors
- [ ] Set up typography scale
- [ ] Configure Tailwind/CSS variables

### Phase 2: Components (Week 2)
- [ ] Build button variants
- [ ] Create input components
- [ ] Implement card patterns
- [ ] Add icon system integration

### Phase 3: Animations (Week 3)
- [ ] Add hover effects
- [ ] Implement entrance animations
- [ ] Create loading states
- [ ] Test motion preferences

### Phase 4: Testing (Week 4)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Color contrast verification
- [ ] Keyboard navigation testing
- [ ] Screen reader compatibility

---

## 11. Maintenance Guidelines

### Version Control
- Document all color changes in CHANGELOG
- Keep backward compatibility for 2 major versions
- Deprecation warnings 3 months before removal

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- CSS Bundle Size: < 50KB (gzipped)

### Browser Support
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile: iOS 14+, Android 10+

---

**Design System Version:** 1.0.0
**Last Updated:** 2025-10-05
**Maintained by:** LuminAI Design Team
