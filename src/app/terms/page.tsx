import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import styles from "@/components/LegalDocument.module.css";

export const metadata: Metadata = {
  title: "Terms of Service — Mission Accomplished",
  description:
    "Terms governing your access to and use of the Mission Accomplished AI-powered platform for neurodivergent children and families.",
};

const contact = "info@missionaccomplished.app";
const web = "https://www.missionaccomplished.app";

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms of Service"
      effective="Effective March 26, 2026 · Last updated April 2026"
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Mission
        Accomplished (&ldquo;the App,&rdquo; &ldquo;the Service&rdquo;). By creating an account or
        using the App, you agree to these Terms. If you do not agree, please do not use the App.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Mission Accomplished, you confirm that you are at least 18 years old
        (or the legal age of majority in your jurisdiction), that you have the authority to agree to
        these Terms on behalf of yourself and your family, and that you agree to comply with these
        Terms and all applicable laws.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Mission Accomplished is an AI-powered platform that helps families of neurodivergent children
        with:
      </p>
      <ul>
        <li>Creating and tracking behavioral challenges and daily routines</li>
        <li>Emotional check-ins and regulation strategies</li>
        <li>Progress tracking and family insights</li>
        <li>Collaboration with therapists and teachers</li>
        <li>AI-powered coaching and personalized recommendations</li>
      </ul>
      <p>
        The App is designed as a supportive tool and is not a substitute for professional medical,
        therapeutic, or psychological advice.
      </p>

      <h2>3. Accounts and Registration</h2>
      <ul>
        <li>You must provide accurate and complete information when creating an account</li>
        <li>You must be at least 18 years old to create an account</li>
        <li>You are responsible for maintaining the security of your account password and PIN</li>
        <li>You must notify us immediately of any unauthorized access to your account</li>
        <li>
          Each family account may have multiple guardians, but accounts may not be shared between
          unrelated families
        </li>
        <li>You may not create an account on behalf of someone else without their permission</li>
        <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
      </ul>

      <h2>4. Subscription and Billing</h2>
      <div className={styles.plans}>
        <div className={styles.plan}>
          <p className={styles.planName}>Family Plan</p>
          <p className={styles.planPrice}>$29/month or $249/year</p>
          <p className={styles.planDetail}>Up to 4 children · 14-day free trial</p>
        </div>
        <div className={styles.plan}>
          <p className={styles.planName}>Professional Plan</p>
          <p className={styles.planPrice}>$39/month or $329/year</p>
          <p className={styles.planDetail}>Unlimited client families · 14-day free trial</p>
        </div>
      </div>
      <h3>Billing Terms</h3>
      <ul>
        <li>Subscriptions renew automatically at the end of each billing period</li>
        <li>
          You may cancel at any time — cancellation takes effect at the end of the current billing
          period
        </li>
        <li>We do not offer refunds for partial billing periods</li>
        <li>We reserve the right to change pricing with 30 days&rsquo; notice</li>
        <li>
          Free trial users who do not subscribe are limited to free plan features after the trial
          ends
        </li>
      </ul>

      <h2>5. Acceptable Use</h2>
      <p>You agree to use Mission Accomplished only for lawful purposes. You may not:</p>
      <ul>
        <li>Use the App to harass, harm, or abuse any person</li>
        <li>Share another family&rsquo;s private data without permission</li>
        <li>Attempt to access accounts or data that are not yours</li>
        <li>Use automated tools to scrape or extract data from the App</li>
        <li>Reverse engineer, decompile, or attempt to extract the source code</li>
        <li>Use the App to violate any applicable laws or regulations</li>
        <li>Impersonate another person or organization</li>
        <li>Post false, misleading, or harmful content in the community features</li>
        <li>Use the App for commercial purposes other than those expressly permitted</li>
      </ul>

      <h2>6. AI-Generated Content</h2>
      <p>
        Mission Accomplished uses artificial intelligence to generate suggestions, strategies, and
        insights. You acknowledge that:
      </p>
      <ul>
        <li>AI-generated content is for informational and supportive purposes only</li>
        <li>AI suggestions are not medical, therapeutic, or clinical advice</li>
        <li>
          You should always consult qualified professionals for medical or therapeutic decisions
        </li>
        <li>
          We do not guarantee the accuracy or appropriateness of AI-generated content for every child
        </li>
        <li>You retain full responsibility for decisions made based on AI suggestions</li>
        <li>AI responses may vary and are not always consistent</li>
      </ul>

      <h2>7. Community Features</h2>
      <p>
        Mission Accomplished includes an anonymous parent community. When using community features:
      </p>
      <ul>
        <li>You must use your chosen anonymous display name — not your real name</li>
        <li>Do not share identifying information about your child or family</li>
        <li>Be respectful and supportive of other families</li>
        <li>Do not post spam, advertisements, or irrelevant content</li>
        <li>Report harmful content using the flag button</li>
        <li>We reserve the right to remove content that violates these Terms</li>
        <li>
          We reserve the right to ban users who repeatedly violate community guidelines
        </li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <ul>
        <li>Mission Accomplished and all its content, features, and technology are owned by us</li>
        <li>You may not copy, reproduce, or distribute our content without permission</li>
        <li>You retain ownership of content you create (challenges, notes, check-ins)</li>
        <li>
          By using the App, you grant us a limited license to store and process your content to
          provide the Service
        </li>
        <li>Our name, logo, and trademarks may not be used without written permission</li>
      </ul>

      <h2>9. Privacy and Data</h2>
      <p>
        Your use of the App is also governed by our{" "}
        <a href="/privacy">Privacy Policy</a>. By using the App, you consent to our data practices
        as described in the Privacy Policy, including our COPPA compliance practices for children
        under 13.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        Mission Accomplished is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
        warranties of any kind. We do not warrant that the App will be uninterrupted, error-free, or
        completely secure. We make no warranties about the accuracy or completeness of AI-generated
        content. Your use of the App is at your own risk.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Mission Accomplished and its founders, employees, and
        partners shall not be liable for any indirect, incidental, special, or consequential damages
        arising from your use of the App, including but not limited to loss of data, personal injury,
        or decisions made based on AI-generated content.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Mission Accomplished, its founder, and its team from
        any claims, damages, or expenses arising from your violation of these Terms or your use of
        the App.
      </p>

      <h2>13. Termination</h2>
      <ul>
        <li>You may delete your account at any time in the Settings page</li>
        <li>We may suspend or terminate your account if you violate these Terms</li>
        <li>
          Upon termination, your data will be deleted within 30 days per our{" "}
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>Provisions that by their nature should survive termination will survive</li>
      </ul>

      <h2>14. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of significant changes by
        email or in-app notification at least 14 days before they take effect. Continued use of the
        App after changes take effect constitutes acceptance of the new Terms.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the United States. Any disputes arising from these
        Terms or your use of the App will be resolved through binding arbitration or in the courts of
        competent jurisdiction.
      </p>

      <h2>16. Contact Us</h2>
      <div className={styles.contact}>
        <p>If you have any questions about these Terms of Service:</p>
        <p>
          Email: <a href={`mailto:${contact}`}>{contact}</a>
          <br />
          Web: <a href={web}>www.missionaccomplished.app</a>
        </p>
        <p>Founded by Jenilee Woltman, M.S.Ed., CCC-SLP</p>
      </div>
    </LegalDocument>
  );
}
