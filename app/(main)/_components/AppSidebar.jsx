"use client"
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Gem, HomeIcon, LucideFileVideo, Search, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems=[
 { title:'Home',
  url:'/dashboard',
  icon:HomeIcon
},

{
  title:'Create New Video',
  url:'/create-new-video',
  icon:LucideFileVideo
},
{
  title:'Explore',
  url:'/explore',
  icon:Search
},
{
  title:'Billing',
  url:"billing",
  icon:WalletCards
},
]

function AppSidebar() {
  const path =usePathname();
  console.log(path);
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 w-full justify-center mt-5">
        <Image src={"/logo.svg"} 
        alt="logo" 
        width={"50"} 
        height={"50"} />
        <h2 className="font-bold text-2xl">Video Gen</h2>
        </div>
        <h2 className="text-lg text-gray-400 text-center mt-3">Welcome to short Video</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
  <div className="mx-5 mt-8">
          <Button className="w-full">+Create New Video</Button>
        </div> 
        <SidebarMenu>
          {MenuItems.map((menu,index)=>(
            <SidebarMenuItem className="mt-3 mx-3" key={index}>
              <SidebarMenuButton isActive={path == menu.url} className="p-5">
                <Link href={menu.url} className="flex items-center gap-4 p-3">
                <menu.icon/>
                <span>{menu?.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        </SidebarGroupContent>
       
        <SidebarGroup />
      </SidebarContent>
      {/* this is the footer for the dashboard */}
      <SidebarFooter>
        <div className="p-4 border rounded-lg mb-5 bg-gray-800">
          <div className="flex items-center justify-between"> 
            <Gem className="text-gray-400 ml-5"/>
            <h2 className="text-gray-400 mr-10">5 Credits Left</h2>
          </div>
          <Button className="w-full mt-3">Buy More Credits</Button>
        </div>
        </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
