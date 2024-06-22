import React from 'react';
import "./subscribe.css";

const Subscribe = () => {
    return (
        <div className='xl:px-[100px] px-16 py-[70px] bg-[#FFF4F3] flex items-center xl:gap-[90px] gap-14 justify-center subscribe-border'>

            
            <div className='w-[40%]'>
                <p className='luxiachy text-4xl mb-8'>
                    Subscribe to <span className='text-[var(--red)]'>our newsletter</span> and get updates on <span className='text-[var(--red)]'>new arrival</span>
                </p>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='your email address'
                        className='ps-[30px] pe-[155px] py-5 text-xl w-full vistara-light border border-[#882437] rounded-[80px] bg-[#FFF4F3]'
                    />
                    <button className='px-[25px] py-[15px] rounded-[40px] bg-[#E9AB26] vistara-light absolute top-1/2 -translate-y-1/2 right-[9px]'>Subscribe</button>
                </div>
            </div>
            
            <div className='h-full'>
                <div className="flex items-center flex-1 flex-col h-full">
                    <div className="h-1 w-1 bg-black rotate-45"></div>
                    <div className=" w-[1px] h-[180px] bg-[var(--primary)]"></div>
                    <div className="h-1 w-1 bg-black rotate-45"></div>
                </div>
            </div>

            <div className='w-[40%]'>
                <p className='luxiachy text-4xl'>Follow us on Instagram</p>
                <div className='flex items-center gap-2 mt-4'>
                    <img src="/public/subscribe/Rectangle 12.png" className='w-1/4 object-cover h-full' alt="insta" />
                    <img src="/public/subscribe/Rectangle 13.png" className='w-1/4 object-cover h-full' alt="insta" />
                    <img src="/public/subscribe/Rectangle 14.png" className='w-1/4 object-cover h-full' alt="insta" />
                    <img src="/public/subscribe/Rectangle 15.png" className='w-1/4 object-cover h-full' alt="insta" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;