'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
  {
    name: 'प्रारंभिक',
    featured: false,
    price: { Monthly: '₹0', Annually: '₹0' },
    description:
      'नवीन हैं, तो सही शुरुआत करें। निशुल्क योजना के साथ शुरू करें।',
    button: {
      label: 'फ्री शुरुआत करें',
      href: '/register',
    },
    features: [
      'शून्य कमिशन ट्रेडिंग',
      'मल्टी-लेयर्ड एन्क्रिप्शन',
      'हर दिन एक सुझाव',
      'महीने में ₹1,500 तक निवेश',
    ],
    logomarkClassName: 'fill-[#C6A15A]',
  },
  {
    name: 'निवेशक',
    featured: false,
    price: { Monthly: '₹500', Annually: '₹5,000' },
    description:
      'कुछ समय से निवेश कर रहे हैं, तेजी से धन बढ़ाएं।',
    button: {
      label: 'सब्सक्राइब करें',
      href: '/register',
    },
    features: [
      'कमिशन-फ्री ट्रेडिंग',
      'मल्टी-लेयर्ड एन्क्रिप्शन',
      'हर घंटे एक सुझाव',
      'महीने में ₹15,000 तक निवेश',
      'मूल ट्रांजेक्शन गुप्तता',
    ],
    logomarkClassName: 'fill-[#987A3D]',
  },
  {
    name: 'विशिष्ट सदस्य',
    featured: true,
    price: { Monthly: '₹14,000', Annually: '₹1,40,000' },
    description:
      'आपके बड़े संसाधनों के लिए, असीमित निवेश।',
    button: {
      label: 'सब्सक्राइब करें',
      href: '/register',
    },
    features: [
      'कमिशन-फ्री ट्रेडिंग',
      'मल्टी-लेयर्ड एन्क्रिप्शन',
      'रीयल-टाइम टिप नोटिफिकेशन',
      'कोई निवेश सीमा नहीं',
      'उन्नत ट्रांजेक्शन गुप्तता',
      'स्वचालित लाभकर कटौती',
    ],
    logomarkClassName: 'fill-[#F39A43]',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  activePeriod,
  logomarkClassName,
  featured = false,
}) {
  // choose bg and text colors dynamically
  const cardBg = featured 
    ? "bg-[#F39A43]" 
    : "bg-[#FFE0B2]"; // featured = rich dark orange, else pale orange-cream
  const titleColor = featured ? "text-white" : "text-[#834C13]";
  const priceColor = featured ? "text-white" : "text-[#2D1F12]";
  const descColor = featured ? "text-[#FFF7EA]/80" : "text-[#A57C23]";
  const listDivider = featured ? "divide-[#FFF7EA]/30" : "divide-[#F39A43]/20";
  const listText = featured ? "text-[#FFF7EA]" : "text-[#834C13]";
  const checkIcon = featured ? "text-white" : "text-[#F39A43]";
 const buttonBg = featured
  ? "!bg-white !text-[#F39A43] hover:!bg-[#FFF7EA] !border !border-white shadow-md"
  : "!bg-[#C67117] !text-white hover:!bg-[#A3560F] !border !border-transparent shadow-md";


  return (
    <section className={clsx(
      'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg',
      cardBg
    )}>
      <h3 className={clsx(
        'flex items-center text-sm font-semibold',
        titleColor
      )}>
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p className={clsx(
        'relative mt-5 flex text-3xl tracking-tight',
        priceColor
      )}>
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx('transition duration-300', activePeriod === 'Annually' && 'pointer-events-none translate-x-6 opacity-0 select-none')}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx('absolute top-0 left-0 transition duration-300', activePeriod === 'Monthly' && 'pointer-events-none -translate-x-6 opacity-0 select-none')}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p className={clsx(
        'mt-3 text-sm',
        descColor
      )}>
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx('-my-2 divide-y text-sm', listDivider, listText)}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon className={clsx('h-6 w-6 flex-none', checkIcon)} />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
  href={button.href}
  className={clsx(
    "mt-6 font-semibold transition-transform duration-200 hover:scale-105",
    buttonBg
  )}

        aria-label={`Get started with the ${name} plan for ${price.Monthly}`}
      >
        {button.label}
      </Button>
    </section>
  );
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-[#C6A15A] bg-[#FDF6E3] py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-[#2D1F12]"
          >
            पारंपरिक मूल्य निर्धारण, कोई प्रबंधन शुल्क नहीं।
          </h2>
          <p className="mt-2 text-lg text-[#834C13]">
            चाहे आप अकेले निवेशक हों या बड़ी संस्था,
            हमारे पास आपके लिए उपयुक्त योजना है।
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2 rounded-lg bg-[#F39A43] p-1 text-white"
            >
              {['Monthly', 'Annually'].map((period) => (
                <Radio
                  key={period}
                  value={period}
                  className={clsx(
                    'cursor-pointer px-5 py-2 text-center font-semibold',
                    period === 'Monthly' ? 'rounded-l-lg' : 'rounded-r-lg',
                    activePeriod === period ? 'bg-[#2D1F12]' : 'opacity-70',
                  )}
                >
                  {period}
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
      </Container>
    </section>
  )
}