import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mission Accomplished — You know your child is capable.",
  description:
    "AI Platform Supporting Neurodivergent Children and their Families",
  openGraph: {
    title: "Mission Accomplished",
    description:
      "AI Platform Supporting Neurodivergent Children and their Families",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FCF6F1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* suppressHydrationWarning: the inline script below adds `js-motion` to
       <html> before React hydrates, which is an intentional mismatch. */
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Opt in to scroll reveals only when JS is running, so a script
            failure can never leave sections invisible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-motion')`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
