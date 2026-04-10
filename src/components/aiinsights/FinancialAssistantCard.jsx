import { financialAssistantData } from "../../data";

const FinancialAssistantCard = () => {
    const Icon = financialAssistantData.mainIcon;
  return  <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-gradient-to-br from-[#0f172a] to-[#0b1a3a] rounded-2xl shadow-lg p-5 md:p-6 text-white transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-orange-500 p-3 rounded-xl text-xl transition-transform duration-300 hover:scale-110">
            <Icon />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              {financialAssistantData.title}
            </h2>
            <p className="text-sm text-gray-300">
              {financialAssistantData.subtitle}
            </p>
          </div>
        </div>
        <div className="space-y-4 mb-5">
          {financialAssistantData.messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-3 rounded-xl max-w-[80%] text-sm md:text-base shadow-md transition-all duration-300
                ${
                  msg.type === "user"
                    ? "bg-orange-500 text-white rounded-br-none"
                    : "bg-gray-700 text-gray-200 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center bg-gray-800 rounded-xl px-3 py-2 mb-4 opacity-80">
          <input
            type="text"
            placeholder="Ask AI Assistant..."
            className="flex-1 bg-transparent outline-none text-sm md:text-base text-gray-400 cursor-not-allowed"
            disabled
          />
          <button className="bg-orange-500 p-2 rounded-lg">
            ➤
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {financialAssistantData.suggestions.map((item, index) => (
            <span
              key={index}
              className="text-xs md:text-sm px-3 py-1.5 bg-gray-700 text-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
};

export default FinancialAssistantCard;
