import Link from 'next/link'

import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi'

import { Button, buttonVariants } from './ui/button'

export async function Header() {
  const navLinks = [
    { name: 'Templates', href: '/templates' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Discover', href: '/discover' },
    // { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="container sticky top-12 z-50">
      <div className="flex h-[80px] items-center justify-between rounded-full bg-white px-6 py-3 shadow-lg shadow-black/20 md:px-12">
        <div className="flex items-center">
          <Link
            className="mr-8 text-xl font-black text-black/80 md:text-2xl"
            href="/"
          >
            <span>MenuTree</span>
          </Link>

          <nav className="hidden lg:block">
            {navLinks.map((link) => (
              <Link
                className={buttonVariants({ variant: 'ghost' })}
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              className={buttonVariants({ variant: 'secondary', size: 'lg' })}
              href="/login"
            >
              Log in
            </Link>

            <Link
              className={buttonVariants({
                variant: 'tertiary',
                size: 'lg',
              })}
              href="/signup"
            >
              Sign up free
            </Link>
          </div>

          <Button className="lg:hidden" variant={'link'} size={'icon'}>
            <MenuIcon className="h-6 w-6 text-black" />
          </Button>
        </div>
      </div>
    </header>
  )
}
