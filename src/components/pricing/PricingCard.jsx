import { pricingCard } from "../../data/data";
import { Check } from "lucide-react";

const PricingCard = () => {
    return <div className="py-16 bg-[#f1f3f4">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {pricingCard.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 flex flex-col justify-between
            shadow-md transition-all duration-300 ease-in-out
            hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2 transition-colors duration-300 group-hover:text-black">
                                    {item.title}
                                </h3>
                                <h2 className="text-4xl font-bold text-gray-900 mb-2 transition-all duration-300">
                                    ${item.price}
                                    <span className="text-sm text-gray-500">/mo</span>
                                </h2>
                                <p className="text-gray-500 mb-6">
                                    {item.description}
                                </p>
                                <button className="w-full border border-gray-300 rounded-lg py-2 font-medium
                transition-all duration-300
                hover:bg-black hover:text-white hover:border-black">
                                    {item.buttonText}
                                </button>
                                <div className="mt-6 space-y-3">
                                    {item.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 text-gray-600
                    transition-all duration-300 hover:translate-x-1"
                                        >
                                            <Check size={18} className="text-black transition-transform duration-300 group-hover:scale-110" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    </div>
};

export default PricingCard;
