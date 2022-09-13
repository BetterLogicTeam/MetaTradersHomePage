import  Button  from '../Button/Button';
import './Home.css'
import {MdArrowForward,MdArrowBack} from 'react-icons/md'
import NftCard from '../NftCard/NftCard';
import { useState } from 'react';
const Home = () => {
    // const [nftdata,setnftdata] = useState([
    //     {
    //         imgsrc:'',
    //         heading:'',
    //     }
    // ])

    return ( 
        <div className=""  style={{background:'#072008'}}>
            <section className="container-fluid Home text-white" style={{backgroundImage: "url('/images/banner_bg.jpg')"}}>
            <div className='container h-100 d-flex align-items-center'>
                <div className='row m-0 align-items-center '>
                        <h1 className=' col-md-4 pt-5 display-4 fw-bold'>Get access to the world’s top performing master FOREX Traders</h1>
                        <div className='row m-0'>
                            <p className=' col-md-4'>When you join the Meta Traders Army (MTA) you will be able to stake your NFT to yield rewards of 7-10% per week</p>
                        </div>
                        <Button text='Read White Paper'/>
                </div>
            </div>
            </section>
            <section className='nftreward text-white '  style={{background:'#072008'}}>
                <div className='container'>
                    <div className=' row m-0 justify-content-end'>
                    <div className=' col-md-11 d-flex justify-content-between flex-row pt-5'>
                        <h3 className=' fw-bold'>Reward NFTs</h3>
                        <div className=' d-flex flex-row '>
                            <div className='movebtn rounded-2'>
                                <button className=' btn  text-white bg-dark btn1'><MdArrowBack /></button>
                            </div>
                            <div className='movebtn rounded-2 ms-2'>
                                <button className=' btn  text-white bg-dark btn1'><MdArrowForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex flex-row col-md-12 my-4 cards'>
                        <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading='Meta Trader' btntext={'Mint'} />
                        <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading='Meta Trader' btntext={'Mint'} />
                        <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading='Meta Trader' btntext={'Mint'} />
                        <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading='Meta Trader' btntext={'Mint'} />
                        <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading='Meta Trader' btntext={'Mint'} />
                        <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading='Meta Trader' btntext={'Mint'} />
                        <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading='Meta Trader' btntext={'Mint'} />
                        <NftCard imgsrc='/images/metatrader-monkey.jpeg' heading='Meta Trader' btntext={'Mint'} />
                    </div>
                    </div>
                </div>

            </section>
            <section className=''>
            <div className='container'>
                    <div className=' row m-0 justify-content-end abouttext text-white' style={{backgroundImage: "url('/images/camo-back.jpg')"}}>
                    <div className=' col-md-11 pt-5'>
                        <div className='row m-0 justify-content-start col-12'>
                            <div className=' col-md-10 text-start px-5 py-4'  style={{background:'#072008'}}>
                                <h4 className='my-3'>About the Project</h4>
                                <p>We pull together as one army, trade together as one army. We move markets.</p>
                                <p className='my-2'>We are MetaTrader Army</p>
                                <p>A unique opportunity to have access to, and yield rewards from the world’s top performing master FOREX Traders. When you join the Meta Traders Army (MTA) you will be able to stake your NFT (which is given to all token holders who take part in the presale) to yield rewards of 7-10% per week. These rewards are not from minting more tokens (which could devalue the project) but are derived from trading the community wallets with expert trusted master traders on the FOREX markets around the world.</p>
                                <p className='my-2'>It’s important to understand that while the entire crypto market is valued at around 1 Trillion dollars, the financial markets trade 6 times that every day that they are open (5 days a week) and that’s 6 Trillion dollars where there are enormous gains to be made, when you have access to the right trading partners, that’s where MetaTrader Army comes in.</p>
                                <p className='my-2'>MetaTrader.Army</p>
                                <img src='/images/blog_line.png' />
                                <h4 className='my-3'>Working with the world’s best FOREX and Crypto Traders</h4>
                                <p>Link up to the best metatraders in the world, you could never access the best of the best world class FOREX traders with a $100 account, these guys and girls trade in the millions per week. However if you own a footsoldier NFT and work your way up the ranks inside the MetaTrader Army you can eventually have LIVE signals from the best of the best, or of course just sit back and yield from your staked NFT.</p>
                                <p className='my-2'>Build up your own army within the project, have greater yield, accelerate your gains by holding more AMMO and ranks.</p>
                                <p>A unique opportunity to have access to, and yield rewards from the world’s top performing master FOREX Traders. When you join the Meta Traders Army (MTA) you will be able to stake your NFT (which is given to all token holders who take part in the presale) to yield rewards of 7-10% per week. These rewards are not from minting more tokens (which could devalue the project) but are derived from trading the community wallets with expert trusted master traders on the FOREX markets around the world.</p>
                                <p className='my-2'>We have the best FOREX and CRYPTO metatraders in the world..</p>
                                <p className='my-2'>Our project is a bridge between the 6 trillion dollar a day FOREX market and the world of Defi (crypto, NFTs and metaverse opportunities), gains earned by pooling your NFT and token are paid out monthly to the holders. (40% to NFT holders and 40% to Token holders, remaining profits held for accelerator gains for those staking NFT and Token together as well as partner projects)</p>
                                <p className='my-2'>You get the inside track on the markets with our signals and data.</p>
                                <p className='my-2'>Great signals from the best of the best world class traders, we have the SPECIAL FORCES of traders on our shoulder and managing our community assets. Don’t worry though, this doesn’t make our token or NFT a security, when pooled together we enjoy the profits in return of typically 7-10% per week, meaning one Private Foot Soldier purchased at $100 should over a year of staking yield approximately $3-4,000 dependant on the markets and the success of our traders.</p>
                                <p className='my-2'>Remember, capital is at risk when trading on the FOREX markets, 6 Trillion dollars a day go through the global financial markets, many of our professional traders (who will manage our funds) make in excess of $100,000 a week. We are able to copy their trades and give you access at the higher tiers to trading bots and even live signals. If you’re not a trader yourself then you’re able to sit back and relax, watching your staked NFT’s in the hands of these traders give returns that you just cannot receive from the traditional banks.</p>
                                <p className='my-2'>OUR TRADERS remain anonymous, they will not reveal their identities. There is a simple reason for this, we pay them commissions, they are able to work with bigger budgets than they might do otherwise, but they do not want to come under the magnifying glass of any SEC or regulatory bodies around the world.</p>
                                <p className='my-2'>Buy and Stake NFTs to earn monthly rewards, or stake your Private Foot Soldiers to earn higher ranks and therefore accelerated reward percentages from the community profit pools and farms.</p>
                                <img src='/images/blog_line.png' />
                                <h4 className='my-3'>Rewards / Tokenomics</h4>
                                <p>ACCESS and INFORMATION</p>
                                <p className='my-2'>The more AMMO you hold, the greater your rank the more protection you have. The AMMO Token is the foundation of the MetaTraderArmy, we will have a small tax on all buy and sell transactions of 2%, this funds the community wallet as well as marketing the project. Anyone holding AMMO in their wallets will be able to stake this plus their NFT to earn an accelerated reward, the higher your rank and the greater the amount of token you hold the greater the acceleration bonus on your staking in the NFT community farms.</p>
                                <p>Upgrade your status to status from Private to Sergeant to Captain to Colonel to General The higher your rank the more signals and access you receive.</p>
                                <p className='my-2'>We can continually mint at the floor price (Privates)</p>
                                <p className='my-2'>Access to the world's best traders by pooling and earning together.</p>
                                <p className='my-2'>Take 5 Privates / Foot Soldiers and burn them to earn one Sergeant Take 4 Sergeants to stake to earn Captain Rank Level up from Captain to Colonel by staking 3 Captains Make it to General with 2 Colonels REWARDS increase the higher the RANK you have</p>
                                <p className='my-2'>AMMO is the token (this will accelerate rewards as well as ranks)</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Home;