
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Cog,
  LayoutDashboard,
  Users,
  Wrench,
  BarChart3,
  FileText,
  Sparkles,
  Megaphone,
  Kanban,
  ClipboardList,
  ShoppingCart,
  LifeBuoy,
  Settings,
  LogOut,
  Calendar,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import { signOut } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/sales', label: 'Point of Sale', icon: ShoppingCart },
  { href: '/products', label: 'Products', icon: Wrench },
  { href: '/customers', label: 'Customers', icon: Users },
  { href: '/sales-pipeline', label: 'Sales Pipeline', icon: Kanban },
  { href: '/tasks', label: 'Tasks', icon: ClipboardList },
  { href: '/calendar', label: 'Calendar', icon: Calendar },
  { href: '/reports', label: 'Sales Reports', icon: BarChart3 },
  { href: '/invoices', label: 'Invoices', icon: FileText },
];

const aiTools = [
    { href: '/smart-finder', label: 'Smart Finder', icon: Sparkles },
    { href: '/marketing', label: 'Marketing', icon: Megaphone },
];

const supportItems = [
    { href: '/settings', label: 'Settings', icon: Settings },
    { href: '/support', label: 'Help & Support', icon: LifeBuoy },
]

export default function AppSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      toast({
        title: 'Signed Out',
        description: 'You have been successfully signed out.',
      });
      router.push('/login');
      router.refresh();
    } else {
        toast({
            variant: 'destructive',
            title: 'Sign Out Failed',
            description: result.error,
        });
    }
  };

  return (
    <Sidebar className="border-r" side="left" variant='inset'>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Cog className="w-8 h-8 text-sidebar-primary" />
          <h1 className="text-xl font-bold text-sidebar-primary font-headline">
            GearLink
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className={cn(
                  'group-data-[collapsible=icon]:justify-center'
                )}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span className="truncate group-data-[collapsible=icon]:hidden">
                    {item.label}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
         <SidebarMenu>
          {aiTools.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className={cn(
                  'group-data-[collapsible=icon]:justify-center'
                )}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span className="truncate group-data-[collapsible=icon]:hidden">
                    {item.label}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
       <SidebarFooter>
           <SidebarSeparator />
            <SidebarMenu>
            {supportItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn(
                    'group-data-[collapsible=icon]:justify-center'
                    )}
                    tooltip={item.label}
                >
                    <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span className="truncate group-data-[collapsible=icon]:hidden">
                        {item.label}
                    </span>
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
            <SidebarSeparator />
            <div className="p-2 space-y-2">
                <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.photoURL ?? ''} />
                        <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                     <div className="flex flex-col truncate">
                        <span className="font-semibold text-sm">{user?.displayName ?? 'User'}</span>
                        <span className="text-xs text-muted-foreground truncate">{user?.email}</span>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                </Button>
            </div>
       </SidebarFooter>
    </Sidebar>
  );
}
