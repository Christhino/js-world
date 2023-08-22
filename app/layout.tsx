import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/footer/footer";
import { Suspense } from "react";
import Section1 from "@/components/layout/Banner";
import About from "@/components/layout/About";
import Header from "./tsp-pilot/Header";
import What from "@/components/layout/What";
import HomeFeature from "@/components/layout/feature";
import Solution from "@/components/layout/Solution";
import Why from "@/components/layout/Why";
import Blog from "@/components/Actualite";



export const metadata = {
  title: "JS-World",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "JS-World",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-white-to-br from-indigo-50 via-white to-cyan-100" />
       
          <Suspense fallback="..." >
            <Header />
          </Suspense >
          <Section1 />
          <main className="flex  w-full flex-col items-center justify-center">
            {children}
         
          </main>
          <About/>
          <What/>
          <HomeFeature/>
          <Solution/>
          <Why/>
          <Blog/>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
