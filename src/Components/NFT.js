import React from 'react'
import img from './images/image-equilibrium.jpg'
import img2 from './images/image-avatar.png'

const NFT = () => {
  return (
    <div className='page-container flex w-screen h-screen lg:h-[100%]'>
        <div className='card flex flex-col w-[327px] h-[543px] bg-[#15263F] mx-auto my-auto rounded-2xl relative'>
            <img src={img} className='w-[278px] h-[278px] rounded-2xl mx-auto mt-[24px] font-main'></img>
            <div className='flex opacity-0 w-[278px] h-[278px] bg-[#00FFF8] rounded-2xl z-10 absolute ml-[24px] mt-[24px] hover:opacity-75'>
                <svg className='mx-auto my-auto' width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg>
            </div>
            <h2 className='text-white text-[22px] ml-[24px] mt-[24px] font-bold hover:text-[#00FFF8]'>Equilibrium #3429</h2>
            <p className='text-[#8BACD9] text-[18px] font-main mx-[24px] mt-[12px]'>Our Equilibrium collection promotes balance and calm.</p>
            <div className='w-[278px] h-[19px] flex flex-row justify-between mx-[24px] mt-[16px]'>
                <div className='flex flex-row items-center'>
                    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
                    <h2 className='text-[18px] text-[#00FFF8] font-bold ml-2'>0.041 ETH</h2>
                </div>
                <div className='flex flex-row items-center'>
                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
                    <h2 className='text-[18px] text-[#8BACD9] font-main font-bold ml-2'>3 days left</h2>
                </div>
            </div>
            <div className='border-[1px] w-[278px] h-[1px] bg-[#2E405A] mx-auto mt-[16px]'></div>
            <div className='flex flex-row items-center w-[278px] h-[33px] ml-[24px] mt-[16px]'>
                <img src={img2} className='w-[33px] h-[33px] rounded-full border border-white'></img>
                <h2 className='text-[#8BACD9] text-[14px] font-bold ml-4'>Creation of</h2>
                <h2 className='ml-2 text-[14px] text-white hover:text-[#00FFF8]'>Jules Wyvern</h2>
            </div>
        </div>
    </div>
  )
}

export default NFT