import { voiceExpenseSection } from "../../data/data";

const VoiceExpenseSection = () => {
    const Icon = voiceExpenseSection.micIcon;
    return <div className="w-full bg-[#f8f6f6] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center gap-3 bg-orange-100 p-3 rounded-lg mb-4">
                    <Icon className="text-orange-500" size={20} />
                    <p className="text-gray-600 italic">Listening...</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-700 font-semibold">{voiceExpenseSection.mainDescription}</p>
                </div>
                <div className="flex gap-2 mt-6">
                    <div className="h-1 bg-orange-500 w-1/3 rounded"></div>
                    <div className="h-1 bg-orange-200 w-1/3 rounded"></div>
                    <div className="h-1 bg-orange-200 w-1/3 rounded"></div>
                </div>
            </div>
            <div>
                {voiceExpenseSection.features.map((item, index) => {
                    const Icon = item.icon;
                    return <div key={index} className="mb-8">
                        <h1 className="text-[#e6b8a2] text-5xl font-bold">{item.count}</h1>
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">{item.title}</h2>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <Icon className="text-orange-500" size={18} />
                                <p className="text-gray-500 font-semibold">{item.subDescription1}</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Icon className="text-orange-500" size={18} />
                                <p className="text-gray-500 font-semibold">{item.subDescription2}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

    </div>
};

export default VoiceExpenseSection;
