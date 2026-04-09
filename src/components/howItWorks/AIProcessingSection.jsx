import { aiProcessingSection } from "../../data/data";

const AIProcessingSection = () => {
    return <div className="w-full bg-[#f7eeea] py-20">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#e6b8a2] mb-4">{aiProcessingSection.count}</h1>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">{aiProcessingSection.mainDescription}</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                aiProcessingSection.features.map((item, index) => {
                    const Icon = item.icon;
                    return <div key={index} className="group bg-white rounded-xl shadow-sm p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex justify-center mb-5">
                            <div className="bg-orange-100 p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-200">
                                <Icon size={26} className="text-orange-500"/>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                })
            }
        </div>
    </div>
};

export default AIProcessingSection;
