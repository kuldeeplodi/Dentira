"use client";

import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { CalculatorIcon, CrownIcon, HomeIcon, MicIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

function Navbar() {
  const { user } = useUser();
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div className="flex items-center gap-8">
          <Link href="/dashboard">
            <Image
              src="/logo.png"
              alt="dentira logo"
              width={32}
              height={32}
            ></Image>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 transition-colors ${
                pathname === "/dashboard"
                  ? "text-foreground hover:text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <HomeIcon className="w-4 h-4"></HomeIcon>
              <span className="hidden md:inline">Dashboard</span>
            </Link>
            <Link
              href="/dashboard/appointments"
              className={`flex items-center gap-2 transition-colors hover:text-foreground ${
                pathname === "/dashboard/appointments"
                  ? "text-foreground  "
                  : "text-muted-foreground "
              }`}
            >
              <CalculatorIcon className="w-4 h-4"></CalculatorIcon>
              <span className="hidden md:inline">Appointments</span>
            </Link>
            <Link
              href="/Voice"
              className={`flex items-center gap-2 transition-colors hover:text-foreground ${
                pathname === "/voice"
                  ? "text-foreground  "
                  : "text-muted-foreground "
              }`}
            >
              <MicIcon className="w-4 h-4"></MicIcon>
              <span className="hidden md:inline">Voice</span>
            </Link>
            <Link
              href="/pro"
              className={`flex items-center gap-2 transition-colors hover:text-foreground ${
                pathname === "/pro"
                  ? "text-foreground  "
                  : "text-muted-foreground "
              }`}
            >
              <CrownIcon className="w-4 h-4"></CrownIcon>
              <span className="hidden md:inline">pro</span>
            </Link>
          </div>
        </div>

        {/* right section */}

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col lg:flex items-end">
              <span className="text-sm font-medium text-foreground">
                {user?.firstName} {user?.lastName}
              </span>
              <span>{user?.emailAddresses?.[0]?.emailAddress}</span>
            </div>
            <UserButton></UserButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
