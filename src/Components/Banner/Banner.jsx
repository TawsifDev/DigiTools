import BannerImage from "../../assets/assets/banner.png";


export const Banner = () => {
    // Add your image path here later.
    const bannerImage = BannerImage;

    return (
        <section
            id="home"
            className="bg-white"
        >
            <div className="mx-auto grid min-h-[490px] max-w-[1280px] items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-8 md:py-14 lg:px-12 lg:py-14">
                {/* Left content */}
                <div className="order-2 md:order-1">
                    {/* Announcement badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-[10px] font-medium text-violet-600 sm:text-[11px]">
                        <span className="flex h-2 w-2 items-center justify-center rounded-full bg-violet-500">
                            <span className="h-1 w-1 rounded-full bg-white" />
                        </span>
                        New: AI-Powered Tools Available
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-[550px] text-[38px] font-bold leading-[1.12] tracking-[-1.5px] text-[#292f3e] sm:text-5xl lg:text-[48px]">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    {/* Description */}
                    <p className="mt-3 max-w-[490px] text-[12px] leading-[1.9] text-slate-500 sm:text-[13px]">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        <br />
                        Explore Products
                    </p>

                    {/* Buttons */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <a
                            href="#products"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2.5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg sm:text-xs"
                        >
                            Explore Products
                        </a>

                        <a
                            href="#demo"
                            className="inline-flex items-center gap-2 rounded-full border border-violet-500 px-4 py-2.5 text-[11px] font-semibold text-violet-600 transition hover:bg-violet-50 sm:text-xs"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polygon points="6 3 20 12 6 21 6 3" />
                            </svg>
                            Watch Demo
                        </a>
                    </div>
                </div>

                {/* Right image */}
                <div className="order-1 flex justify-center md:order-2 md:justify-end">
                    {bannerImage ? (
                        <img
                            src={bannerImage}
                            alt="Digital tools and AI-powered workflow"
                            className="h-[280px] w-full max-w-[420px] rounded-md object-cover sm:h-[340px] md:h-[350px] lg:h-[380px]"
                        />
                    ) : (
                        <div
                            aria-label="Banner image placeholder"
                            className="h-[280px] w-full max-w-[420px] rounded-md bg-gradient-to-br from-gray-100 via-[#faf8f7] to-gray-200 sm:h-[340px] md:h-[350px] lg:h-[380px]"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

