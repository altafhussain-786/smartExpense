import { pricingHero } from "../../data";

const PricingHero = () => {
    return <div className="py-16 px-4 bg-gray-50">
        {pricingHero.map((item, index) => {
            return <div key={index} className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{item.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{item.description}</p>
                <div className="flex items-center justify-center mt-6">
                    <div className="flex bg-gray-200 p-1 rounded-full">
                        <button className="px-5 py-2 text-sm sm:text-base rounded-full bg-white shadow font-medium transition-all duration-300 hover:bg-gray-100">Monthly</button>
                        <button className="px-5 py-2 text-sm sm:text-base rounded-full text-gray-600 font-medium transition-all duration-300 hover:bg-gray-100">Annual</button>
                    </div>
                </div>
            </div>
        })}
    </div>;
};

export default PricingHero;
