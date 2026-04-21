import onboardingImage from "../assets/images/onboarding.png"
import { onboardingStep1 } from "../data";
const GetStartedPage = () => {
    const RocketIcon = onboardingStep1.icon;
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
                <div>
                    <p className="text-xs tracking-widest text-orange-500 font-semibold uppercase">
                        Onboarding
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                        {onboardingStep1.step}
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">
                        Let's personalize your SmartExpense experience in just a few clicks.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-orange-500 rounded-full"></div>
                    <div className="h-1 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-1 w-6 bg-gray-300 rounded-full"></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden group w-full max-w-sm">
                    <img
                        src={onboardingImage}
                        alt="finance"
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-4">
                        {onboardingStep1.image.quote}
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6 transition-all duration-500">
                <div className="space-y-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-xl">
                        <RocketIcon />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                        {onboardingStep1.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {onboardingStep1.subtitle}
                    </p>
                </div>
                <div className="space-y-4">
                    {onboardingStep1.features.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="bg-orange-100 text-orange-500 p-2 rounded-lg">
                                    <Icon className="w-5 h-5" />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center justify-between pt-4">
                    <button className="text-sm text-gray-500 hover:text-orange-500 transition">
                        {onboardingStep1.actions.secondary}
                    </button>
                    <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-xl shadow-md hover:bg-orange-600 hover:scale-105 transition-all duration-300">
                        {onboardingStep1.actions.primary}
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
};

export default GetStartedPage;
