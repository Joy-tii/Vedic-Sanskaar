import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import companyLogo from '@/images/vedic_logo-removebg.png'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[#4285F4]">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          {/* 🔸 Company Info */}
          <div>
            <div className="flex items-center text-white">
              <Image
                src={companyLogo}
                alt="Vedik Sanskaar Logo"
                className="h-30 w-35 object-contain"
                priority
              />
            </div>

            <nav className="mt-11 flex gap-8 text-[#F4B400]">
              <NavLinks />
            </nav>
          </div>

          {/* 🔸 QR Section */}
          <div className="group relative -mx-4 flex items-center self-stretch p-4 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6 transition-colors bg-white/10 hover:bg-[#F4B400]/20 shadow-md">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-[#F4B400] transition-colors group-hover:stroke-white" />
              <Image src={qrCode} alt="QR Code" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-white">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  ऐप डाउनलोड करें
                </Link>
              </p>
              <p className="mt-1 text-sm text-[#FFF7EA]">
                QR कोड स्कैन करें और ऐप स्टोर से ऐप प्राप्त करें।
              </p>
            </div>
          </div>
        </div>

        {/* 🔸 Newsletter Section */}
        <div className="flex flex-col items-center border-t border-[var(--color-border)] pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              placeholder="ईमेल पता"
              autoComplete="email"
              required
              className="w-64 min-w-0 shrink"
            />

            <Button
              type="submit"
              className="ml-4 flex-none rounded-lg bg-white text-[#4285F4] font-semibold px-5 py-2.5 shadow-md hover:bg-[#F4B400]/10 hover:shadow-lg transition-all duration-200"
            >
              <span className="hidden lg:inline">न्यूज़लेटर ज्वॉइन करें</span>
              <span className="lg:hidden">ज्वॉइन करें</span>
            </Button>
          </form>

          <p className="mt-6 text-sm text-[#FFF7EA] md:mt-0">
            &copy; {new Date().getFullYear()} सभी अधिकार सुरक्षित।
          </p>
        </div>
      </Container>
    </footer>
  )
}
