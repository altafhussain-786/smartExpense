const Hero = () => {
  return (
     <div className='min-h-screen bg-[#f5efe9] flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto text-center py-16 sm:py-20 lg:py-28 flex flex-col items-center gap-6'>
        <span className='inline-block text-xs sm:text-sm bg-orange-100 px-4 py-1 font-semibold text-orange-500 rounded-xl tracking-wide uppercase'>Next-Gen Finace</span>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight '>The Most Advanced Way to {" "} <span className='text-orange-500 block mt-1'>Manage Money.</span></h2>
        <p className='text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed'>Experience the future of personal finance with AI-driven insights, voice-activated tracking, and seamless bank integrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-2">
          <button className="w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 text-sm sm:text-base">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 text-sm sm:text-base">
            Watch Demo
          </button>
        </div>

      </div>
    </div>
  )
}

export default Hero