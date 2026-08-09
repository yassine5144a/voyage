import Link from "next/link";
import { mockDeals, mockDestinations } from "@/lib/mock-data";
import DealCard from "@/components/deals/DealCard";
import DestinationCard from "@/components/destinations/DestinationCard";

export default function HomePage() {
  const featuredDeals = mockDeals.slice(0, 4);
  const popularDestinations = mockDestinations.slice(0, 6);

  return (
    <div dir="rtl">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[560px] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-ocean-700)] via-[var(--color-ocean-600)] to-[var(--color-teal-600)]"
          aria-hidden="true"
        />
        {/* Decorative blobs */}
        <div
          className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-100px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[var(--color-teal-400)]/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="text-[var(--color-teal-200)] text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-up">
            ✈️ منصة المسافرين
          </p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            اكتشف أفضل{" "}
            <span className="text-[var(--color-teal-300)]">عروض السفر</span>
            <br />
            حول العالم
          </h1>
          <p
            className="text-lg text-white/80 mb-10 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            شارك تجاربك، انشر العروض المميزة، واكتشف وجهات رائعة بأسعار لا تُصدق
          </p>

          {/* Search Bar */}
          <form
            className="flex gap-2 max-w-lg mx-auto animate-fade-up"
            style={{ animationDelay: "0.3s" }}
            role="search"
            aria-label="البحث عن وجهات وعروض"
          >
            <label htmlFor="hero-search" className="sr-only">
              ابحث عن وجهة أو عرض
            </label>
            <input
              id="hero-search"
              type="search"
              placeholder="ابحث عن وجهة أو عرض..."
              className="flex-1 px-5 py-3.5 rounded-full text-[var(--foreground)] bg-white/95 placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-400)] text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-full bg-[var(--color-sunset-500)] hover:bg-[var(--color-sunset-600)] text-white font-semibold text-sm transition-colors whitespace-nowrap"
            >
              ابحث
            </button>
          </form>

          {/* Quick stats */}
          <div
            className="flex justify-center gap-8 mt-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "+1,200", label: "منشور سياحي" },
              { value: "+140", label: "عرض نشط" },
              { value: "+80", label: "وجهة" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/70 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Deals ──────────────────────────────────────── */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        aria-labelledby="deals-heading"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2
              id="deals-heading"
              className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]"
            >
              🔥 أحدث العروض
            </h2>
            <p className="text-[var(--muted)] text-sm mt-1">
              عروض حصرية نشرها مسافرون آخرون
            </p>
          </div>
          <Link
            href="/deals"
            className="text-sm font-semibold text-[var(--primary)] hover:underline whitespace-nowrap"
          >
            عرض الكل ←
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* ── Popular Destinations ────────────────────────────────── */}
      <section
        className="bg-[var(--surface)] py-16"
        aria-labelledby="destinations-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2
                id="destinations-heading"
                className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]"
              >
                🌍 الوجهات الأكثر شعبية
              </h2>
              <p className="text-[var(--muted)] text-sm mt-1">
                استكشف الوجهات المفضلة لدى المسافرين
              </p>
            </div>
            <Link
              href="/destinations"
              className="text-sm font-semibold text-[var(--primary)] hover:underline whitespace-nowrap"
            >
              عرض الكل ←
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How it Works ────────────────────────────────────────── */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        aria-labelledby="how-heading"
      >
        <div className="text-center mb-12">
          <h2
            id="how-heading"
            className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-3"
          >
            كيف يعمل Voyage؟
          </h2>
          <p className="text-[var(--muted)] max-w-md mx-auto">
            منصة بسيطة تجمع المسافرين للاستفادة من تجارب وعروض بعضهم البعض
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔍",
              title: "اكتشف العروض",
              desc: "تصفح مئات العروض المنشورة يومياً من قِبل مسافرين حقيقيين بأسعار لا تجدها في أي مكان آخر.",
            },
            {
              icon: "🤝",
              title: "شارك تجربتك",
              desc: "انشر نصائحك وتجاربك السياحية لتساعد مسافرين آخرين على اتخاذ قرارات أفضل.",
            },
            {
              icon: "💰",
              title: "وفّر المال",
              desc: "استغل العروض قبل انتهاء صلاحيتها واحصل على أفضل صفقات السفر والفنادق.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="text-center p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]"
            >
              <span className="text-5xl block mb-4" aria-hidden="true">
                {step.icon}
              </span>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────── */}
      <section
        className="bg-gradient-to-l from-[var(--color-ocean-600)] to-[var(--color-teal-600)] py-16"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            انضم إلى آلاف المسافرين
          </h2>
          <p className="text-white/80 mb-8">
            سجّل حسابك مجاناً وابدأ في نشر عروضك ومشاركة تجاربك السياحية
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/auth/register"
              className="px-8 py-3 rounded-full bg-white text-[var(--color-ocean-700)] font-semibold hover:bg-white/90 transition-colors"
            >
              أنشئ حساباً مجانياً
            </Link>
            <Link
              href="/deals"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              تصفح العروض
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
