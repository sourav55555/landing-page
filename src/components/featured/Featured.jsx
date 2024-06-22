import ProductCard from "../productCard/ProductCard";
import "./featured.css";

const featuredProd = [
    {
        name: "Multi Color Net Embroidered bowls Set",
        price: "27,200",
        image: "/featured/bowlset.png"
    },
    {
        name: "Green Quilted Wooden launch",
        price: "17,500",
        image: "/featured/woodenlaunch.png"
    },
    {
        name: "Yellow Silk Blend Floral Embroidered Products",
        price: "12,500",
        image: "/featured/blandFloral.png"
    },
    {
        name: "Wine Pure Banaras wooden phone case set",
        price: "10,500",
        image: "/featured/phonecase.png"
    },
]


const Featured = () => {
    return (
        <div className="xl:px-[100px] px-12 pt-6 pb-[90px] relative">

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <p className="text-[48px] luxiachy">Featured Products</p>
                    <div className="flex items-center">
                        <div className="w-[100px] h-[1px] bg-[var(--primary)]"></div>
                        <div className="h-1 w-1 bg-black rotate-45"></div>
                    </div>
                </div>
                <div className="flex items-center gap-3 vistara-light text-xl cursor-pointer">
                    <p>View All</p>
                    <img src="/rightarr.png" className="w-5" alt="" />
                </div>
            </div>

            {/* featured item cards  */}
            <div className="flex gap-5 xl:gap-10 mt-10 justify-center ">
                {
                    featuredProd.map((data, index) => <ProductCard key={index} data={data} />)
                }
            </div>

            {/* ellipse  */}
            <div className="w-[455px] h-[388px] ellipse-12 absolute -top-6 -left-[250px]"></div>
            <div className="w-[788px] h-[602px] ellipse-9 absolute top-28 -right-[394px]"></div>
            <div className="w-[450px] h-[440px] absolute -bottom-7 -right-[215px] z-30">
                <img src="/featured/featuredvector.png" alt="" />
            </div>
            
        </div>
    );
};

export default Featured;