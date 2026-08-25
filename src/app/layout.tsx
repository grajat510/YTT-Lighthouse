import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import Analytics from "@/components/Analytics";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const SITE_TITLE = "Light House — Yoga Teacher Training & Retreats, Rishikesh";
const SITE_DESCRIPTION =
  "Yoga Teacher Training and Yoga Retreats at Light House on the banks of the Ganges in Rishikesh, founded by Sarvadaman Banerji.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Light House",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Light House",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/hero-v4.jpg", width: 1920, height: 1080, alt: "Light House, on the banks of the Ganges in Rishikesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/hero-v4.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-[#22201c]">
        <Analytics />
        <SplashScreen />
        <Nav />
        <div className="flex min-w-0 flex-1 flex-col overflow-x-clip">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
