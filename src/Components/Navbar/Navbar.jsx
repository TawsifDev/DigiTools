
export const Navbar = ({ cartCount = 0, onCartClick }) => {
    const navLinks = [
        { name: "Products", href: "#products" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav className="border-b border-gray-100 bg-white">
            <div className="mx-auto flex min-h-[76px] max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
                <a
                    href="#home"
                    className="shrink-0 text-2xl font-extrabold tracking-tight text-violet-600 sm:text-[28px]"
                >
                    DigiTools
                </a>

                <div className="hidden items-center gap-5 md:flex lg:gap-7">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-medium text-slate-800 transition hover:text-violet-600"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                    <button
                        type="button"
                        onClick={onCartClick}
                        aria-label={`Open cart with ${cartCount} items`}
                        className="relative flex items-center gap-1.5 text-slate-800 hover:text-violet-600"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            className="h-[17px] w-[17px]"
                        >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>

                        <span className="text-xs">Cart ({cartCount})</span>
                    </button>

                    <a
                        href="#login"
                        className="hidden text-xs font-medium text-slate-800 hover:text-violet-600 sm:block"
                    >
                        Login
                    </a>

                    <a
                        href="#get-started"
                        className="rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};
