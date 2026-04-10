import { callToAction } from "../../data";

const CallToAction = () => {
    return <section className="flex justify-center px-6 py-12">
        <div className="bg-orange-600 text-white rounded-3xl 
      max-w-7xl w-full min-h-[380px] 
      flex flex-col justify-center items-center 
      text-center px-10 py-16">

            {callToAction.map((item, index) => {
                return <div key={index}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h2>
                    <p className="text-lg md:text-xl text-orange-100 mb-10">{item.description}</p>
                </div>
            })}
            <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-xl
          transition-all duration-300 ease-in-out
          hover:bg-gray-100 hover:scale-105">Get Started Today</button>
                <button className="border-2 border-white px-8 py-3 rounded-xl font-semibold
          transition-all duration-300 ease-in-out
          hover:bg-white hover:text-orange-600 hover:scale-105">Contact Sales</button>
            </div>
        </div>
    </section>
};

export default CallToAction;
