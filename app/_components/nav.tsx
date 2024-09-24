import Image from "next/image";
import Link from "next/link";
import panda_logo from "../../public/panda_logo.png";
import user_placeholder from "../../public/user-placeholder.png";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  FileChartColumnIncreasing,
  Home,
  LineChart,
  ListFilter,
  MapPinHouse,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  SendToBack,
  Settings,
  ShoppingCart,
  SunSnow,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavMenuProps {
  children: React.ReactNode;
}

export default function NavMenu(props: NavMenuProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/5">
      <div className="flex flex-col sm:gap-4 sm:py-0 sm:pl-14 p-0">
        <header className="flex justify-between sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs bg-red-50">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <SunSnow className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">PANDA POST</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <SendToBack className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <FileChartColumnIncreasing className="h-5 w-5" />
                  History
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <MapPinHouse className="h-5 w-5" />
                  Payment
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex-none place-content-center font-mono font-bold">
            <Image
              src={panda_logo}
              alt="PANDA POST"
              height="65"
              className="relative top-2"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src={user_placeholder}
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full bg-white p-0.5"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-0 sm:px-6 sm:py-0 md:gap-8">
          {props.children}
        </main>
      </div>
    </div>
  );
}
