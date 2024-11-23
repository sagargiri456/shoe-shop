"use client"
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name:"Dashboard",
        link:"/dashboard"
    },
    {
        name:"Orders",
        link:"/dashboard/orders"
    },
    {
        name:"Products",
        link:"/dashboard/products"
    },
    {
        name:"Categories",
        link:"/dashboard/categories"
    }
]

export function DashboardNavigation(){
    const pathname = usePathname();
    return(
        <>
        {links.map((link)=>
            <Link style={{ color: 'blue' }} 
                  key={link.link} 
                  href={link.link}
                  className={cn(link.link == pathname?"text-foreground":"text-muted-foreground hover:text-foreground")}>
                {link.name}
            </Link>)}
        </>
    )
}