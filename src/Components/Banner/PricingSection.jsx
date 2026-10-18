
const plans = [
    {
        name: "Starter",
        description: "Perfect for getting started",
        price: "$0",
        period: "/Month",
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
        button: "Get Started Free",
        featured: false,
    },
    {
        name: "Pro",
        description: "Best for professionals",
        price: "$29",
        period: "/Month",
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics",
        ],
        button: "Start Pro Trial",
        featured: true,
    },
    {
        name: "Enterprise",
        description: "For teams and businesses",
        price: "$99",
        period: "/Month",
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
        ],
        button: "Contact Sales",
        featured: false,
    },
];

export const PricingSection = () => {
    return (
        <section id="pricing" className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:py-[68px]">
            <div className="mx-auto max-w-[665px]">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-[#171d2c] sm:text-[27px]">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-2 text-[10px] text-slate-500">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col rounded-[10px] border p-3 ${plan.featured
                                    ? "border-transparent bg-gradient-to-br from-violet-600 to-purple-600 text-white"
                                    : "border-[#ededf0] bg-[#f8f9fc] text-[#171d2c]"
                                }`}
                        >
                            {plan.featured && (
                                <span className="absolute -top-[10px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-400 px-2.5 py-1 text-[8px] font-medium text-amber-950">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-[13px] font-semibold">{plan.name}</h3>

                            <p
                                className={`mt-1 text-[9px] ${plan.featured ? "text-white/80" : "text-slate-500"
                                    }`}
                            >
                                {plan.description}
                            </p>

                            <div className="mt-4 flex items-baseline gap-0.5">
                                <span className="text-[24px] font-bold leading-none tracking-tight">
                                    {plan.price}
                                </span>
                                <span
                                    className={`text-[10px] ${plan.featured ? "text-white/80" : "text-slate-500"
                                        }`}
                                >
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="mt-4 flex-1 space-y-1.5 pb-5">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-1.5 text-[9px] leading-[1.4]"
                                    >
                                        <svg
                                            className={`mt-px h-3 w-3 shrink-0 ${plan.featured ? "text-white" : "text-emerald-500"
                                                }`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m5 12 4 4L19 6" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={
                                    plan.name === "Enterprise"
                                        ? "#contact"
                                        : plan.name === "Pro"
                                            ? "#pro-trial"
                                            : "#get-started"
                                }
                                className={`mt-auto flex min-h-[30px] items-center justify-center rounded-full px-2 py-2 text-center text-[9px] font-medium transition hover:opacity-90 ${plan.featured
                                        ? "bg-white text-violet-600 hover:bg-violet-50"
                                        : "bg-gradient-to-r from-violet-600 to-purple-600 text-white"
                                    }`}
                            >
                                {plan.button}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
