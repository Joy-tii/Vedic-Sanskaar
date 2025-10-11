'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(props) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base/7 tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className="bg-[var(--color-background)] border-b border-[var(--color-border)] shadow-sm">
      <nav>
        <Container className="relative z-50 flex justify-between py-6">
          {/* Logo + Links */}
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks className="text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors" />
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu */}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg p-2 
                    stroke-[var(--color-text-primary)] 
                    hover:bg-[var(--color-border)]/40 
                    hover:stroke-[var(--color-primary)] 
                    focus:outline-none 
                    active:stroke-[var(--color-primary)]"
                    aria-label="Toggle site navigation"
                  >
                    {open ? (
                      <ChevronUpIcon className="h-6 w-6" />
                    ) : (
                      <MenuIcon className="h-6 w-6" />
                    )}
                  </PopoverButton>

                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-[var(--color-border)]/60 backdrop-blur-sm"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl 
                          bg-[var(--color-surface)] px-6 pt-32 pb-6 
                          shadow-2xl shadow-[var(--color-border)]/40"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink href="/#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="/#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button
                              href="/login"
                              variant="outline"
                              className="border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                            >
                              Log in
                            </Button>
                            <Button
                              href="#"
                              className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition"
                            >
                              Download the app
                            </Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>

            {/* Desktop Buttons */}
            <div className="flex items-center gap-4 max-lg:hidden">
              <Button
                href="/login"
                variant="outline"
                className="border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Log in
              </Button>
              <Button
                href="#"
                className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition"
              >
                Download
              </Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
