import { mockDeals, mockDestinations } from "@/lib/mock-data";
import DealCard from "@/components/deals/DealCard";
import Link from "next/link";

const categories = [
  { value: "", label: "الكل" },
  { value: "hotel", label: "🏨 فنادق" },
  { value: "flight", label: "✈️ رحلات" },
  { value: "package", label: "🎒 باقات" },
  { value: "other", label: "🏷️ أخرى" },
];

export default function DealsPage() {
  return (
    <div dir="rtl">
      {/* Header */}
      <section className="bg-gradient-to-l from-[var(--color-ocean-600)] to-[var(--color-teal-600)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">🔥 أحدث العروض</h1>
          <p className="text-white/80">عروض حصرية نشرها مسافرون آخرون</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--border)] hover:bg-[var(--color-ocean-50)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Destination Filter */}
          <select
            className="px-4 py-2 rounded-full text-sm border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            aria-label="فلتر الوجهة"
          >
            <option value="">كل الوجهات</option>
            {mockDestinations.map((d) => (
              <option key={d.id} value={d.slug}>{d.name}</option>
            ))}
          </select>

          {/* Sort */}
          <select
            className="px-4 py-2 rounded-full text-sm border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] mr-auto"
            aria-label="ترتيب النتائج"
          >
            <option value="discount">الأعلى خصماً</option>
            <option value="newest">الأحدث</option>
            <option value="expiring">ينتهي قريباً</option>
            <option value="price_asc">الأقل سعراً</option>
          </select>
        </div>

        {/* Results count */}
        <p className="text-sm text-[var(--muted)] mb-5">
          {mockDeals.length} عرض متاح
        </p>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {mockDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* Post Deal CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
          <p className="text-lg font-semibold mb-2">وجدت عرضاً مميزاً؟</p>
          <p className="text-[var(--muted)] text-sm mb-4">شاركه مع مجتمع المسافرين قبل أن ينتهي</p>
          <Link
            href="/deals/new"
            className="inline-block px-6 py-3 rounded-full bg-[var(--primary)] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            + انشر عرضاً الآن
          </Link>
        </div>
      </div>
    </div>
  );
}
