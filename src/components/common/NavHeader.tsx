import { ArrowDown, ChevronDown, MenuIcon, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// import Logo from '@/components/shadcn-studio/logo'

export type NavigationSection = {
  title: string
  href: string
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
  path: string
}

const NavHeader = ({ navigationData, className, path }: HeaderProps) => {
  const router = useRouter();
  return (
    <header className={cn('bg-background sticky top-0 z-50 h-20', className)}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#' onClick={()=> router.push("/")}>
          <Image src={"https://travelvaidya.com/wp-content/uploads/2025/05/Travel-vaidya-2.png.webp"} alt='LOGO' width={194} height={20} />
        </a>

        {/* Navigation */}
        <NavigationMenu className='max-md:hidden'>
          <NavigationMenuList className='flex-wrap justify-start gap-0'>
            <div className={`p-4 ${path === "/" ? "border-b-2 border-white" : ""} hover:border-b-2 hover:border-white cursor-pointer`} onClick={()=> router.push("/")}>
                <p className='text-white font-medium text-lg px-2'>Home</p>
            </div>
            <div className={`p-4 ${path === "/about-us" ? "border-b-2 border-white" : ""} hover:border-b-2 hover:border-white cursor-pointer`} onClick={()=> router.push("/about-us")}>
                <p className='text-white font-medium text-base px-2'>About us</p>
            </div>
            <div className='px-4 py-2 hover:border-b-2 hover:border-white cursor-pointer '>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className='bg-inherit hover:bg-inherit outline-0 focus:outline-none'>
                        <span className='flex items-center text-white font-medium text-base'>Destinations <ChevronDown className='ml-2' /></span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56' align='end'>
                        <DropdownMenuItem>
                        <a>Char Dham Yatra</a>
                        <a>Haridwar</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='px-4 py-2 hover:border-b-2 hover:border-white cursor-pointer '>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className='bg-inherit hover:bg-inherit outline-0 focus:outline-none'>
                        <span className='flex items-center text-white font-medium text-base'>Tour Packages <ChevronDown className='ml-2' /></span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56' align='end'>
                        <DropdownMenuItem>
                        <a>Char Dham Yatra</a>
                        <a>Haridwar</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='px-4 py-2 hover:border-b-2 hover:border-white cursor-pointer '>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className='bg-inherit hover:bg-inherit outline-0 focus:outline-none'>
                        <span className='flex items-center text-white font-medium text-base'>Experiences <ChevronDown className='ml-2' /></span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56' align='end'>
                        <DropdownMenuItem>
                        <a>Char Dham Yatra</a>
                        <a>Haridwar</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className={`p-4 ${path === "/contact-us" ? "border-b-2 border-white" : ""} hover:border-b-2 hover:border-white cursor-pointer`} onClick={()=> router.push("/contact-us")}>
                <p className='text-white font-medium text-base px-2'>Contact Us</p>
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Login Button */}
        <Button className='rounded-lg bg-inherit hover:bg-inherit cursor-pointer'>
          <Search size={32} strokeWidth={5} />
        </Button>

        {/* Navigation for small screens */}
        <div className='flex gap-4 md:hidden'>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <a href={item.href}>{item.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default NavHeader;
