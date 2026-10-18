
import products from "./products.json";

const tagStyles = {
    popular: "bg-indigo-100 text-violet-600",
    new: "bg-emerald-100 text-emerald-700",
    "best-seller": "bg-amber-100 text-amber-700",
};

const formatPrice = (price) => `$${price}`;

const formatPeriod = (period) => {
    const periods = {
        monthly: "/Mo",
        yearly: "/Year",
        "one-time": "/One-Time",
    };

    return periods[period] || `/${period}`;
};

export const MainSection = ({
    activeTab,
    setActiveTab,
    cartItems,
    onAddToCart,
    onRemoveFromCart,
    onCheckout,
}) => {
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <main className="mx-auto max-w-[1000px] px-5 pb-16 pt-10 sm:px-8 sm:pt-12">
            {/* Section heading */}
            <div className="mb-7 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-[#171d2c] sm:text-[32px]">
                    Premium Digital Tools
                </h1>

                <p className="mx-auto mt-3 max-w-[380px] text-xs leading-relaxed text-slate-500">
                    Choose from our curated collection of premium digital products
                    designed to boost your productivity and creativity.
                </p>

                {/* Products / Cart toggle */}
                <div className="mt-4 inline-flex items-center rounded-full border border-gray-100 bg-white p-0.5 shadow-sm">
                    <button
                        type="button"
                        onClick={() => setActiveTab("products")}
                        className={`rounded-full px-5 py-2.5 text-[11px] font-medium transition ${activeTab === "products"
                                ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md"
                                : "text-slate-800 hover:bg-gray-50"
                            }`}
                    >
                        Products
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("cart")}
                        className={`rounded-full px-5 py-2.5 text-[11px] font-medium transition ${activeTab === "cart"
                                ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md"
                                : "text-slate-800 hover:bg-gray-50"
                            }`}
                    >
                        Cart ({cartItems.length})
                    </button>
                </div>
            </div>

            {/* Products section */}
            {activeTab === "products" && (
                <section
                    id="products"
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="relative flex min-w-0 flex-col rounded-xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Product tag */}
                            <span
                                className={`absolute right-2 top-2 rounded-full px-2.5 py-1 text-[9px] font-medium ${tagStyles[product.tagType] ||
                                    "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                {product.tag}
                            </span>

                            {/* Product icon */}
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-xl">
                                {product.icon}
                            </div>

                            {/* Name */}
                            <h2 className="pr-2 text-[15px] font-semibold leading-snug text-[#171d2c]">
                                {product.name}
                            </h2>

                            {/* Description */}
                            <p className="mt-2 min-h-[36px] text-[10px] leading-[1.5] text-slate-500">
                                {product.description}
                            </p>

                            {/* Price and period */}
                            <div className="mt-3 flex items-baseline gap-0.5">
                                <span className="text-[17px] font-bold text-[#171d2c]">
                                    {formatPrice(product.price)}
                                </span>

                                <span className="text-[10px] text-slate-500">
                                    {formatPeriod(product.period)}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="mt-3 flex-1 space-y-1.5 pb-4">
                                {product.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-1.5 text-[10px] leading-snug text-slate-600"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mt-px h-3.5 w-3.5 shrink-0 text-emerald-500"
                                        >
                                            <path d="m5 12 4 4L19 6" />
                                        </svg>

                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Buy button */}
                            <button
                                type="button"
                                onClick={() => onAddToCart(product)}
                                className="mt-auto w-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 py-2.5 text-[10px] font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
                            >
                                Buy Now
                            </button>
                        </article>
                    ))}
                </section>
            )}

            {/* Cart section */}
            {activeTab === "cart" && (
                <section className="mx-auto max-w-[650px]">
                    <div className="mb-5">
                        <h2 className="text-xl font-bold text-[#171d2c]">
                            Your Shopping Cart
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                            {cartItems.length}{" "}
                            {cartItems.length === 1 ? "product" : "products"} selected
                        </p>
                    </div>

                    {cartItems.length === 0 ? (
                        /* Empty cart message */
                        <div className="rounded-xl border border-gray-200 bg-[#f8f9fc] px-5 py-14 text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-3xl">
                                🛒
                            </div>

                            <h3 className="mt-4 text-lg font-semibold text-[#171d2c]">
                                Your cart is empty
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                You haven't added any digital tools yet.
                            </p>

                            <button
                                type="button"
                                onClick={() => setActiveTab("products")}
                                className="mt-5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
                            >
                                Explore Products
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* One-column cart layout */}
                            <div className="space-y-3">
                                {cartItems.map((item) => (
                                    <article
                                        key={item.cartItemId}
                                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:gap-4"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-50 text-2xl">
                                            {item.icon}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <h3 className="truncate text-sm font-semibold text-[#171d2c]">
                                                {item.name}
                                            </h3>

                                            <p className="mt-1 text-xs text-slate-500">
                                                {formatPrice(item.price)}
                                                {formatPeriod(item.period)}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => onRemoveFromCart(item.cartItemId)}
                                            className="shrink-0 rounded-full border border-red-200 px-3 py-1.5 text-[10px] font-medium text-red-600 transition hover:bg-red-50"
                                        >
                                            Remove
                                        </button>
                                    </article>
                                ))}
                            </div>

                            {/* Cart total */}
                            <div className="mt-5 rounded-xl border border-gray-200 bg-[#f8f9fc] p-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-600">
                                        Total ({cartItems.length} items)
                                    </span>

                                    <span className="text-xl font-bold text-[#171d2c]">
                                        ${totalPrice.toFixed(2)}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={onCheckout}
                                    className="mt-5 w-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 py-3 text-xs font-semibold text-white transition hover:opacity-90"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </>
                    )}
                </section>
            )}
        </main>
    );
};
