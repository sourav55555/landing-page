
const Footer = () => {
    return (
        // footer section 
        <footer className='xl:px-[90px] px-14  pt-[70px] bg-[#FFF4F3] '>

            <div className="flex justify-between border-b border-[#1E1E1E66] pb-10">
                <div className="w-[250px] -mt-8">
                    <img src="/public/logo/Frame 13.png" alt="" />
                    <p className='text-[#1E1E1EB2]'>
                        We are a products  brand that offers the best of contemporary, ethnic Indian fashion, and fusion-wear styles.
                    </p>
                </div>

                <div>
                    <h3 className='luxiachy text-2xl mb-[30px]'>Quick Link</h3>
                    <div className='vistara-light flex flex-col space-y-5'>
                        <a href="#">Wooden</a>
                        <a href="#">Non-wood</a>
                        <a href="#">Collection</a>
                        <a href="#">Virtual</a>
                    </div>
                </div>

                <div>
                    <h3 className='luxiachy text-2xl mb-[30px]'>Vastram</h3>
                    <div className='vistara-light flex flex-col space-y-5'>
                        <a href="">About Us</a>
                        <a href="">Contact</a>
                        <a href="">Blog</a>
                        <a href="">Press</a>
                        <a href="">Careers</a>
                    </div>
                </div>

                <div>
                    <h3 className='luxiachy text-2xl mb-[30px]'>Policies</h3>
                    <div className='vistara-light flex flex-col space-y-5'>
                        <a href="">Terms & Conditions</a>
                        <a href="">Shipping</a>
                        <a href="">Return</a>
                        <a href="">Payment Policy</a>
                    </div>
                </div>

                <div>
                    <h3 className='luxiachy text-2xl mb-[30px]'>My Account</h3>
                    <div className='vistara-light flex flex-col space-y-5'>
                        <a href="">Login</a>
                        <a href="">Shopping Bag</a>
                        <a href="">Wishlist</a>
                        <a href="">Order Tracking</a>
                        <a href="">Order History</a>
                    </div>
                </div>
                
            </div>
            <div className="pt-5 pb-7 flex justify-between items-center vistara-light">
                <p>© 2007 - 2023  Gnapika All Rights Reserved.</p>
                <p>We Ship Across the World</p>
            </div>
        </footer>
    );
};

export default Footer;
