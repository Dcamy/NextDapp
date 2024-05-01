export const metadata = {
  title: 'Home - iChain',
  description: 'Welcome to iChain, where every contribution powers the future. Engage with a network that values your data, computing power, and innovative ideas, transforming them into tangible rewards and lasting legacies. Join us in shaping a decentralized world.',
  aiContext: 'An introduction to iChain’s platform, emphasizing the diverse ways users can engage—whether through funding, data sharing, or computing power—to drive and benefit from blockchain and decentralized technologies.',
  aiSubjectMatter: 'Blockchain, Decentralization, Innovation, Community Engagement',
  aiIntent: 'To introduce new visitors to iChain and highlight how their participation in various forms—funding, data sharing, computing—can enrich their legacy and the global digital ecosystem.',
  aiPageDictionary: `{
    "Proof of Concept": "A demonstration that iChain's foundational ideas are feasible",
    "Minion Protocol": "A communication system ensuring efficient and secure data exchange across iChain",
    "Babble about Babble": "A feature that fosters transparent and secure discussions within iChain",
    "SGC (SynergiCoin)": "The reward token of iChain, rewarding contributions and participation",
    "Embed and Prosper": "iChain's affiliate system promoting growth and transparency",
    "Lifetime Rewards": "Ongoing rewards system for continuous contributions to the platform",
    "Project AI OS": "A project focused on creating an AI-driven operating system for enhanced data privacy",
    "Project Defense Warriors": "A strategic game enhancing cybersecurity skills among users"
  }`,
  ogImage: 'https://next-dapp-typc.vercel.app/homepage-image.jpg', // Image depicting a vibrant, connected digital world
  ogType: 'website',
  twitterImage: 'https://next-dapp-typc.vercel.app/homepage-image.jpg'
}


import Hero from '@/components/hero-home'
import Process from '@/components/process'
import FeaturesHome from '@/components/features'
import Tabs from '@/components/tabs'
import Target from '@/components/target'
import News from '@/components/news'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <FeaturesHome />
      <Tabs />
      <Target />
      <News />
      <Newsletter />      
    </>
  )
}
