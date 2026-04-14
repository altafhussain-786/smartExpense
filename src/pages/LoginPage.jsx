
import { Link } from "react-router-dom";
import { logInData } from "../data";

const LoginPage = () => {
    return <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
        <div className="relative w-full lg:w-1/2 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{logInData.header.logo}</h2>
                <div className="text-sm">
                    <span className="mr-2">{logInData.header.rightText}</span>
                    <Link
                        to={logInData.header.actionLink}
                        className="font-semibold hover:underline transition"
                    >
                        {logInData.header.actionText}
                    </Link>
                </div>
            </div>
            <div className="mt-10 space-y-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs inline-block">
                    {logInData.leftPanel.badge}
                </span>
                <h1 className="text-4xl font-bold leading-tight">
                    {logInData.leftPanel.heading.normal}{" "}
                    <span className="text-green-300">
                        {logInData.leftPanel.heading.highlight}
                    </span>
                </h1>
                <p className="text-sm opacity-90 max-w-md">
                    {logInData.leftPanel.description}
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl mt-10 shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-sm">
                            {logInData.leftPanel.statsCard.title}
                        </h4>
                        <p className="text-xs opacity-80">
                            {logInData.leftPanel.statsCard.updated}
                        </p>
                    </div>
                    <div className="text-right">
                        <h3 className="text-lg font-bold">
                            {logInData.leftPanel.statsCard.amount.currency}
                            {logInData.leftPanel.statsCard.amount.value}
                        </h3>
                        <p className="text-xs text-green-300">
                            {logInData.leftPanel.statsCard.growth.value}{" "}
                            {logInData.leftPanel.statsCard.growth.label}
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-green-300 transition-all duration-500"
                            style={{
                                width: `${(logInData.leftPanel.statsCard.progress.current /
                                    logInData.leftPanel.statsCard.progress.total) *
                                    100}%`,
                            }}
                        />
                    </div>
                    <div className="flex justify-between text-xs mt-2 opacity-80">
                        <span>
                            {logInData.leftPanel.statsCard.progress.labelLeft}
                        </span>
                        <span>
                            {logInData.leftPanel.statsCard.progress.labelRight}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white p-8 flex items-center justify-center">
            <div className="w-full max-w-md">

                <h2 className="text-2xl font-bold mb-2">
                    {logInData.rightPanel.form.title}
                </h2>
                <p className="text-gray-500 mb-6">
                    {logInData.rightPanel.form.subtitle}
                </p>
                <form className="space-y-4">

                    {logInData.rightPanel.form.fields.map((field, index) => {
                        const Icon = field.icon;
                        return (
                            <div key={index} className="relative">
                                <label className="text-sm text-gray-600">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    className="w-full mt-1 p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
                                />
                                <span className="absolute left-3 top-9 text-gray-400">
                                    {Icon && <Icon size={16} />}
                                </span>
                                {field.hint && (
                                    <p className="text-xs text-gray-400 mt-1">
                                        {field.hint}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                    <div className="flex items-center gap-2 text-sm">
                        <input type="checkbox" required />
                        <span>
                            {logInData.rightPanel.form.checkbox.text}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-[1.02]"
                    >
                        {logInData.rightPanel.form.submitButton.text}
                    </button>
                </form>
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-gray-400 text-sm">
                        {logInData.rightPanel.form.divider}
                    </span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className="flex gap-4">
                    {logInData.rightPanel.form.socialButtons.map(
                        (socialBtn, index) => {
                            const SocialIcon = socialBtn.icon;
                            return (
                                <button
                                    key={index}
                                    className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 transition"
                                >
                                    {SocialIcon && <SocialIcon size={16} />}
                                    {socialBtn.name}
                                </button>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    </div>
};

export default LoginPage;
