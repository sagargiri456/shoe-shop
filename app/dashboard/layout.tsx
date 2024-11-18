import { ReactNode } from "react";
import { DashboardNavigation } from "../components/dashboard/DashboardNavigation";
import { CircleUser, Icon, MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto sm:px-6 lg:px-8">
      <header className="sticky top-0 flex h-16 items-center justify-between p-2 gap-4 border-b bg-white">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center">
          {/* Responsive navigation */}
          <DashboardNavigation />
        </nav>

        {/* Sheet component for smaller devices */}
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          {/* Ensure SheetContent is provided */}
          <SheetContent side="left">
            {/* Additional content or navigation for the sheet */}
            <nav className="flex flex-col gap-6 font-medium text-lg">
              <DashboardNavigation />
            </nav>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"secondary"} size="icon" className="rounded-4">
              <CircleUser className="w-5 h-5"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      {children}
    </div>
  );
}
