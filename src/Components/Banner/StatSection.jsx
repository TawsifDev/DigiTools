
export const StatSection = () => {
    const stats = [
        {
            value: "50K+",
            label: "Active Users",
        },
        {
            value: "200+",
            label: "Premium Tools",
        },
        {
            value: "4.9",
            label: "Rating",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-5 py-10 sm:grid-cols-3 sm:px-8 sm:py-11 lg:px-12">
                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        className={`flex flex-col items-center justify-center py-5 text-center sm:py-0 ${index !== 0
                                ? "border-t border-white/30 sm:border-l sm:border-t-0"
                                : ""
                            }`}
                    >
                        <h2 className="text-[38px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[42px]">
                            {stat.value}
                        </h2>

                        <p className="mt-2 text-sm font-normal text-white/90 sm:text-base">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
