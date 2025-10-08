import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
  id="get-free-shares-today"
  className="relative overflow-hidden bg-[#2D1F12] py-20 sm:py-28" // Deep earthy brown background
>
  <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
    <CircleBackground color="#FDD2A1" className="animate-spin-slower" /> {/* Soft golden spinning background */}
  </div>
  <Container className="relative">
    <div className="mx-auto max-w-md sm:text-center">
      <h2 className="text-3xl font-medium tracking-tight text-[#FDD2A1] sm:text-4xl">
        आज ही अपने संस्कारों की दिशा तय करें
      </h2>
      <p className="mt-4 text-lg text-[#C6A15A]">
        केवल 30 सेकंड में पंजीकरण करें। ऐप डाउनलोड करें और घर बैठे संस्कार सेवाओं का लाभ उठाएं। 
        हम आपको वेदिक ज्ञान और मार्गदर्शन प्रदान करेंगे ताकि आपकी आध्यात्मिक यात्रा सफ़ल हो।
      </p>
      <div className="mt-8 flex justify-center">
        <AppStoreLink color="white" />
      </div>
    </div>
  </Container>
</section>

  )
}
