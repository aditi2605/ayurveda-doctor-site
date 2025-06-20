
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import ClientLayout from "./ClientLayout";


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
  title: "Maya's Ayurveda",
  description: "Maya's Ayurveda offers authentic Ayurvedic therapies including Nasya, Sirodhara, Basti, and personalized herbal treatments for holistic healing and balance.",
  openGraph: {
    images: ['/logo.png'], 
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
