import { progressCard, progressFeatures } from "../../data"
const ProgressFeature = () => {
    const AvardIcon = progressCard.icon;
    const LockIcon = progressCard.lockIcon;
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-300">{progressFeatures.mainTitle}</h2>
                <p className="text-gray-500 mb-10">{progressFeatures.mainDescription}</p>
                <div className="space-y-8">
                    {progressFeatures.features.map((item, index) => {
                        const Icon = item.icon;
                        return <div key={index} className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
                            <div className="bg-orange-100 p-4 rounded-lg transition-all duration-300 group-hover:bg-orange-500">
                                <Icon size={26}
                                    className="text-orange-500 group-hover:text-white transition-all duration-300" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{item.title}</h4>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-[340px] h-[420px] transition-all duration-500 hover:scale-105">
                    <div className="flex justify-between mb-8">
                        <h4 className="font-semibold text-lg">{progressCard.title}</h4>
                        <span className="text-orange-500 font-semibold">{progressCard.level}</span>
                    </div>
                    <div className="flex justify-center mb-10">
                        <div className="w-40 h-40 rounded-full border-[12px] border-orange-500 flex items-center justify-center transition-all duration-500 hover:rotate-6">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold">{progressCard.day}</h2>
                                <p className="text-xs text-gray-500">{progressCard.streak}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-16 rounded-lg bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-orange-100">
                            <AvardIcon className="text-orange-500"/>
                        </div>
                        <div className="h-16 rounded-lg bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-orange-100">
                            <LockIcon className="text-orange-500"/>
                        </div>
                        <div className="h-16 rounded-lg bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-orange-100">
                            <LockIcon className="text-orange-500"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressFeature