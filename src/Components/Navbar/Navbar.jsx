
import { useState } from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const cartCount = 0;

    const navLinks = [
        { name: "Products", href: "#products" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav className="relative z-50 border-b border-gray-100 bg-white">
            <div className="mx-auto flex min-h-[76px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
                {/* Logo */}
                <a
                    href="#home"
                    className="shrink-0 text-[28px] font-extrabold tracking-tight text-violet-600"
                >
                    DigiTools
                </a>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex lg:gap-7">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-medium text-slate-800 transition-colors hover:text-violet-600 lg:text-xs"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <a
                        href="#cart"
                        aria-label={`Shopping cart, ${cartCount} items`}
                        className="relative flex items-center justify-center text-slate-800 transition hover:text-violet-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-violet-600 text-[10px] text-white">
                                {cartCount}
                            </span>
                        )}
                    </a>

                    <a
                        href="#login"
                        className="hidden text-xs font-medium text-slate-800 hover:text-violet-600 sm:inline-block"
                    >
                        Login
                    </a>

                    <a
                        href="#get-started"
                        className="rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:text-xs"
                    >
                        Get Started
                    </a>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="btn btn-ghost btn-sm px-2 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            {menuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile navigation */}
            {menuOpen && (
                <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-slate-700 hover:text-violet-600"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#login"
                            className="text-sm font-medium text-slate-700 hover:text-violet-600"
                        >
                            Login
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
