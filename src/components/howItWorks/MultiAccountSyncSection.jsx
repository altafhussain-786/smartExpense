import { multiAccountSyncSection, multiAccountSyncSectionCard } from "../../data/data";

const MultiAccountSyncSection = () => {
    return <div className="w-full bg-[#f8f6f6] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl font-bold text-[#e6b8a2] mb-3">
                    {multiAccountSyncSection.count}
                </h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {multiAccountSyncSection.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                    {multiAccountSyncSection.description}
                </p>
                <div className="flex gap-5">
                    {multiAccountSyncSection.icons.map((Icon, index) => {
                        return (
                            <div
                                key={index}
                                className="p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <Icon size={22} className="text-gray-600" />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-gradient-to-br from-[#2c1c1c] via-[#1d2235] to-[#0c1a2e] rounded-2xl p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
                {multiAccountSyncSectionCard.map((crt, indx) => {
                    const LockIcon = crt.lockIcon;
                    const ShieldIcon = crt.shiledIcon;
                    return (
                        <div key={indx}>
                            <h2 className="text-sm tracking-widest text-orange-400 mb-6">
                                {crt.title}
                            </h2>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 mb-4 transition-all duration-300 hover:bg-white/20">
                                <LockIcon size={18} className="text-orange-400" />
                                <p className="text-sm">{crt.description1}</p>
                            </div>
                            <div className="flex items-center gap-3  bg-white/10 backdrop-blur-md rounded-lg px-4 py-z transition-all duration-300 hover:bg-white/20">
                                <ShieldIcon size={18} className="text-orange-400" />
                                <p className="text-sm">{crt.description2}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
};

export default MultiAccountSyncSection;
