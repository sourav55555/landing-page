import ProductCard from "../productCard/ProductCard";
import "./popular.css";

const popularProd = [
    {
        name: "Multi Color Net Embroidered doors Set",
        price: "7,500",
        image: "/public/popular/Embroidered.png"
    },
    {
        name: "Embellished Indian wooden Mirror bowls",
        price: "25,700",
        image: "/public/popular/Mirror bowls.png"
    },
    {
        name: "Green wooden Embroidered holes Set",
        price: "22,800",
        image: "/public/popular/holesset.png"
    },
    {
        name: "Pink Silk Floral Embroidered Table Set",
        price: "11,500",
        image: "/public/popular/tableset.png"
    },
]


const PopularProduct = () => {
    return (
        <div className="xl:px-[100px] px-12 pt-6 pb-[90px] relative">
        
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <p className="text-[48px] luxiachy">Popular Products</p>
                </div>
                <div className="flex items-center gap-3 vistara-light text-xl cursor-pointer">
                    <p>View All</p>
                    <img src="/public/rightarr.png" className="w-5" alt="" />
                </div>
            </div>

            {/* popular items cards  */}
            <div className="flex gap-5 xl:gap-10 mt-10 justify-center ">
                {
                    popularProd.map((data, index) => <ProductCard key={index} data={data} />)
                }
            </div>

            {/* ellipse  */}
            <div className="ellipse-13 w-[584px] h-[442px] absolute -top-6 -left-[350px]">
            </div>
        </div>
    );
};

export default PopularProduct;