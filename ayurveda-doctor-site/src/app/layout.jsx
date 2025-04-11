// layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

// Init fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: 'Ayurveda Wellness',
  description: 'Holistic healing with Ayurveda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
