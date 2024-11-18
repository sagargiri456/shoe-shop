import Link from "next/link"

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
    return(
        <>
        {links.map((link)=><Link style={{ color: 'blue' }} key={link.link} href={link.link}>{link.name}</Link>)}
        </>
    )
}