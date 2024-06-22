

const ProductCard = ({data}) => {
    return (
        <div className="w-[280px] mx-auto vistara-light">
        
            <img src={data.image} alt={data.name} loading="lazy" />
            <p className="mt-5 text-[#1E1E1EB2] text-lg leading-6">{data.name}</p>

            <div className="mt-3 flex justify-between items-center">
                <p className="text-xl">₹{data.price}</p>
                <button className="border border-[var(--primary)] px-[10px] py-[5px] rounded-[40px] text-sm">Add to Cart</button>
            </div>

        </div>
    );
};

export default ProductCard;