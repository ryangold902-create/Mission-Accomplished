import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import styles from "@/components/LegalDocument.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Mission Accomplished",
  description:
    "How Mission Accomplished collects, uses, and protects information for neurodivergent children and their families, including COPPA compliance.",
};

const contact = "info@missionaccomplished.app";
const web = "https://www.missionaccomplished.app";

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      effective="Effective March 26, 2026 · Last updated April 2026"
    >
      <p>
        This Privacy Policy describes how Mission Accomplished (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) collects, uses, and protects information when you use our AI-powered
        behavioral support platform (&ldquo;the App&rdquo;). We take your privacy seriously,
        especially when it comes to the children and families who trust us.
      </p>

      <h2>1. Who We Are</h2>
      <p>
        Mission Accomplished is an AI-powered platform designed to support neurodivergent children
        ages 6–16 and their families. We are founded and operated by Jenilee Woltman, M.S.Ed.,
        CCC-SLP.
      </p>
      <ul>
        <li>
          Email: <a href={`mailto:${contact}`}>{contact}</a>
        </li>
        <li>
          Web: <a href={web}>www.missionaccomplished.app</a>
        </li>
      </ul>

      <h2>2. Information We Collect</h2>
      <h3>Information You Provide</h3>
      <ul>
        <li>Parent/guardian name, email address, and password</li>
        <li>Child&rsquo;s first name, age, and avatar emoji</li>
        <li>Child&rsquo;s date of birth (optional, used for birthday reminders)</li>
        <li>Therapist and teacher names and email addresses</li>
        <li>Challenges, subtasks, and routines you create</li>
        <li>Emotional check-in responses and notes</li>
        <li>Messages and notes shared between guardians and team members</li>
        <li>Feedback and support messages</li>
      </ul>
      <h3>Information Collected Automatically</h3>
      <ul>
        <li>Device type and operating system</li>
        <li>App usage data and feature interactions</li>
        <li>Session duration and frequency</li>
        <li>IP address and general location (country/region)</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>Provide and improve the App and its features</li>
        <li>Personalize your experience and generate AI-powered insights</li>
        <li>Send important account notifications and updates</li>
        <li>Respond to support requests and feedback</li>
        <li>Ensure the safety and security of the platform</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>4. How We Share Your Information</h2>
      <p>We do not sell your personal data. We may share information:</p>
      <ul>
        <li>
          With our payment processor to handle subscriptions — we never store card numbers
        </li>
        <li>
          With service providers who help us operate the platform (hosting, analytics) under strict
          data agreements
        </li>
        <li>If required by law, court order, or to protect the safety of users</li>
        <li>In the event of a merger or acquisition — you will be notified</li>
      </ul>

      <h2>5. Children&rsquo;s Privacy &amp; COPPA Compliance</h2>
      <div className={styles.note}>
        <p>
          <strong>COPPA Notice.</strong> Mission Accomplished is subject to and complies with the
          Children&rsquo;s Online Privacy Protection Act (COPPA), 15 U.S.C. §&nbsp;6501 et seq., and
          the FTC&rsquo;s COPPA Rule, 16 C.F.R. Part 312. Because our platform serves children ages
          6–16, including children under the age of 13, we are required to provide specific
          protections and obtain verifiable parental consent before collecting, using, or disclosing
          personal information from or about children under 13.
        </p>
      </div>

      <h3>5a. Parental Consent</h3>
      <p>
        We require that all accounts be created by a parent or legal guardian who is at least 18
        years of age. By creating an account and enrolling a child on our platform, you represent
        that you are the parent or legal guardian of that child and that you provide verifiable
        consent for us to collect and use information about your child as described in this Privacy
        Policy.
      </p>
      <p>
        We do not knowingly permit children under the age of 13 to create their own accounts or to
        provide personal information without a parent or guardian&rsquo;s direct involvement and
        consent.
      </p>

      <h3>5b. What Information We Collect About Children Under 13</h3>
      <ul>
        <li>First name and avatar (no last name required)</li>
        <li>Age or date of birth (used only for age-appropriate content and birthday reminders)</li>
        <li>
          Behavioral data entered by parents — including task completion, routines, and challenge
          responses
        </li>
        <li>Emotional check-in responses submitted through the child-facing interface</li>
        <li>App usage data related to the child&rsquo;s in-app activity</li>
      </ul>
      <p>
        We collect only the minimum information necessary to provide the service. We do not collect
        last names, school names, photos, videos, geolocation data, or persistent identifiers that
        could be used to track a child across third-party websites or services.
      </p>

      <h3>5c. How We Use Children&rsquo;s Information</h3>
      <ul>
        <li>Provide the behavioral support and routine management features of the App</li>
        <li>
          Generate AI-powered insights and recommendations visible only to the parent/guardian and
          authorized team members
        </li>
        <li>
          Enable collaboration between the parent, teachers, and therapists added by the parent
        </li>
        <li>Improve the safety, quality, and effectiveness of the platform</li>
      </ul>
      <p>
        We do not use children&rsquo;s personal information for advertising, marketing, or any
        commercial purpose beyond operating the platform.
      </p>

      <h3>5d. Third-Party Services and Children&rsquo;s Data</h3>
      <p>
        We use an AI service provider to power certain AI coaching and insight features. When AI
        features process information related to a child, we take steps to minimize the personal
        information shared and ensure it is used only to generate in-app responses. Our AI service
        provider is bound by data processing agreements consistent with applicable privacy law.
      </p>
      <p>
        We do not share children&rsquo;s personal information with any third party for advertising,
        analytics beyond platform operation, or any purpose not directly related to providing the
        service.
      </p>

      <h3>5e. Parental Rights Under COPPA</h3>
      <p>As a parent or legal guardian, you have the right to:</p>
      <ul>
        <li>Review the personal information we have collected about your child</li>
        <li>Request correction of inaccurate information about your child</li>
        <li>Request deletion of your child&rsquo;s personal information at any time</li>
        <li>Refuse to permit further collection or use of your child&rsquo;s information</li>
        <li>Withdraw consent at any time by deleting your account</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href={`mailto:${contact}`}>{contact}</a>. We will respond to verified requests within 30
        days.
      </p>

      <h3>5f. Account Deletion and Data Removal</h3>
      <p>
        If you delete your account, all personal information associated with your account —
        including all data related to your child — will be permanently deleted within 30 days. You
        may also request deletion of specific data without closing your account by contacting us
        directly.
      </p>

      <h3>5g. If We Discover Unauthorized Collection</h3>
      <p>
        If we discover that we have inadvertently collected personal information from a child under
        13 without verifiable parental consent, we will promptly delete that information. If you
        believe your child has provided personal information without your consent, please contact us
        immediately at <a href={`mailto:${contact}`}>{contact}</a>.
      </p>

      <h2>6. Data Security</h2>
      <ul>
        <li>All data encrypted in transit using HTTPS/TLS</li>
        <li>Passwords hashed using industry-standard algorithms — never stored in plain text</li>
        <li>PINs hashed before storage — never stored as plain text</li>
        <li>Each family&rsquo;s data is isolated — no family can access another family&rsquo;s data</li>
        <li>Regular security reviews and updates</li>
        <li>Access controls limiting which staff can access user data</li>
      </ul>

      <h2>7. Data Retention</h2>
      <ul>
        <li>Your account data is retained as long as your account is active</li>
        <li>
          Children&rsquo;s data is retained only as long as necessary to provide the service and is
          deleted within 30 days of account deletion
        </li>
        <li>If you delete your account, all personal data is permanently deleted within 30 days</li>
        <li>
          Anonymized, aggregated data may be retained for platform improvement — this data cannot be
          linked back to any individual child or family
        </li>
        <li>
          You may request deletion of specific data at any time by contacting{" "}
          <a href={`mailto:${contact}`}>{contact}</a>
        </li>
      </ul>

      <h2>8. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you and your child</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Export your data in a portable format</li>
        <li>Opt out of non-essential communications</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href={`mailto:${contact}`}>{contact}</a>.
      </p>

      <h2>9. Cookies and Tracking</h2>
      <ul>
        <li>We use essential cookies to keep you logged in and remember your preferences</li>
        <li>We do not use advertising cookies or third-party tracking pixels</li>
        <li>We use anonymous analytics to understand how the app is used and improve it</li>
        <li>
          We do not use cookies or tracking technologies to collect personal information from
          children
        </li>
        <li>
          You can disable cookies in your browser settings, but some features may not work correctly
        </li>
      </ul>

      <h2>10. Third-Party Services</h2>
      <p>We use the following third-party services to operate the platform:</p>
      <ul>
        <li>AI service provider — powers our AI coaching, challenge generation, and insights</li>
        <li>Payment processor — handles subscription billing securely</li>
        <li>Cloud hosting provider — stores app data securely</li>
      </ul>
      <p>
        Each third party is bound by their own privacy policy and data processing agreements with
        us. No third party is permitted to use children&rsquo;s personal information for any purpose
        other than providing services to Mission Accomplished.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of significant
        changes by email or by showing a notice in the app. The &ldquo;Last Updated&rdquo; date at
        the top will always reflect the most recent version. For changes that materially affect how
        we collect or use children&rsquo;s information, we will obtain fresh parental consent where
        required by COPPA.
      </p>

      <h2>12. Contact Us</h2>
      <div className={styles.contact}>
        <p>
          If you have any questions about this Privacy Policy, our COPPA compliance, or how we
          handle your child&rsquo;s data:
        </p>
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
