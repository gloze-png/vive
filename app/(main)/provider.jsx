import { SidebarProvider } from '@/components/ui/sidebar'
import { Sidebar } from 'lucide-react'
import React from 'react'
import AppSidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'


function DashboardProvider({ children}) {
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
