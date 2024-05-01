'use client'

import { useState } from 'react'

export default function PricingTables() {

 

  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="fade-up">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">You don't pay us for s***! But we'll reward you every chance we get :)</p>
          </div>

          {/* Pricing tables */}
          <div>

            {/* Pricing toggle */}
            <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="400">
              <div className="inline-flex items-center">
                <div className="text-gray-500 font-medium mr-3">Public</div>
                <div className="form-switch">
                  <input type="checkbox" name="pricing-toggle" id="pricing-toggle" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
                  <label className="bg-gray-600" htmlFor="pricing-toggle">
                    <span className="bg-gray-200" aria-hidden="true"></span>
                    <span className="sr-only">Enable to see yearly prices</span>
                  </label>
                </div>
                <div className="text-gray-500 font-medium ml-3">Private</div>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

              {/* Pricing table 1 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">{annual ? '🔒 Trust Fund' : '🔓 Fund'}</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">{annual ? 'Lifetime' : '$'}</span>
                    <span className="h2">{annual ? 'Limitless' : '1:1.1'}</span>
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">{annual ? '' : 'SGC'}</span>
                  </div>
                  <div className="text-gray-400">{annual ? 'Secure Your Legacy! 👑🔒Mint to your PRIVATE Trust and unlock limitless SGCS through life insurance.' : 'Invest Like a Boss! 💸💼Your crypto contributions fund big dreams, not tax coffers.'}</div>
                </div>
                <div className="font-medium mb-3">Features include:</div>
                <ul className="text-gray-400 -mb-3 flex-grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🚀 Technological Advancement: Invest in cutting-edge solutions.' : '🚀 Infinite ROI: Endless returns, endlessly awesome.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🔄 Enduring ROI: Profits that persist.' : '🎮 Decentralized Control: You\'re in the driver\'s seat.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🏛️ Legacy Building: Craft your dynasty.' : '🌍 Direct Impact Funding: See your impact... instantly.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '📈 Long-Term Asset Appreciation: Watch your assets grow.' : '🏰 Generational Wealth: Build a legacy, not just wealth.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '💸 Continuous (tax-free) Dividends: Keep earning, tax-free.' : '🌌 Funding Utopia: Seeking perfection in projects.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🌱 Perpetual Funding: Never stop funding the future.' : '🤑 Pissing Off Bankers: Take that, traditional finance!'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🌍 Catalyst for Change: Drive global transformations.' : '🔄 Being the Change: Lead the revolution'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🌿 Eco-Innovations: Green solutions, grand results.' : '🔥 Proof of Contribution, Coded... Done!'}</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="https://discord.gg/bpQFpKzu">👉 Start Paid Trial</a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
                <div className="absolute top-0 right-0 mr-6 -mt-4">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">{annual ? 'Private 🖥️👤🕶️🔒' : 'Public'}</div>
                </div>  
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">{annual ? '🔒 Loan Settlements' : '🔓 Donate'}</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">{annual ? '$' : '$'}</span>
                    <span className="h2">{annual ? '1:1.5' : '1:1.25'}</span>
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">{annual ? 'SGC' : 'SGC'}</span>
                  </div> 
                  <div className="text-gray-400">{annual ? 'Student Loans? Crush \'Em! 🎓💥Pay off loans and mint more SGC for every dollar. It\'s a win-win!' : 'Give More, Get More! ❤️🎁 Your fiat donations to preferred NGOs earn you 1.5x SGCS from The DAO.'}</div>
                </div>
                <div className="font-medium mb-3">Features include:</div>
                <ul className="text-gray-400 -mb-3 flex-grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '⚡ Instant ROI: Fast returns for faster freedom.' : '🔍 Transparent Contributions: See where every dollar goes.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🥾 Stepping on Fanny Mae\'s Balls: Twice for good measure!' : '🤖 AI and Orphanage Support: Aid cutting-edge tech and care.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '💱 Simple Crypto Conversion: Seamless, easy peasy.' : '🌱 Grassroots Edge: Boost small, mighty projects.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '👫 Peer to Peer: Direct impact, direct connections.' : '🏛️ Public Accountability: We keep it all open.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '😊 Feeling Good About Yourself: Do good, feel good.' : '👀 Empowerment Through Visibility: Shine a light on hidden gems.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '📉 Tax Benefit Optimization: Smart moves for smart money.' : '🤝 Community Involvement: Help us choose who to support.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🤲 Social Impact Recognition: Get noticed for doing right.' : '🎖️ Rewarding Transparency: Honesty pays here.'}</span>
                  </li>                  
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🔥 Proof of Contribution, Coded... Done!' : '🔥 Proof of Contribution, Coded... Done!'}</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="https://discord.gg/bpQFpKzu">👉 Start Paid Trial</a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">{annual ? '🔒 Mint to Trust' : '🔓 Mint to Wallet'}</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">{annual ? 'Lifetime' : 'SGC'}</span>
                    <span className="h2">{annual ? 'Limitless' : '1:'}</span>
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">{annual ? '' : 'Unknown'}</span>
                  </div>
                  <div className="text-gray-400">{annual ? 'Build Immortal Wealth! 🏰💰 Mint to your Trust for security backed by solid strategies.' : 'Quick Access, Serious Trade-offs! 💸🚨 Minting to your wallet exposes you to the harsh realities of public blockchains.'}</div>
                </div>
                <div className="font-medium mb-3">Features include:</div>
                <ul className="text-gray-400 -mb-3 flex-grow">                  
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🔏 Trust-Owned Assets: Safe, secure, and yours.' : '🌐 Public Exposure: Every move tracked, zero privacy.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🎫 Fulfill Membership Requirements: Your key to the inner circle.' : '📉 Market Swings: Ride the volatile waves of crypto prices.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🚫 Tax-Free Loan Distributions: Borrow against the future, tax-free.' : '🔍 Tax Watch: Potential tax liabilities in some regions.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🏛️ Legacy Building: Lasting wealth for future generations.' : '🚷 Theft Risk: High vulnerability to digital thieves.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '📜 Estate Planning Integration: Seamless transition of your legacy.' : '🛂 Regulatory Eyes: Stay visible to regulators, ready or not.'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '💼 Cryptocurrency Estate Benefits: Crypto as a cornerstone of your estate.' : '💥 Short-term Gain vs. Long-term Pain: Quick bucks now, missed wealth later.!'}</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🛡️ Inflation-Proof SGCS for Daily Use: Protect your purchasing power.' : '🔚 Legacy Limitations: What you see today is what you get, nothing more.'}</span>
                  </li><li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{annual ? '🎯 Decentralized, Generational, Wealth, Coded... Done' : '🚫 Think Long-Term, Act Wisely!'}</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="https://discord.gg/bpQFpKzu">{annual ? '👉 Start Paid Trial' : '👉 Consider Secure Alternatives'}</a>
                </div>
              </div>

            </div>

            {/* Bottom infobox */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800">
              <div className="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0">Expecting more than 1000 Active End Users?</div>
              <div>
                <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700" href="https://discord.gg/bpQFpKzu">Contact us</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
