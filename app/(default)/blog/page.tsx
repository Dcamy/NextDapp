import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from '@/components/post-tags'
import PostItem from '@/components/post-item'

export const metadata = {
  title: 'Plog - iChain',
  description: 'Explore iChain’s Plogs: a marketplace of transformative projects driving decentralized innovation. Discover how each project contributes to a sustainable digital future and community empowerment.',
  aiContext: 'iChain’s Plog page serves as a dynamic display of ongoing projects, each detailed through Project Blogs that highlight their aims, technological underpinnings, and contribution to blockchain and decentralized solutions.',
  aiSubjectMatter: 'Decentralized Systems, Blockchain Innovation, Community Empowerment, Digital Sovereignty',
  aiIntent: 'To showcase iChain’s active and upcoming projects, providing visitors with insights into the innovative and transformative efforts undertaken by the community.',
  aiPageDictionary: `{
    "Project AI OS": "An AI operating system enhancing PC control and data privacy",
    "Project Defense Warriors": "A strategic game focusing on cybersecurity and network defense",
    "Project Embed": "A two-tier affiliate program aimed at community growth without traditional pyramid structures",
    "Project Meme Trader": "An AI-driven platform for trading meme coins, leveraging market trends for optimal investments",
    "Project Nomad": "Facilitates cryptocurrency to fiat conversion seamlessly across borders",
    "Project SGC": "SynergiCoin, a foundational asset for staking, loans, and life insurance within iChain",
    "Project Social Impact": "Supports grassroots NGOs and non-profits, driving societal change through blockchain",
    "Project Spartan": "Provides enhanced digital security, cloaking users in anonymity",
    "Project Stabilize": "Introduces SGCS, a stablecoin tied to life insurance for long-term wealth preservation",
    "Project Trust and Estate": "Blockchain-based solutions for secure, transparent estate planning"
  }`,
  ogImage: 'https://next-dapp-typc.vercel.app/blog/ProjectOverviewImage', // An image representing the collection of projects
  ogType: 'website',
  twitterImage: 'https://next-dapp-typc.vercel.app/blog/ProjectOverviewImage'
}


import Newsletter from '@/components/newsletter'

export default function Blog() {

  // Sort posts by date
  allPosts.sort((a, b) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  })  

  const featuredPost = allPosts[0]
  const posts = allPosts.slice(1)

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/*  Page header */}
            <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="h1" data-aos="fade-up">Current Project</h1>
            </div>

            {/*  Featured article */}
            <div className="pb-12 md:pb-20">
              <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <Link href={`/blog/${featuredPost.slug}`} className="relative block group" data-aos="fade-right" data-aos-delay="200">
                  <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                  {featuredPost.image &&
                    <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                      <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={featuredPost.image} width="540" height="303" alt={featuredPost.title} />
                    </figure>
                  }
                </Link>
                <div data-aos="fade-left" data-aos-delay="200">
                  <header>
                    <div className="mb-3">
                      {featuredPost.tags &&
                        <div className="mb-3">
                          <PostTags tags={featuredPost.tags} />
                        </div>
                      }
                    </div>
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                      <Link href={`/blog/${featuredPost.slug}`} className="hover:text-gray-100 transition duration-150 ease-in-out">{featuredPost.title}</Link>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-400 grow">{featuredPost.summary}</p>
                  <footer className="flex items-center mt-4">
                    <Link href="#">
                      <img className="rounded-full shrink-0 mr-4" src={featuredPost.authorImg} width={40} height={40} alt={featuredPost.author} />
                    </Link>
                    <div>
                      <Link href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{featuredPost.author}</Link>
                      <span className="text-gray-700"> - </span>
                      <span className="text-gray-500"><PostDate dateString={featuredPost.publishedAt} /></span>
                    </div>
                  </footer>
                </div>
              </article>
            </div>

            {/*  Articles list */}
            <div className="max-w-sm mx-auto md:max-w-none">

              {/*  Section title */}
              <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Upcoming Projects</h4>

              {/*  Articles container */}
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {posts.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />             
                ))}
              </div>

            </div>

            {/*  Pagination */}
            <nav className="flex justify-center pt-16" role="navigation" aria-label="Pagination Navigation">
              <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">Prev</span>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">1</Link>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">2</Link>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">3</Link>
                </li>
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">...</span>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">12</Link>
                </li>
                <li className="m-1">
                  <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">Next</Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </section>  
      <Newsletter />
    </>
  )
}