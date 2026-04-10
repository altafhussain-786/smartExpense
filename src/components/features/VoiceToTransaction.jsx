
import voiceTransaction from "../../assets/images/voice-to-transaction.png"
import { voiceToTransaction } from '../../data'

const VoiceToTransaction = () => {
  const MainIcon = voiceToTransaction.mainIcon
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex justify-center lg:justify-start relative">
          <div className="bg-orange-200 rounded-2xl p-12 relative transition-all duration-500 hover:scale-105">
            <img
              src={voiceTransaction}
              alt="voice to transaction"
              className="w-[360px] md:w-[440px] lg:w-[520px] transition-all duration-500"
            />

            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-orange-500 rounded-lg -z-10 transition-all duration-500"></div>
          </div>
        </div>
        <div className="max-w-xl">

          <div className="flex items-center gap-4 mb-5">
            <MainIcon
              size={36}
              className="text-orange-500 transition-transform duration-300 hover:rotate-12"
            />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {voiceToTransaction.mainTitle}
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {voiceToTransaction.mainDescription}
          </p>

          <div className="space-y-6">
            {voiceToTransaction.feature.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:translate-x-2"
                >
                  <div className="bg-orange-100 p-3 rounded-md transition-all duration-300 hover:bg-orange-200">
                    <Icon size={20} className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default VoiceToTransaction