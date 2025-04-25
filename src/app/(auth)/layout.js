"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"

 
const navLinks =[
  {name:"Register",href:"/register"},
  {name:"Login",href:"/login"},
 { name:"Forgot password",href:"/forget-password"}
];
 

export default function RootLayout({ children }) {
  const pathName = usePathname(); 
  return (
    
    <div>
      { navLinks.map((links) =>{
        const isActive = pathName === links.href || (pathName.startsWith(links.href) && links.href==="/");
        return(
          <Link className={isActive ? "font-bold mr-4":"text-blue-500 mr-4"} href={links.href} key={links.name}>
          {links.name}
          </Link>
        )
      })
      }
      {children}
    </div>
        

  );
}
