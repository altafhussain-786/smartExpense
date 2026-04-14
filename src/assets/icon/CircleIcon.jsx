const CircleIcon = () => {
    return <div>
        <svg viewBox="0 0 120 120" className="w-full h-full rotate-[-90deg]">
            <circle
                cx="60"
                cy="60"
                r="45"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
            />
            <circle
                cx="60"
                cy="60"
                r="45"
                stroke="#f97316"
                strokeWidth="12"
                fill="none"
                strokeDasharray="127 283"
                strokeLinecap="round"
            />
            <circle
                cx="60"
                cy="60"
                r="45"
                stroke="#10b981"
                strokeWidth="12"
                fill="none"
                strokeDasharray="70 283"
                strokeDashoffset="-135"
                strokeLinecap="round"
            />
        </svg>
    </div>;
};

export default CircleIcon;
