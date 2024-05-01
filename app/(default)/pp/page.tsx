export const metadata = {
    title: 'Privacy Policy - iChain',
    description: 'Learn about iChain’s commitment to privacy and data protection. Discover how we collect, use, and share your information while ensuring your data remains secure and under your control.',
    aiContext: 'iChain’s Privacy Policy page provides users with transparency on how their personal information is collected, processed, and utilized within the iChain ecosystem. It outlines the measures taken to protect user privacy and maintain data security in line with regulatory standards and best practices.',
    aiSubjectMatter: 'Data Privacy, Data Security, Transparency, User Control, Regulatory Compliance',
    aiIntent: 'To inform users about iChain’s privacy practices, including data collection, usage, and sharing policies. To assure users of iChain’s commitment to protecting their privacy and maintaining the security of their personal information.',
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
  

export default function PrivacyPolicy() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12">
                    <h1 className="h1 mb-4" data-aos="fade-up">🛡️ iChain Privacy Policy</h1>
                    <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Welcome to iChain! 🚀</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">What Info Do We Collect? 🤔</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Personal Info</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Voluntary Vibes Only: We don’t force you to tell us who you are. If you wanna share, that’s cool – like if you’re doing KYC stuff to boost your transaction limits. Whatever you share is locked down tight according to our DAO-approved rules. 🏦🔒</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Decentralized Data Storage: Your personal details? They’re scattered across the blockchain, encrypted like Fort Knox. Only you hold the keys to your data castle. 🏰✨</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Transactional Data</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Keeping It Low-Key: Transactions are all about pseudonyms. Your real identity? We don’t need it unless you say so. 🕶️</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Solid Security: Every transaction is wrapped up with top-notch crypto to keep your business, your business. 🛡️💼</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Usage Data</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Just the Essentials: We track the bare minimum – think how many folks are online and what features are hot. This helps us make iChain even better, without snooping into your personal space. 📊🔧</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Improvement Only: We use data to upgrade our network and security – not for selling ads or anything shady. 🚀🙅</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">How Do We Use Your Info? 🧐</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Network and Security: We use your data to keep iChain safe and sound, to squash bugs, and to make sure everything runs smooth.</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Making Things Better: Your feedback and usage help us tweak iChain to be the best it can be.</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Sharing Your Stuff – Only If You Wanna 🔄</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Direct Deals: Fancy selling your data on the iChain marketplace? Set your price and terms. It’s all under your control. 💸🤝</p>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Total Control: You decide who sees your data and when. It’s your show, we’re just hosting it. 🎛️</p>
                </div>

            </div>
        </div>
    );
}
