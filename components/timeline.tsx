export default function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Bringing the world's ideas to life</h2>
            <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
            <div className="pl-2">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">Network Roots</div>
              <div className="flex items-center mb-3">
                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 1</div>
                <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                <h4 className="h4">Embed & Prosper</h4>
              </div>
              <p className="text-lg text-gray-400">Join and carve your niche in the network, securing generational wealth with our two-tier affiliate system. Longevity is rewarded here — your efforts echo in perpetuity.</p>
            </div>
          </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
            <div className="pl-2">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">Evolution</div>
              <div className="flex items-center mb-3">
                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 2</div>
                <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                <h4 className="h4">SynergiCoin Rollout</h4>
              </div>
              <p className="text-lg text-gray-400">SGC will energize our ecosystem, offering an asset that honors each byte of contribution. Dive in, mint trust, and transform your digital efforts into a tangible legacy.</p>
            </div>
          </div>

            {/* 3rd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
            <div className="pl-2">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Mega Growth</div>
                  <div className="flex items-center mb-3">
                    <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 3</div>
                    <h4 className="h4">Marketplace Launch</h4>
                  </div>
                  <p className="text-lg text-gray-400">Unveil the power of collective endeavor with our Marketplace. Here, Innovation meets Investment; every Proposal, whether a Nascent idea or a Polished plan, gains the Chance to thrive, powered by Community support and Blockchain transparency. Konami - where creativity cheats the system, unlocking possibilities one idea at a time.</p>
                </div>
            </div>

            {/* 4th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Neural Nexus Emergence</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 4</div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">AI OS: A Symphony of Synapses</h4>
                </div>
                <p className="text-lg text-gray-400">"Immerse yourself in the Neural Nexus: a seamless melding of individual insight and aggregate acumen. Our pioneering AI OS aligns your everyday digital actions with a globally distributed neural network, ensuring your private data remains both shielded and sovereign under our encrypted VPN's watchful embrace."</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
