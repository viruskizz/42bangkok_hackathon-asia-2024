import localFont from "next/font/local";
import { JobTopbar } from "./_components/job-topbar";
import { Toaster } from "sonner";
// import { RunnerTopbar } from "./_components/top-bar";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function JobLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white flex flex-col gap-4">
      {/* <RunnerTopbar /> */}
      {/* <JobTopbar /> */}
      {children}
    </div>
  );
}
