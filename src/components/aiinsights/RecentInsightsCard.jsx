import { recentInsightsCardData } from "../../data/data";

const RecentInsightsCard = () => {
  return <div className="w-full rounded-2xl bg-[#f8f6f6] p-4 md:p-6">
  <h2 className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">
    {recentInsightsCardData.mainTitle}
  </h2>

  <div className="space-y-4">
    {recentInsightsCardData.features.map((item, indx) => {
      const Icon = item.icon;

      return (
        <div
          key={indx}
          className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          {/* Icon Box */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
            <Icon size={22} className="text-orange-500" />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 md:text-base">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 md:text-sm">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>
};

export default RecentInsightsCard;
