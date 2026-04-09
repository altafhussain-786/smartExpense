import { poweredByAiInsights } from "../../data/data"

const PoweredByAIInsights = () => {
    return (
        <div className='bg-[#f8f6f6]'>
            <div className='max-w-7xl mx-auto px-6 py-20'>
                <div className='text-center max-w-2xl mx-auto mb-16'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>Powered by AI Insights</h2>
                    <p className='text-gray-600 text-lg leading-relaxed'>Our machine learning core works in the background to analyze your habits
                        and secure your future.
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {poweredByAiInsights.map((item, index) => {
                        const Icon = item.icon
                        return <div key={index} className="bg-white p-8         rounded-2xl shadow-sm border border-gray-100
                             transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-14 h-14 flex items-center     justify-center 
                                 bg-orange-100 rounded-xl mb-6
                                 transition-all duration-300 group-hover:bg-orange-200">
                                <Icon size={28} className="text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default PoweredByAIInsights