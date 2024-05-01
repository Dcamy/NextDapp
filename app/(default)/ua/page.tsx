export const metadata = {
    title: 'User Agreement - iChain: Play Nice, Stay Cool!',
    description: 'Check out the rules of engagement for using iChain. Understand your rights, responsibilities, and how to be an awesome community member!',
    aiContext: 'This page details the user agreement for iChain, outlining user responsibilities, the terms of platform use, and guidelines for community interaction.',
    aiSubjectMatter: 'User Responsibilities, Platform Usage Terms, Community Engagement, Ethical Conduct, Digital Rights',
    aiIntent: 'To inform users about the terms and conditions of using iChain, emphasizing the importance of ethical conduct, community responsibility, and adherence to platform guidelines.',
    aiPageDictionary: `{
        "Ethical Conduct": "Behaviors and actions within iChain that uphold community values and standards",
        "Community Responsibility": "The obligations each user has to maintain the integrity and health of the platform",
        "Digital Rights": "The rights users have regarding their data and contributions on iChain"
      }`,
    ogImage: 'https://next-dapp-typc.vercel.app/blog/UserAgreementImage',
    ogType: 'website',
    twitterImage: 'https://next-dapp-typc.vercel.app/blog/UserAgreementImage'
}

export default function UserAgreement() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12">
                    <h1 className="h1 mb-4" data-aos="fade-up">📜 User Agreement - iChain: Play Nice, Stay Cool!</h1>
                    <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Got your game face on? 🎮 Here's how to keep it cool and make the most of iChain!</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">License to Play: Your iChain Pass 🎟️</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Jump in! We're giving you a personal, non-transferable ticket to all things iChain, strictly in line with our house rules.</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Do’s and Don'ts: Keep It Tidy 🧹</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Play fair, respect privacy, and don’t try to break things. Stick to the paths we’ve made and we’ll all have a good time.</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Your Stuff, Your Rights: Handle with Care 🛡️</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Your creations? Your say. Just remember, using our platform means playing by our rules when it comes to data and privacy.</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Break the Rules, Break the Spell: No Magic Wand Here 🚫✨</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Cross the line, and we might have to say goodbye. We keep iChain magical by ensuring everyone respects the vibe.</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Change is Constant: Stay in the Loop 🔁</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">As iChain evolves, so do our terms. Keep up to date to stay on the right track.</p>

                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Need Help? Shout Out! 📢</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">Questions? Our Discord support squad is on standby. Drop a line, and we’ll get you sorted ASAP.</p>
                </div>

                <div className="pb-12">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Sign on the Dotted Line: Let’s Make It Official 🖊️</h3>
                    <p className="text-gray-400 mb-4" data-aos="fade-up">By using iChain, you’re agreeing to these terms. Dive in, respect the code, and let’s build something incredible together!</p>
                </div>

            </div>
        </div>
    );
}
