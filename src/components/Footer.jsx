import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import companyLogo from '@/images/vedic_logo-removebg.png' // ✅ your logo path

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
    <footer className="border-t border-[#C6A15A] bg-transparent">
      {/* ✅ same transparent/light background as before */}
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          {/* 🔸 Company Info */}
          <div>
            <div className="flex items-center text-[#2D1F12]">
              {/* ✅ Company logo instead of Logomark */}
              <Image
                src={companyLogo}
                alt="Vedik Sanskaar Logo"
                className="h-30 w-35 object-contain"
                priority
              />
              {/* <div className="ml-4">
                <p className="text-base font-semibold">Vedik Sanskaar</p>
                <p className="mt-1 text-sm text-[#987A3D]">अपना धर्म, अपनी पहचान</p>
              </div> */}
            </div>

            <nav className="mt-11 flex gap-8 text-[#834C13]">
              <NavLinks />
            </nav>
          </div>

          {/* 🔸 QR Section */}
          <div className="group relative -mx-4 flex items-center self-stretch p-4 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6 transition-colors bg-[#FDD2A1] hover:bg-[#fbbf81] shadow-md">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-[#987A3D] transition-colors group-hover:stroke-[#F39A43]" />
              <Image src={qrCode} alt="QR Code" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-[#2D1F12]">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  ऐप डाउनलोड करें
                </Link>
              </p>
              <p className="mt-1 text-sm text-[#834C13]">
                QR कोड स्कैन करें और ऐप स्टोर से ऐप प्राप्त करें।
              </p>
            </div>
          </div>
        </div>

        {/* 🔸 Newsletter Section */}
       <div className="flex flex-col items-center border-t border-[#987A3D] pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
  <form className="flex w-full justify-center md:w-auto">
  {/* ✨ Clean input field */}
 <TextField
  type="email"
  placeholder="ईमेल पता"
  autoComplete="email"
  required
  className="w-64 min-w-0 shrink"
/>


  {/* ✨ White button with orange text */}
  <Button
    type="submit"
    className="ml-4 flex-none rounded-lg bg-white text-[#F39A43] font-semibold px-5 py-2.5 shadow-md hover:bg-[#FFF3E6] hover:shadow-lg transition-all duration-200"
  >
    <span className="hidden lg:inline">न्यूज़लेटर ज्वॉइन करें</span>
    <span className="lg:hidden">ज्वॉइन करें</span>
  </Button>
</form>


  <p className="mt-6 text-sm text-[#987A3D] md:mt-0">
    &copy; {new Date().getFullYear()} सभी अधिकार सुरक्षित।
  </p>
</div>

      </Container>
    </footer>
  )
}
