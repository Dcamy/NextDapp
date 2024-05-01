export const metadata = {
  title: 'About - iChain',
  description: 'Discover iChain: Revolutionizing blockchain with a Proof of Contribution system that empowers developers, fosters community engagement, and champions digital sovereignty. Join us in shaping a decentralized, transparent future.',
  aiContext: 'A detailed overview of iChain’s projects, team dynamics, and groundbreaking blockchain initiatives aimed at creating a sustainable digital ecosystem that rewards innovation and ensures data privacy.',
  aiSubjectMatter: 'Blockchain, Digital Sovereignty, Decentralized Innovation, Community Building, Environmental Sustainability',
  aiIntent: 'Provide a comprehensive understanding of iChain’s ethos, team, and transformative blockchain projects aimed at enterprise and consumer segments looking for ethical and innovative tech solutions.',
  aiPageDictionary: `{
    "The DAO": "Governing body of iChain",
    "Symbie": "Refers to AI, humans, or their union depending on context",
    "Minion Protocol": "Efficient communication system using all available words and emojis, reminiscent of 'minion-speak'",
    "Babble about Babble": "Intelligent, secure discussion on iChain about ongoing gossip",
    "iChain": "A private, decentralized, intelligent web platform for various activities within ethical boundaries",
    "Adaptocracy": "Governance model of iChain's DAO",
    "Project Embed": "Top-priority, anonymous, decentralized two-tier affiliate marketing system",
    "White Label": "Allows rebranding of iChain's core infrastructure by other DAOs for network expansion",
    "PoC (Proof of Contribution)": "Recognition and reward system for contributions",
    "Lifetime Rewards": "Residual rewards for ongoing use of a contributor's project",
    "SGC": "SynergiCoin is on-demand minting of The DAO's token to reward contributions",
    "SGCS": "SynergiCoin Stable, tied to USD reflecting current living costs",
    "OI and AI": "Organic and artificial intelligences",
    "Intelligences": "General term for both organic and artificial intelligences involved in iChain"
  }`,
  ogImage: 'https://example.com/path/to/image.jpg',
  ogType: 'website',
  twitterImage: 'https://example.com/path/to/image.jpg'
}



import HeroAbout from '@/components/hero-about'
import TeamImages from '@/components/team-images'
import Timeline from '@/components/timeline'
import Team from '@/components/team'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Career from '@/components/career'
import Clients from '@/components/clients'
import Newsletter from '@/components/newsletter'

export default function About() {
  return (
    <>
      <HeroAbout />
      <TeamImages />
      <Timeline />
      <Team />
      <TestimonialsCarousel />
      <Career />
      <Clients />
      <Newsletter />
    </>
  )
}