import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'कैसे जानूं कि ये सुझाव सही हैं?',
      answer:
        'हमारा पूरा ध्यान है कि आपको श्रेष्ठ और शास्त्र सम्मत सुझाव दें। हमारे अनुयायियों के अनुभव और संतुष्टि इसका प्रमाण हैं।',
    },
    {
      question: 'क्या यह अंदरूनी जानकारी का दुरुपयोग नहीं है?',
      answer:
        'हम परंपरागत ज्ञान और वेदिक शिक्षाओं का आदान-प्रदान सरल बनाते हैं, जिससे ज्ञान सभी तक पहुँच सके, न कि किसी के प्रति पक्षपात।',
    },
    {
      question: 'क्या यह विधि धर्म और कर्म के अनुरूप है?',
      answer:
        'हम केवल मार्गदर्शन प्रदान करते हैं, कर्म आपके; हम सुनिश्चित करते हैं कि यह शास्त्रों और नीतियों के अनुरूप हो।',
    },
  ],
  [
    {
      question: 'क्या सुझाव देने वाले कर्म के प्रति सजग हैं?',
      answer:
        'हम सभी को सजग और सतर्क रहना सिखाते हैं, पर प्रत्येक व्यक्ति अपने कर्म के उत्तरदायी हैं।',
    },
    {
      question: 'यह सेवा कहाँ से संचालित होती है?',
      answer:
        'हमारे केंद्र वेदिक संस्कारों के मूल स्थानों के समीप हैं, जहां आध्यात्मिकता सर्वोपरि है।',
    },
    {
      question: 'क्या आयु सीमा है इस सेव का उपयोग करने के लिए?',
      answer:
        'हम सभी के लिए खुले हैं, पर आपकी आयु और परंपरा के अनुसार सेवा उपलब्ध कराते हैं।',
    },
  ],
  [
    {
      question: 'ऐप स्टोर पर यह सेवा कैसे उपलब्ध हुई?',
      answer:
        'आध्यात्मिक ज्ञान और सेवा के प्रति हमारो निष्ठा और उपयोगिता इस सेवा को स्वीकृति दिलाई।',
    },
    {
      question: 'अपने कर्मों की जिम्मेदारी कैसे निभाऊं?',
      answer:
        'हम आपका मार्गदर्शन करते हैं, लेकिन आपके कर्म और उनके फल आपके स्वयं के हैं।',
    },
    {
      question: 'कैसे बनूं सहभागी?',
      answer:
        'यदि आप वेद, संस्कार या धार्मिक ज्ञान में रुचि रखते हैं, तो हमसे संपर्क करें। हम मार्गदर्शन देंगे कि कैसे कार्यक्रमों में सक्रिय भाग लें।',
    },
  ],
]


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
