import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "FR Blogs by Future Rafay",
  description: "Read Free Blogs about tech , islam , and nature and many more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>FR Blogs</title>
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main 
          className="max-w-4xl mx-auto px-4"
          >
          
          {children}
          <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
