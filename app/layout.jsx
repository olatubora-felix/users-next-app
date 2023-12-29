import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_component/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welocome to my site",
  description: "This is my site description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
