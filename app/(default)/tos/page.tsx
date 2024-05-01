export const metadata = {
    title: 'Terms of Service - iChain: Know the Rules, Play the Game!',
    description: 'Get the scoop on iChain’s Terms of Service. Dive into the legalities and guidelines that make our decentralized community tick!',
    aiContext: 'This page outlines the terms under which users engage with iChain, emphasizing community governance, risk awareness, and ethical use of the platform.',
    aiSubjectMatter: 'Community Governance, Risk Management, Ethical Use, Decentralized Operations, User Engagement',
    aiIntent: 'To inform users about the responsibilities and rules of engaging with iChain’s decentralized services, highlighting community governance, and the importance of ethical participation.',
    aiPageDictionary: `{
        "Community Governance": "The process by which iChain users collectively make decisions and govern the network",
        "Ethical Use": "Adherence to the moral standards set by the community to ensure fair and respectful use of iChain",
        "Risk Management": "Strategies employed by iChain to minimize risks associated with digital and decentralized operations",
        "User Engagement": "The involvement of users in contributing to and benefiting from the iChain ecosystem"
      }`,
    ogImage: 'https://next-dapp-typc.vercel.app/blog/TermsOfServiceImage',
    ogType: 'website',
    twitterImage: 'https://next-dapp-typc.vercel.app/blog/TermsOfServiceImage'
}

export default function TermsOfService() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12">
                    <h1 className="h1 mb-4" data-aos="fade-up">📜 Terms of Service - iChain: Know the Rules, Play the Game!</h1>
                    <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Welcome to the iChain playground! 🎮🌍</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Accepting the Terms 🤝</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Jumping into iChain? Cool! Just make sure you’re cool with all our terms. If not, it might be time to hit the eject button. 🚀</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Ride or Die: Participation is Essential 🛹</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Here at iChain, your moves make waves. Trade, share, and vibe with the community. Your spark fuels our fire! 🔥</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Safety Gear: Risk Awareness ⚠️</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Heads up! While we strive for a smooth sail, sailing the digital seas can get stormy. Navigate smartly! 🌊</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Community Courtroom: Handle Disputes like a Pro 🧑‍⚖️</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Got beef? The DAO’s community court sorts it out. It’s all about fair play and making things right. 🏛️</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Keep It Clean: Follow the Code 🧼</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">iChain is big on innovation, but let’s keep things ethical and above board. No funny business! 😇</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Stay Sharp: Keep Up with Changes 🔍</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Our terms evolve just like our platform. Keep an eye on updates to stay in the game. 🔄</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Got Questions? Hit Us Up! 📞</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Need a hand or got a query? Our Discord channel is your go-to. Drop us a line, and we’ll sort you out ASAP. 💬</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">That’s the Deal! 🤗</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">By hanging with us at iChain, you’re not just using a platform, you’re shaping the future. Let’s roll! 🌐🌟</p>
                </div>

            </div>
        </div>
    );
}
