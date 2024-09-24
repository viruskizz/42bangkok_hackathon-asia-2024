import localFont from "next/font/local";
import { RunnerTopbar } from "./_components/top-bar";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
  
export default function RunnerLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div className="bg-white">
        {/* <RunnerTopbar /> */}
        {children}
     </div>
    );
  }