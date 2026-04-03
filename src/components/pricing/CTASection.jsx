import { ctaSction } from "../../data/data";

const CTASection = () => {
    return <div className="px-4 py-12 bg-gray-200">
        {ctaSction.map((item, index) => (
            <div
                key={index}
                className="max-w-5xl mx-auto rounded-[30px] bg-gradient-to-r from-[#06122f] via-[#10142d] to-[#06122f] px-6 md:px-16 py-12 text-center shadow-lg transition-all duration-500 hover:scale-[1.01]"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {item.title}
                </h2>
                <p className="text-gray-300 mt-4 text-sm md:text-lg">
                    {item.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    {item.buttons.map((btn, indx) => (
                        <button
                            key={indx}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${btn.primary
                                    ? "bg-[#111827] text-white shadow-md hover:bg-[#1f2937]"
                                    : "border border-[#334155] bg-[#162338] text-white hover:bg-[#1e293b]"
                                }`}
                        >
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>
        ))}
    </div>
};

export default CTASection;
