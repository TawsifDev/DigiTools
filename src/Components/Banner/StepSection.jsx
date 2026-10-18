import Image1 from "../../assets/assets/user.png";
import Image2 from "../../assets/assets/package.png";
import Image3 from "../../assets/assets/rocket.png";

const steps = [
    {
        number: "01",
        title: "Create Account",
        description:
            "Sign up for free in seconds. No credit card required to get started.",
        icon: (
            <img
                src={Image1}
                alt="Rocket"
                className="h-8 w-8 object-contain"
            />
        ),
    },
    {
        number: "02",
        title: "Choose Products",
        description:
            "Browse our catalog and select the tools that fit your needs.",
        icon: (
            <img
                src={Image2}
                alt="Rocket"
                className="h-8 w-8 object-contain"
            />
        ),
    },
    {
        number: "03",
        title: "Start Creating",
        description:
            "Download and start using your premium tools immediately.",
        icon: (
            <img
                src={Image3}
                alt="Rocket"
                className="h-8 w-8 object-contain"
            />
        ),
    },
];

export const StepsSection = () => {
    return (
        <section className="bg-[#f8f9fc] px-5 py-14 sm:px-8 sm:py-16 lg:py-11">
            <div className="mx-auto max-w-[665px]">
                <div className="mb-7 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-[#171d2c] sm:text-[27px]">
                        Get Started In 3 Steps
                    </h2>
                    <p className="mt-2 text-[10px] text-slate-500">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative flex min-h-[210px] flex-col items-center rounded-[10px] border border-[#ededf0] bg-white px-4 pb-5 pt-12 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                            <span className="absolute right-2.5 top-2.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-[9px] font-medium text-white">
                                {step.number}
                            </span>

                            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2e8ff] text-violet-600">
                                <div className="h-8 w-8">{step.icon}</div>
                            </div>

                            <h3 className="text-[13px] font-semibold text-[#171d2c]">
                                {step.title}
                            </h3>

                            <p className="mt-2 max-w-[180px] text-[9px] leading-[1.5] text-slate-500">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
