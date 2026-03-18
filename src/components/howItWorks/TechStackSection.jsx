import { techStackSection } from "../../data/data";
const TechStackSection = () => {
    return <div className="w-full bg-[#0b1b36] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-orange-500 text-2xl md:text-3xl font-bold tracking-widest mb-14">{techStackSection.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {techStackSection.icons.map((icon, index) => {
                    const Icon = icon.icon;
                    return <div key={index} className="flex flex-col items-center gap-4 text-gray-300 uppercase transition-all duration-300  hover:text-white hover:-translate-y-2">
                        <Icon className="transition-all duration-300 hover:scale-110" size={42} />
                        <h2 className="text-sm md:text-base font-semibold tracking-wide">{icon.title}</h2>
                    </div>
                })}
            </div>
        </div>
    </div>;
};

export default TechStackSection;
