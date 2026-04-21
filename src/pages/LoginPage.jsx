import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../redux/features/auth/authSlice"
import { logInData } from "../data"
import { Eye, EyeOff, TrendingUp } from "lucide-react"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading, error } = useSelector((state) => state.auth)
    const [form, setForm] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await dispatch(loginUser(form))
        if (loginUser.fulfilled.match(result)) {
            navigate("/dashboard")
        }
    }
    const LockIcon = logInData.leftPanel.testimonial.icon
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#F9FAFB]">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-orange-500">SmartExpense</h1>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">Welcome back</h2>
                    <p className="text-gray-500 mb-8">Log in to your account to manage your finances.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {logInData.rightPanel.form.fields.map((field, index) => {
                            const Icon = field.icon
                            const isPassword = field.type === "password"
                            return (
                                <div key={index}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {field.label}
                                    </label>
                                    <div className="relative">
                                        {Icon && (
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                <Icon size={16} />
                                            </span>
                                        )}
                                        <input
                                            type={isPassword && showPassword ? "text" : field.type}
                                            name={field.name || field.label.toLowerCase()}
                                            placeholder={field.placeholder}
                                            required={field.required}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl
                                                       focus:outline-none focus:ring-2 focus:ring-orange-400
                                                       transition-all duration-200 bg-gray-50 text-sm"
                                        />
                                        {isPassword && (
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400
                                                           hover:text-gray-600 transition"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        )}
                                    </div>
                                    {field.hint && (
                                        <p className="text-xs text-gray-400 mt-1">{field.hint}</p>
                                    )}
                                </div>
                            )
                        })}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                Keep me logged in
                            </label>
                            <button type="button" className="text-orange-500 hover:underline">
                                Forgot password?
                            </button>
                        </div>
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                                {error}
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold
                                       hover:bg-orange-600 active:scale-[0.98] transition-all duration-200
                                       disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Logging in...
                                </span>
                            ) : "Sign In"}
                        </button>
                    </form>
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-gray-400 text-sm">OR CONTINUE WITH</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>
                    <div className="flex gap-4">
                        {logInData.rightPanel.form.socialButtons.map((btn, index) => {
                            const Icon = btn.icon
                            return (
                                <button
                                    key={index}
                                    className="flex-1 flex items-center justify-center gap-2 border
                                               border-gray-200 rounded-xl py-2.5 text-sm font-medium
                                               hover:bg-gray-50 active:scale-[0.98] transition-all duration-200"
                                >
                                    {Icon && <Icon size={16} />}
                                    {btn.name}
                                </button>
                            )
                        })}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-orange-500 font-semibold hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#FFF7F5] to-[#FFE8D6]
                            items-center justify-center p-12 relative overflow-hidden">
                <div className="w-full max-w-sm space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                                    hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <TrendingUp size={20} className="text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Monthly Inflow</p>
                                <p className="text-2xl font-bold text-gray-900">$12,450.00</p>
                            </div>
                            <span className="ml-auto bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                                +12.5%
                            </span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-400 rounded-full w-[78%] transition-all duration-500" />
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                            <span>78% OF TARGET</span>
                            <span>$15,000.00</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                                    hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-orange-500 text-lg"><LockIcon /></span>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Bank-Grade Security
                            </span>
                        </div>
                        <p className="text-gray-700 text-sm italic leading-relaxed mb-4">
                            "The precision in tracking my digital assets has changed how I view my financial future."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center
                                            text-orange-600 font-semibold text-sm">
                                AR
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">Alex Rivera</p>
                                <p className="text-xs text-gray-400">Chief Investment Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage