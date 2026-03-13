import { heroSection } from "../../data/data";
import smartMoneyInsights from "../../assets/images/smart-money-insights.png"
const HeroSection = () => {
    const Icon = heroSection.icon;
    return <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <div className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full w-fit text-sm font-medium transition-all duration-300 hover:scale-105">
                <Icon />
                <p>{heroSection.description}</p>
            </div>
            {heroSection.features.map((item, index) => {
                return <div key={index} className="transition-all duration-300 hover:translate-x-2">
                    <h2 className="text-5xl font-bold leading-tight">{item.title} <span className="block text-orange-600">{item.span}</span></h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-lg">{item.description}</p>
                </div>
            })}
            <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-xl
    transition-all duration-300 ease-in-out
    hover:bg-gray-700 hover:scale-105">Watch the Vedio</button>
        </div>
        <div className="flex justify-center md:justify-end">
            <img src={smartMoneyInsights} alt="finance insights" 
            className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg
      transition-all duration-500 hover:scale-105 hover:shadow-2xl"/>
        </div>
    </div>
};

export default HeroSection;
