import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import Analytics from "@/components/Analytics";
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

export const metadata: Metadata = {
  title: {
    default: "Light House — Yoga Teacher Training & Retreats, Rishikesh",
    template: "%s — Light House",
  },
  description:
    "Yoga Teacher Training and Yoga Retreats at Light House on the banks of the Ganges in Rishikesh, founded by Sarvadaman Banerji.",
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
