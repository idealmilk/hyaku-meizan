import { User, Settings, LayoutDashboard, LogOut } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger, 
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/hooks/useAuth'
import { signOut } from '@/lib/firebase/auth'


const AccountDropdown = () => {
  const { user } = useAuth()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          // variant="ghost"
          className="relative size-8 rounded-full"
        >
          <Avatar className="size-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.displayName}</p>
            <p className="text-muted-foreground text-xs leading-none">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href='/profile'>
          <DropdownMenuItem>
            <User className="mr-2 size-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>
        <Link href='/dashboard'>
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 size-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>
        <Link href='/account-settings'>
          <DropdownMenuItem>
            <Settings className="mr-2 size-4" />
            <span>Account Settings</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600" onClick={() => signOut}>
          <LogOut className="mr-2 size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AccountDropdown
