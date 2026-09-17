import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import styles from "@/components/LegalDocument.module.css";

export const metadata: Metadata = {
  title: "Accessibility Statement — Mission Accomplished",
  description:
    "Mission Accomplished’s commitment to accessibility, the standards we are working toward, and how to request accessibility support.",
};

const contact = "info@missionaccomplished.app";
const web = "https://www.missionaccomplished.app";

export default function AccessibilityPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Accessibility Statement"
      effective="Effective September 14, 2026 · Last updated September 2026"
    >
      <p>
        Mission Accomplished is committed to ensuring that our platform is accessible to all users,
        including individuals with disabilities. We believe every family deserves equal access to
        the tools and support our app provides.
      </p>

      <h2>1. Our Commitment to Accessibility</h2>
      <p>
        Mission Accomplished is designed to support neurodivergent children and their families, and
        we understand firsthand how critical accessibility is to the people we serve. We are
        committed to making our platform as inclusive, usable, and accessible as possible for all
        users, regardless of ability or assistive technology.
      </p>
      <p>
        We are actively working to improve the accessibility of our web and mobile application and
        to align with recognized accessibility standards as our platform grows and evolves.
      </p>

      <h2>2. Standards We Are Working Toward</h2>
      <p>
        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA,
        published by the World Wide Web Consortium (W3C). These guidelines explain how to make
        digital content more accessible to people with disabilities, including users who rely on
        screen readers, keyboard navigation, voice control, and other assistive technologies.
      </p>
      <p>
        We have not yet completed a formal third-party accessibility audit. The accessibility status
        described in this statement reflects our current good-faith efforts and ongoing internal
        review. We are committed to continuing to identify and address gaps.
      </p>

      <h2>3. Current Accessibility Features</h2>
      <p>
        We have taken the following steps to support accessible use of Mission Accomplished, with
        additional testing and improvements ongoing:
      </p>
      <ul>
        <li>
          Text alternatives for non-text content are a priority in our design approach;
          implementation is ongoing across all areas of the platform
        </li>
        <li>
          Color contrast has been considered in our design process; final verification across the
          complete platform is ongoing
        </li>
        <li>Font sizes and spacing designed for readability</li>
        <li>Simple, consistent navigation structures throughout the app</li>
        <li>
          Clear, plain-language content designed to be understandable at a range of reading levels
        </li>
        <li>
          Emoji avatars used as visual identifiers; text-based alternatives are part of our
          accessibility roadmap
        </li>
        <li>
          Forms and inputs are designed with screen reader compatibility in mind; full labeling
          verification is ongoing
        </li>
      </ul>

      <h2>4. Known Limitations</h2>
      <p>
        While we are committed to accessibility, we recognize that our platform may not yet be fully
        accessible in all areas. Some known or potential limitations include:
      </p>
      <ul>
        <li>
          Certain AI-generated content may not always be optimized for screen reader output
        </li>
        <li>
          Some interactive features may have limited keyboard navigation support in early versions
        </li>
        <li>
          Third-party components (including payment processing) are governed by their own
          accessibility practices
        </li>
      </ul>
      <p>
        We are actively working to address these limitations and will prioritize improvements based
        on user feedback and ongoing review.
      </p>

      <h2>5. Assistive Technologies</h2>
      <p>
        Mission Accomplished is designed with support for commonly used assistive technologies in
        mind. Accessibility testing and improvements across these areas remain ongoing, and we
        welcome feedback from users who encounter compatibility issues:
      </p>
      <ul>
        <li>Screen readers (such as VoiceOver on iOS and TalkBack on Android)</li>
        <li>Display zoom and text resizing</li>
        <li>High-contrast display modes</li>
        <li>Voice control and switch access on mobile devices</li>
      </ul>
      <p>
        If you experience difficulty using our platform with your assistive technology, please
        contact us so we can work to resolve the issue.
      </p>

      <h2>6. How to Request Accessibility Support</h2>
      <p>
        If you encounter an accessibility barrier on Mission Accomplished, or if you need content or
        a feature in an accessible format, we want to hear from you. Please reach out to us and we
        will do our best to provide an appropriate solution in a timely manner.
      </p>
      <ul>
        <li>
          Email: <a href={`mailto:${contact}`}>{contact}</a>
        </li>
        <li>
          Website: <a href={web}>www.missionaccomplished.app</a>
        </li>
        <li>Response time: We aim to respond to accessibility inquiries within 5 business days</li>
      </ul>
      <p>
        When contacting us, it helps to describe the specific barrier you encountered, the assistive
        technology or device you are using, and the page or feature where the issue occurred.
      </p>

      <h2>7. Formal Complaints</h2>
      <p>
        If you are not satisfied with our response to an accessibility concern, you may have the
        right to contact a relevant enforcement or oversight authority depending on your location.
        In the United States, the{" "}
        <a href="https://www.access-board.gov" target="_blank" rel="noopener noreferrer">
          U.S. Access Board
        </a>{" "}
        and the Department of Justice provide guidance on digital accessibility rights under the
        Americans with Disabilities Act (ADA).
      </p>

      <h2>8. Our Ongoing Commitment</h2>
      <p>
        Accessibility is not a one-time effort for us. Because we serve children and families who
        often have direct experience with disability, we take this responsibility seriously. We
        commit to:
      </p>
      <ul>
        <li>Reviewing and improving accessibility as we release new features</li>
        <li>
          Incorporating accessibility considerations into our design and development process
        </li>
        <li>Seeking feedback from users and the broader disability community</li>
        <li>Updating this statement as our practices and compliance status evolve</li>
        <li>Working toward a formal third-party audit as the platform matures</li>
      </ul>

      <h2>9. Changes to This Statement</h2>
      <p>
        We may update this Accessibility Statement from time to time to reflect changes in our
        platform, practices, or applicable standards. The &ldquo;Last Updated&rdquo; date at the top
        of this document reflects the most recent revision. We will notify users of significant
        changes through the app or by email.
      </p>

      <h2>10. Contact Us</h2>
      <div className={styles.contact}>
        <p>For any questions, feedback, or requests related to accessibility:</p>
        <p>
          Email: <a href={`mailto:${contact}`}>{contact}</a>
          <br />
          Website: <a href={web}>www.missionaccomplished.app</a>
        </p>
        <p>Founded by Jenilee Woltman, M.S.Ed., CCC-SLP</p>
      </div>
    </LegalDocument>
  );
}
