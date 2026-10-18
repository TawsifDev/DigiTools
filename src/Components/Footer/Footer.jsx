
export const Footer = () => {
    const footerGroups = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "Templates", href: "#templates" },
                { name: "Integrations", href: "#integrations" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "#about" },
                { name: "Blog", href: "#blog" },
                { name: "Careers", href: "#careers" },
                { name: "Press", href: "#press" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "#documentation" },
                { name: "Help Center", href: "#help" },
                { name: "Community", href: "#community" },
                { name: "Contact", href: "#contact" },
            ],
        },
    ];

    const socialLinks = [
        {
            name: "Instagram",
            href: "https://www.instagram.com/",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="18" cy="6" r="1.3" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
                </svg>
            ),
        },
        {
            name: "X",
            href: "https://x.com/",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.9 2h6.4l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="border-t-[3px] border-violet-600 bg-[#101827] text-white">
            <div className="mx-auto max-w-[1000px] px-5 pt-10 sm:px-8 sm:pt-12">
                {/* Main footer */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-8 pb-8 sm:grid-cols-3 lg:grid-cols-[2fr_0.8fr_0.9fr_1.1fr_1fr] lg:gap-8">
                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-1">
                        <a
                            href="#home"
                            className="text-[22px] font-bold tracking-tight text-white"
                        >
                            DigiTools
                        </a>

                        <p className="mt-2 max-w-[250px] text-[10px] leading-[1.6] text-gray-400">
                            Premium digital tools for creators, professionals, and
                            businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Link groups */}
                    {footerGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className="mb-3 text-[12px] font-medium text-white">
                                {group.title}
                            </h3>

                            <ul className="space-y-2.5">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[10px] text-gray-400 transition-colors hover:text-violet-400"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social links */}
                    <div>
                        <h3 className="mb-3 whitespace-nowrap text-[12px] font-medium text-white">
                            Social Links
                        </h3>

                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.name}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#101827] transition-colors hover:bg-violet-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom footer */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[10px] text-gray-500">
                        © 2026 Digitools. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-5">
                        <a
                            href="#privacy"
                            className="text-[10px] text-gray-400 transition hover:text-white"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#terms"
                            className="text-[10px] text-gray-400 transition hover:text-white"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#cookies"
                            className="text-[10px] text-gray-400 transition hover:text-white"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
