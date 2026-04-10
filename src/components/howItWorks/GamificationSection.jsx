import gamification from "../../assets/images/insights-gamification.png"
import { gamificationSection } from "../../data";
const GamificationSection = () => {
    return <div className="w-full bg-[#f8f6f6] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
                <img src={gamification}
                    className="w-[280px] md:w-[340px] lg:w-[380px] drop-shadow-2xl rounded-xl transition-transform duration-500 hover:scale-105"
                    alt="insights-gamification image loaded" />
            </div>
            <div>
                <h1 className="text-[#e6b8a2] text-5xl font-bold mb-2">{gamificationSection.count}</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{gamificationSection.title}</h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">{gamificationSection.description}</p>
                <div className="grid sm:grid-cols-2 gap-6">
                    {gamificationSection.features.map((item, index) => {
                        const Icon = item.icon;
                        return <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <Icon className="text-orange-500 mb-3" size={26} />
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h2>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>;
};

export default GamificationSection;
