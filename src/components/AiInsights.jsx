import { aiAinsights } from '../data/data'
const AiInsights = () => {
    return (
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="text-center max-w-4xl mx-auto px-4 mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      Powerful AI at Your Fingertips
    </h2>
    <p className="text-gray-600 text-lg">
      Designed for precision and ease, our suite of tools helps you master your money effortlessly.
    </p>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {aiAinsights.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group relative p-8 rounded-2xl bg-white border border-gray-100 
                       hover:border-orange-400 hover:-translate-y-2 
                       transition-all duration-300 shadow-sm hover:shadow-2xl"
          >
            <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition"></div>
            <div className="relative w-16 h-16 flex items-center justify-center 
                            rounded-2xl bg-orange-100 text-orange-600 mb-6 
                            group-hover:bg-orange-500 group-hover:text-white 
                            transition-all duration-300">
              <Icon size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>

</div>
    )
}

export default AiInsights