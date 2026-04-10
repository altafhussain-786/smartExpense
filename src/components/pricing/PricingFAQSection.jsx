import { pricingFAQSection } from "../../data";

const PricingFAQSection = () => {
    return <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-4xl mx-auto px-4 text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      {pricingFAQSection.mainTitle}
    </h2>
    <p className="text-gray-500 mt-3">
      Everything you need to know about our pricing and features
    </p>
  </div>
  <div className="max-w-4xl mx-auto px-4">
    <div className="space-y-6">
      {pricingFAQSection.features.map((item, index) => {
        return (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-100
            shadow-sm transition-all duration-300 ease-in-out
            hover:shadow-xl hover:-translate-y-1"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3
              transition-colors duration-300 group-hover:text-black">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base
              transition-all duration-300">
              {item.description}
            </p>
          </div>
        );
      })}

    </div>
  </div>
</div>
};

export default PricingFAQSection;
