import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signupUser } from "../redux/features/auth/authSlice"
import { signupData } from "../data"
import { Eye, EyeOff, TrendingUp } from "lucide-react"

const SignupPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading, error } = useSelector((state) => state.auth)

  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await dispatch(signupUser(form))
    if (signupUser.fulfilled.match(result)) {
      navigate("/dashboard")
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-[45%] bg-gradient-to-br from-orange-500 to-orange-600
                      text-white p-8 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm font-bold">
              F
            </div>
            <span className="font-bold text-lg">The Fluid Architect</span>
          </div>
        </div>
        <div className="relative z-10 my-12">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
            {signupData.leftPanel.badge}
          </span>
          <h1 className="text-4xl font-bold leading-tight mt-4">
            {signupData.leftPanel.heading.normal}{" "}
            <span className="text-[#FFD166]">{signupData.leftPanel.heading.highlight}</span>
          </h1>
          <p className="text-sm text-white/80 max-w-xs mt-3 leading-relaxed">
            {signupData.leftPanel.description}
          </p>
        </div>
        <div className="relative z-10 bg-white/15 backdrop-blur-md rounded-2xl p-5
                        hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-400/30 rounded-full flex items-center justify-center">
                <TrendingUp size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium">
                {signupData.leftPanel.statsCard.title}
              </span>
            </div>
            <span className="text-xs text-white/60">Oct 2023</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {signupData.leftPanel.statsCard.amount.currency}
            {signupData.leftPanel.statsCard.amount.value.toLocaleString()}.00
          </p>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-[#FFD166] rounded-full transition-all duration-700"
              style={{
                width: `${(signupData.leftPanel.statsCard.progress.current /
                  signupData.leftPanel.statsCard.progress.total) * 100}%`
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-white/70 mt-2">
            <span>
              {signupData.leftPanel.statsCard.progress.current}% of target reached
            </span>
            <span>{signupData.leftPanel.statsCard.progress.labelRight}</span>
          </div>
        </div>
        <p className="text-xs text-white/50 mt-6 relative z-10">
          © 2026 The Fluid Architect. All rights reserved.
        </p>
      </div>
      <div className="w-full lg:w-[55%] bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">

          <div className="text-right mb-8 text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 font-semibold hover:underline">
              Log In
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-1">
            {signupData.rightPanel.form.title}
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            {signupData.rightPanel.form.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {signupData.rightPanel.form.fields.map((field, index) => {
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
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      onChange={handleChange}
                      className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl
                                 bg-gray-50 text-sm focus:outline-none focus:ring-2
                                 focus:ring-orange-400 transition-all duration-200"
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
            <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                required
                className="accent-orange-500 w-4 h-4 mt-0.5 shrink-0"
              />
              <span>
                I agree to the{" "}
                <span className="text-orange-500 hover:underline cursor-pointer">Terms of Service</span>
                {" "}and{" "}
                <span className="text-orange-500 hover:underline cursor-pointer">Privacy Policy</span>
                .
              </span>
            </label>
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
                  Creating Account...
                </span>
              ) : signupData.rightPanel.form.submitButton.text}
            </button>
          </form>
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-sm">Or register with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex gap-4">
            {signupData.rightPanel.form.socialButtons.map((btn, index) => {
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
          <p className="text-center text-xs text-gray-400 mt-6">
            Secure 256-bit SSL encrypted connection. Your data is always protected.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage