import "./banner.css";

const Banner = () => {
    return (
        // banner section 
        <div className="pt-[75px] mb-1 relative">

            <div className=" flex items-center gap-5 justify-center ps-12 xxl:ps-[100px] pe-8 xxl:pe-[50px]">

                <div className="xxl:max-w-[678px] w-1/2 ">
                    <h2 className="luxiachy text-6xl xxl:text-[85px] leading-[83px]">

                        Experience the <span className="text-[var(--red)] block">Harmonious</span> Fusion of <span className="text-[var(--red)]">Indian Tradition</span> and <br /> Modern <span className="text-[var(--red)]">Elegance</span>

                    </h2>

                    {/* category suggestion  */}
                    <div className="mt-12 vistara-light">
                        <p className="text-2xl text-[#1E1E1E80] ">What are you looking for?</p>
                        <div className="flex flex-wrap gap-[10px] mt-5">
                            <p className="px-5 py-[10px] rounded-[40px] border border-[var(--primary]">
                                Name Plates
                            </p>
                            <p className="px-5 py-[10px] rounded-[40px] border border-[var(--primary]">
                                Photo Frame
                            </p>
                            <p className="px-5 py-[10px] rounded-[40px] border border-[var(--primary]">
                                Keychains
                            </p>
                            <p className="px-5 py-[10px] rounded-[40px] border border-[var(--primary]">
                                Miniatures
                            </p>
                            <p className="px-5 py-[10px] rounded-[40px] border border-[var(--primary]">
                                Wooden Panels
                            </p>
                            <p className="px-5 py-[10px] rounded-[40px] border border-[var(--primary]">
                                Wall Hangings
                            </p>
                            <p className="px-5 py-[10px] rounded-[40px] border border-[var(--primary]">
                                Wooden Boxes
                            </p>
                        </div>
                        <div className="flex gap-2 items-center mt-[30px] cursor-pointer">
                            <p className="w-[30px] h-[1px] bg-[var(--primary)]"></p>
                            <p>Explore all</p>
                        </div>
                    </div>
                </div>

                {/* banner image  */}
                <div className="xxl:min-w-[590px] w-1/2">
                    <img src="/banner/Group 11.png" className="w-full" alt="banner image" />
                </div>
            </div>
            <div className="mt-4">
                <img src="/banner/Vector (1).png" className="w-full" alt="curve" />
            </div>

            {/* ellipses */}
            <div className="absolute -top-[60px] -left-[245px] h-[254px] w-[450px] ellipse-6">
            </div>
            <div className="absolute top-8 left-[43%] h-[300px] w-[550px] ellipse-7">
            </div>
            <div className="absolute -bottom-[40px] -right-[245px] h-[228px] w-[612px] ellipse-8">
            </div>

        </div>
    );
};

export default Banner;