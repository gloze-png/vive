"use client"
import { SidebarProvider } from '@/components/ui/sidebar'
//import { Sidebar } from 'lucide-react'
import React, { useEffect } from 'react'
import AppSidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useAuthContext } from '../provider'
import {useRouter} from 'next/navigation'

function DashboardProvider({ children}) {
  const {user} = useAuthContext();
  const router = useRouter();
  useEffect(()=>{
    user && CheckedUserAuthenticated();
    },[user]);

    const CheckedUserAuthenticated = () =>{
      if (!user){
        router.replace('/');
      }
    }

  return (
      <SidebarProvider>
        <AppSidebar />
        <div className='w-full'>
          <AppHeader />
      {children}
      </div>
      </SidebarProvider>  
    
  )
}

export default DashboardProvider
