import { useId } from 'react'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'कोई भी राशि निवेश करें',
    description:
      'चाहे ₹100 हो या ₹10,00,000, आपका धन वेद, संस्कार और सामाजिक विकास के लिए काम करेगा।',
    icon: DeviceArrowIcon,
  },
  {
    name: 'संतुलित पोर्टफोलियो बनाएं',
    description:
      'अलग-अलग धार्मिक संस्कार और वेदिक सेवाओं में निवेश कर अपने संस्कारों को सशक्त बनाएं।',
    icon: DeviceCardsIcon,
  },
  {
    name: 'समय पर पूजा-संस्कार की जानकारी पाएं',
    description:
      'विशेष यज्ञ, पूजा और वेदिक संस्कारों की सूचनाएं तुरंत प्राप्त करें और धर्म के पथ पर आगे बढ़ें।',
    icon: DeviceClockIcon,
  },
  {
    name: 'अपने नेटवर्क से लाभ प्राप्‍त करें',
    description:
      'जानकार पंडितों और विद्वानों को आमंत्रित करें और विशेष संस्कार टिप्स तुरंत प्राप्त करें।',
    icon: DeviceListIcon,
  },
  {
    name: 'सुरक्षित और गोपनीय सेवा',
    description:
      'आधुनिक एन्क्रिप्शन तकनीक के साथ आपकी निजी जानकारी सुरक्षित व गुप्त रखी जाती है।',
    icon: DeviceLockIcon,
  },
  {
    name: 'संस्कारों की प्रगति पर नजर',
    description:
      'अपने संस्कार योजना की गतिशीलता और प्रभावशीलता को समय-समय पर ट्रैक करें।',
    icon: DeviceChartIcon,
  },
]


function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#FDD2A1" fillOpacity={0.3} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#834C13"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#F39A43"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

function DeviceCardsIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#834C13"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#F39A43" />
      <circle cx={16} cy={16} r={16} fill="#FDD2A1" fillOpacity={0.3} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#834C13" />
          <stop offset={1} stopColor="#834C13" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}


function DeviceClockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#FDD2A1" fillOpacity={0.3} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#834C13"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#F39A43"
      />
    </svg>
  )
}

function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#834C13"
      />
      <circle cx={11} cy={14} r={2} fill="#F39A43" />
      <circle cx={11} cy={20} r={2} fill="#F39A43" />
      <circle cx={11} cy={26} r={2} fill="#F39A43" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#834C13"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#FDD2A1" fillOpacity={0.3} />
    </svg>
  )
}

function DeviceLockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#FDD2A1" fillOpacity={0.3} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#834C13"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
        fill="#F39A43"
      />
    </svg>
  )
}

function DeviceChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#834C13"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
        fill="#F39A43"
      />
      <path
        d="M10 12h12"
        stroke="#834C13"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#FDD2A1" fillOpacity={0.3} />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-[#2D1F12]">
            अब समय है अपने संस्कारों का पोर्टफोलियो बनाने का
          </h2>
          <p className="mt-2 text-lg text-[#834C13]">
            पारंपरिक सांस्कृतिक मूल्य और वेदों की अमूल्य विरासत के साथ,
            अपने जीवन को समृद्ध बनाएं। वेदिक संस्कार प्लेटफॉर्म के साथ,
            आपके धार्मिक और सामाजिक संस्कारों की यात्रा कभी भी देरी नहीं करती।
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-[#FDD2A1] bg-white p-8"
            >
              <feature.icon className="h-8 w-8 text-[#F39A43]" />
              <h3 className="mt-6 font-semibold text-[#2D1F12]">
                {feature.name}
              </h3>
              <p className="mt-2 text-[#834C13]">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
