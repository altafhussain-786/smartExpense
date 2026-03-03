import { plans } from "../data/data"

const PricingPlan = () => {
  return (
   <section className="py-24 bg-[#f5efe9] mb-10">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-gray-800 mb-4">
      Simple, Transparent Pricing
    </h2>
    <p className="text-gray-500 mb-16">
      Choose the plan that fits your financial journey.
    </p>

    <div className="grid md:grid-cols-2 gap-10">

      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative rounded-3xl p-10 text-left transition-all duration-300
            ${plan.popular
              ? "bg-orange-600 text-white shadow-2xl"
              : "bg-white text-gray-800 shadow-md"
            }`}
        >
          {plan.popular && (
            <span className="absolute top-6 right-6 bg-white text-orange-600 text-xs px-3 py-1 rounded-full font-semibold">
              MOST POPULAR
            </span>
          )}

          <h3 className="text-xl font-semibold mb-2">
            {plan.name}
          </h3>

          <p className="text-4xl font-bold mb-6">
            ${plan.price}
            <span className={`text-base font-medium ${
              plan.popular ? "text-orange-100" : "text-gray-500"
            }`}>
              {" "} /months
            </span>
          </p>

          <ul className="space-y-4 mb-10">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className={`${
                  feature.included
                    ? ""
                    : plan.popular
                    ? "text-orange-200"
                    : "text-gray-400"
                }`}
              >
                {feature.included ? "✔" : "✖"} {feature.text}
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3 rounded-xl font-medium transition
              ${plan.popular
                ? "bg-white text-orange-600 hover:bg-gray-100"
                : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              }`}
          >
            {plan.buttonText}
          </button>

        </div>
      ))}

    </div>
  </div>
</section>
  )
}

export default PricingPlan