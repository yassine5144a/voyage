import { mockDestinations } from "@/lib/mock-data";
import DestinationCard from "@/components/destinations/DestinationCard";

export default function DestinationsPage() {
  return (
    <div dir="rtl">
      {/* Header */}
      <section className="bg-gradient-to-l from-[var(--color-teal-600)] to-[var(--color-ocean-700)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">🌍 الوجهات السياحية</h1>
          <p className="text-white/80">استكشف أجمل الوجهات حول العالم</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-8">
          <form role="search">
            <label htmlFor="dest-search" className="sr-only">ابحث عن وجهة</label>
            <input
              id="dest-search"
              type="search"
              placeholder="ابحث عن وجهة..."
              className="w-full max-w-md px-5 py-3 rounded-full border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </form>
        </div>

        {/* Stats */}
        <p className="text-sm text-[var(--muted)] mb-5">{mockDestinations.length} وجهة متاحة</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}
