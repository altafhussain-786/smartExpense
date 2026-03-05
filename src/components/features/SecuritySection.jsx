import { securityCard, securitySection } from "../../data/data"

const SecuritySection = () => {
    return (
        <div className="w-full bg-gray-100 py-16 px-4">

            <div className="w-full mx-auto bg-[#e7ded8] rounded-3xl py-14 px-10 md:px-16">
                {securitySection.map((content, index) => {
                    const MainIcon = content.icon;

                    return (
                        <div key={index} className="text-center flex flex-col items-center mb-14">

                            <div className="bg-orange-500 text-white p-3 rounded-full mb-6 shadow-md">
                                <MainIcon size={28} />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                {content.title}
                            </h2>

                            <p className="text-gray-500 max-w-xl text-sm md:text-base">
                                {content.description}
                            </p>

                        </div>
                    );
                })}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                    {securityCard.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                            >

                                <div className="bg-white p-4 rounded-full shadow-md mb-4
                                        transition duration-300 hover:bg-orange-500 group">

                                    <Icon
                                        size={22}
                                        className="text-orange-500 transition duration-300 group-hover:text-white"
                                    />

                                </div>

                                <h3 className="font-semibold text-gray-800 mb-1">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-500 max-w-[220px]">
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

export default SecuritySection