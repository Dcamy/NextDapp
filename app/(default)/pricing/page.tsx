export const metadata = {
  title: 'Pricing - iChain',
  description: 'Explore iChain\'s innovative Pricing models. Benefit from our Proof of Contribution system with SynergiCoin, providing transparent, value-driven blockchain solutions.',
  aiContext: 'A detailed contextual overview of blockchain services provided by iChain, highlighting innovative pricing and strategic benefits.',
  aiSubjectMatter: 'DeFi, Blockchain, Innovation',
  aiIntent: 'Pricing page for blockchain services targeting enterprises and consumers alike'
}

import PricingTables from '@/components/pricing-tables'
import Faqs from '@/components/faqs'
{/*import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'*/}

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <Faqs />
      {/*<Testimonials />
      <Cta />*/}
    </>
  )
}