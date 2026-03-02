import { steps } from "../data/data"
const FinancialFreedomSteps = () => {
  return (
    <section className="py-24 bg-gray-100 mb-10">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-20">
      Three Steps to Financial Freedom
    </h2>
    <div className="relative">
      <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-orange-200"></div>
      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-orange-500 bg-white flex items-center justify-center mb-6">
                <Icon size={24} className="text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
  )
}

export default FinancialFreedomSteps