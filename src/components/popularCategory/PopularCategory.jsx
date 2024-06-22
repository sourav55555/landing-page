import React from 'react';
import "./popularCategory.css";

const category = [
    {
        image: "/category/simple.png",
        category: "simple"
    },
    {
        image: "/category/keychain.png",
        category: "keychains"
    },
    {
        image: "/category/antiques.png",
        category: "antiques"
    },
    {
        image: "/category/woodDisplay.png",
        category: "Wood Display"
    },
    {
        image: "/category/hanging.png",
        category: "hanging"
    },
    {
        image: "/category/photoframe.png",
        category: "Photo frames"
    },
    {
        image: "/category/indo.png",
        category: "indo-western"
    },
    {
        image: "/category/sets.png",
        category: "sets"
    }

]

const PopularCategory = () => {
    return (
        <div className='px-10 relative mb-[90px]'>

            <div className='min-h-screen p-[60px] w-fit relative mx-auto bg-[#FFF4F3] overflow-hidden'>
                <div className='flex items-center gap-7 xxl:gap-9'>

                    <div className="flex items-center flex-1">
                        <div className="h-1 w-1 bg-black rotate-45"></div>
                        <div className=" h-[1px] w-full bg-[var(--primary)]"></div>
                    </div>

                    <p className='text-5xl luxiachy'>Popular Categories</p>
                    <div className="flex items-center flex-1">
                        <div className=" h-[1px] w-full bg-[var(--primary)]"></div>
                        <div className="h-1 w-1 bg-black rotate-45"></div>
                    </div>

                </div>

                {/* popular categories  */}
                <div className='mt-10 grid grid-cols-4 justify-center gap-6 xxl:gap-10 relative z-50'>
                    {
                        category.map((data, index) =>
                            <div key={index} className='xxl:w-[280px] mx-auto relative'>

                                <img src={data.image} alt={data.category} className='object-contain w-full' />
                                <p className='text-2xl vistara-medium text-white uppercase absolute bottom-10 left-1/2 -translate-x-1/2 w-fit tracking-wider xl:text-nowrap'>{data.category}</p>

                            </div>
                        )
                    }
                </div>

                <div className='ellipse-11 w-[580px] h-[250px] absolute -top-14 -left-32'>
                </div>

            </div>

            <div className='h-[450px] absolute -bottom-14 left-0 z-40'>
                <img
                    src="/category/categoryvector.png"
                    className='h-full'
                    alt=""
                />
            </div>
        </div>
    );
};

export default PopularCategory;