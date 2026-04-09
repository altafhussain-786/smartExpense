import { SquarePlay } from "lucide-react"
import expensivTracker from '../../assets/images/expense-tracker.png'
const Home = () => {
    return (
        <div className="min-h-screen flex items-center bg-gray-100 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-10 xl:px-20 py-10 gap-8">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                        Track Smarter.
                        <span className="block text-orange-600">
                            Save Better.
                        </span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg xl:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
                        Experience the future of personal finance. Log expenses with your voice and let AI optimize your spending habits in real-time with high-precision insights.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4 justify-center md:justify-start">
                        <button className="w-full sm:w-auto bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition font-medium">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto flex items-center justify-center bg-orange-100 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-200 transition font-medium">
                            <SquarePlay className="inline mr-2" size={20} />
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img
                        src={expensivTracker}
                        alt="Expense Tracker"
                        className="w-64 sm:w-80 md:w-96 xl:w-[480px] h-auto object-contain rounded-2xl shadow-lg w-full max-w-md md:max-w-lg
                                 transition-all duration-500 hover:scale-105 hover:shadow-2xl"/>
                </div>
            </div>
        </div>
    )
}

export default Home