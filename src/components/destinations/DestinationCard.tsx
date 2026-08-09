import Link from "next/link";
import type { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1" aria-label={`تقييم ${rating} من 5`}>
      <span className="text-yellow-400 text-sm" aria-hidden="true">★</span>
      <span className="text-xs font-medium text-[var(--foreground)]">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] block shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-shadow"
      aria-label={`استكشف ${destination.name}، ${destination.country}`}
    >
      {/* Background image */}
      {destination.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={destination.imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          aria-hidden="true"
          loading="lazy"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-ocean-400)] to-[var(--color-teal-600)]"
          aria-hidden="true"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4" dir="rtl">
        <div className="flex items-end justify-between gap-2">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{destination.name}</h3>
            <p className="text-white/80 text-sm">{destination.country}</p>
          </div>
          <StarRating rating={destination.averageRating} />
        </div>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs text-white/70 bg-white/10 rounded-full px-2 py-0.5">
            {destination.postsCount} منشور
          </span>
          {destination.activeDealsCount > 0 && (
            <span className="text-xs text-[var(--color-sunset-300)] bg-white/10 rounded-full px-2 py-0.5">
              {destination.activeDealsCount} عرض نشط
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
