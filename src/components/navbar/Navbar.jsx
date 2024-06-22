import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        // navbar 
        <nav className="xxl:px-[85px] ps-4 pe-6 flex justify-between items-center nav-border">
            {/* logo  */}
            <div>
                <img
                    src="/logo/Frame 13.png"
                    alt="gnapika"
                    className='w-[260px] h-[110px]'
                />
            </div>

            {/* routes  */}
            <div className="flex items-center gap-6 xxl:gap-[50px] text-lg justify-center">

                <p className="flex items-center gap-[10px] cursor-pointer">
                    Home
                    <span className="w-1 h-1 rounded-full bg-[var(--red)]"></span>
                </p>
                <p className="flex items-center gap-[10px] cursor-pointer">
                    About us
                    <span className="w-1 h-1 rounded-full bg-[var(--red)]"></span>
                </p>
                <p className="flex items-center gap-[10px] cursor-pointer">
                    Products
                    <span className="w-1 h-1 rounded-full bg-[var(--red)]"></span>
                </p>
                <p className="flex items-center gap-1 cursor-pointer">
                    Custom
                    <p className="w-[40px] h-[18px] vistara-light rounded-lg bg-[var(--red)] text-[10px] text-[#FFFBFB] flex items-center justify-center">New</p>
                </p>
                <p className='cursor-pointer'>Contact us</p>
            </div>

            {/* icons  */}
            <div className="flex items-center gap-5 xxl:gap-[30px] cursor-pointer">
                <img src="/logo/heart.png" alt="heart" />
                <img src="/logo/user.png" alt="user" />
                <img src="/logo/g1265.png" alt="cart" />
            </div>
        </nav>
    );
};

export default Navbar;