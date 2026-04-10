import { financialCards, financialContent} from '../../data'

const FinancialHero = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-16 py-16 bg-[#0b1324] text-white'>
            <div className='max-w-xl'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'>One Dashboard for Your Entire Financial Life.
                </h2>
                <p className='text-gray-400 text-base md:text-lg mb-10'>Stop jumping between apps. Sync your bank accounts, credit cards, and digital wallets like JazzCash and Easypaisa into one unified view.</p>
                <div className='space-y-6'>
                    {financialContent.map((content, index) => {
                        const Icon = content.icon
                        return <div key={index} className='flex items-start gap-4 bg-[#162036] p-5 rounded-xl transition-all duration-300 hover:bg-[#1c2845] hover:scale-[1.03]'>
                            <div className='p-3 rounded-lg bg-orange-500/20 text-orange-400'>{<Icon size={28} />}</div>
                            <div>
                                <h4 className='font-semibold text-lg'>{content.title}</h4>
                                <p className='text-gray-400 text-sm'>{content.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto'>
                {financialCards.map((item, index) => {
                    return <div key={index} className='bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-white/20'>
                        <p className='text-gray-400 text-sm uppercase tracking-wider'>{item.title}</p>
                        <h3 className={`text-2xl md:text-3xl font-bold mt-2
                                     ${item.title === "SAVINGS" ? "text-green-400" : ""}
                                 ${item.title === "CREDIT USED" ? "text-orange-700" : ""}
                       `}>{item.amount}</h3>

                    </div>
                })}
            </div>
        </div>
    )
}

export default FinancialHero;