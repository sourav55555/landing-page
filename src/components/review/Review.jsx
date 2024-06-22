import "./review.css";

const Review = () => {
    return (
        <div className="mb-[90px] relative px-12 xl:px-[90px]">
            <div className="xl:p-11 p-8 border border-[var(--primary)] flex gap-8 xxl:gap-14 justify-between max-w-[1240px] mx-auto items-center">
            
                {/* user image part  */}
                <div className="flex items-center gap-5 xl:gap-10 xl:w-[40%] w-[45%]">
                    <img src="/review/image 9.png" alt="review img" className="w-1/2 object-cover h-full" />
                    <img src="/review/image 11.png" alt="review user" className="w-1/2 object-cover h-full" />
                </div>
                <div className="text-center w-[50%] xl:w-[55%]">
                    <p className="text-[#1E1E1E99] text-2xl vistara-light">Customer Review </p>
                    <p className="text-[32px] text-wrap leading-[44px] mt-3">“Really liked the Product's Quality and Finishing. I highly Recommend Gnapika to my friends.”</p>
                    <p className="vistara-medium text-lg ms-auto text-[#1E1E1E99] mt- w-fit">- Kadala Sahithi</p>

                    <button className="px-[25px] py-[15px] rounded-[40px] vistara-light mt-3 border border-[var(--primary)]">Shop Now</button>

                </div>

            </div>

            {/* ellipses  */}
            <div className="ellipse-20 h-[388px] w-[455px] absolute -bottom-28 -left-[225px]">
            </div>
            <div className="w-[311px] h-[400px] absolute -bottom-24 -left-[90px]">
                <img src="/review/review.png" className="w-full h-full" />
            </div>

            <div className="w-[280px] h-[228px] ellipse-21 absolute -top-10 -right-[115px]"></div>
            <div className="w-[220px] h-[262px] absolute -top-20 -right-[50px]">
                <img src="/review/reviewcurve.png" alt="" className="w-full h-full" />
            </div>
        </div>
    );
};

export default Review;