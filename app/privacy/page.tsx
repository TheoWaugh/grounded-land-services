import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Grounded Land Services collects, uses, and protects your information when you request a quote, use our chat assistant, or visit our website.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/privacy",
  },
};

const LAST_UPDATED = "October 20, 2026";

const h2 = "text-xl md:text-2xl font-bold text-[#0a0a0a] mt-10 mb-3";
const p = "text-[#3a3a3c] leading-relaxed mb-4";
const ul = "list-disc pl-6 space-y-2 text-[#3a3a3c] leading-relaxed mb-4";
const a = "font-semibold text-[#C4922A] hover:text-amber-600 underline";

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#6e6e73] mb-8">Last updated: {LAST_UPDATED}</p>

        <p className={p}>
          This page explains, in plain English, what information Grounded Land Services
          (&ldquo;we&rdquo; or &ldquo;us&rdquo;) collects through this website and how we use it.
        </p>

        <h2 className={h2}>What we collect</h2>
        <p className={p}>When you fill out our quote form, we collect:</p>
        <ul className={ul}>
          <li>Your name</li>
          <li>Your phone number</li>
          <li>Your email address</li>
          <li>Your city or area</li>
          <li>Project details you choose to share, such as the service you need, rough property size, and comments</li>
        </ul>
        <p className={p}>
          We also note which page you sent the form from and, if you arrived through a tagged link (for
          example, from our Google Business Profile), where that link came from.
        </p>

        <h2 className={h2}>How we use it</h2>
        <p className={p}>
          We use your information to respond to your quote request: to call, text, or email you about
          your project, schedule a site visit, and give you an estimate.
        </p>
        <p className={p}>
          Quote form submissions are delivered to us by email through{" "}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={a}>
            Formspree
          </a>
          , a form-handling service.
        </p>

        <h2 className={h2}>Analytics and advertising</h2>
        <p className={p}>This website uses:</p>
        <ul className={ul}>
          <li>
            <strong>Google Analytics</strong>, to understand how visitors find and use the site (for example,
            which pages are viewed and whether someone taps to call or submits the quote form).
          </li>
          <li>
            <strong>The Meta Pixel</strong> (from Facebook and Instagram&apos;s parent company), to measure
            how well our ads and website work.
          </li>
        </ul>
        <p className={p}>
          These tools use cookies and similar technology to collect information such as the pages you
          visit, your device and browser type, and your general location.
        </p>
        <p className={p}>
          We may use your contact information, and information from the Meta Pixel, to show you relevant
          ads on Facebook and Instagram.
        </p>

        <h2 className={h2}>Website chat assistant</h2>
        <p className={p}>
          If you use the chat assistant on our site, your messages are sent to an AI service provider
          (Anthropic) to generate replies. Please don&apos;t share sensitive personal information in the
          chat.
        </p>

        <h2 className={h2}>Your choices</h2>
        <ul className={ul}>
          <li>
            You can opt out of Google Analytics with Google&apos;s{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={a}>
              browser add-on
            </a>
            .
          </li>
          <li>
            You can control the ads you see on Facebook and Instagram in your{" "}
            <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className={a}>
              Meta ad preferences
            </a>
            .
          </li>
          <li>You can block or delete cookies in your browser settings.</li>
          <li>
            To ask what information we have about you, or to have it corrected or deleted, contact us
            using the details below.
          </li>
        </ul>

        <h2 className={h2}>Contact us</h2>
        <p className={p}>
          Questions about this policy? Email{" "}
          <a href="mailto:Logan@groundedlandservices.com" className={a}>
            Logan@groundedlandservices.com
          </a>{" "}
          or call{" "}
          <a href="tel:5125716700" className={a}>
            (512) 571-6700
          </a>
          .
        </p>

        <h2 className={h2}>Changes to this policy</h2>
        <p className={p}>
          We may update this policy from time to time. The date at the top shows when it was last changed.
        </p>
      </div>
    </section>
  );
}
