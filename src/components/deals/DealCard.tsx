import Link from "next/link";
import type { Deal } from "@/types";
import { formatPrice, timeUntil, getCategoryLabel } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

interface DealCardProps {
  deal: Deal;
}

const categoryIcons: Record<string, string> = {
  hotel: "🏨",
  flight: "✈️",
  package: "🎒",
  other: "🏷️",
};

export default function DealCard({ deal }: DealCardProps) {
  const timeLeft = timeUntil(deal.expiresAt);
  const isExpiringSoon = deal.isExpiringSoon;

  return (
    <article
      className="card group flex flex-col h-full"
      dir="rtl"
      aria-label={`عرض: ${deal.title}`}
    >
      {/* Header */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        {/* Meta row */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden="true">
              {categoryIcons[deal.category] ?? "🏷️"}
            </span>
            <Badge variant="primary">{getCategoryLabel(deal.category)}</Badge>
          </div>
          <Badge variant="accent" size="sm">
            {deal.destination.name}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-[var(--foreground)] line-clamp-2 leading-snug">
          {deal.title}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-3 mt-auto">
          <span className="text-2xl font-bold text-[var(--color-ocean-600)]">
            {formatPrice(deal.discountedPrice, deal.currency)}
          </span>
          <span className="text-sm text-[var(--muted)] line-through">
            {formatPrice(deal.originalPrice, deal.currency)}
          </span>
          <span className="mr-auto">
            <Badge variant="highlight">
              خصم {deal.discountPercent}٪
            </Badge>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between gap-2 border-t border-[var(--border)] pt-3 mt-2">
        {/* Expiry */}
        <span
          className={`text-xs font-medium flex items-center gap-1 ${
            isExpiringSoon ? "text-[var(--color-sunset-600)] animate-pulse-badge" : "text-[var(--muted)]"
          }`}
        >
          {isExpiringSoon && <span aria-hidden="true">🔥</span>}
          {timeLeft}
        </span>

        {/* Author */}
        <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
          {deal.author.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={deal.author.avatarUrl}
              alt=""
              className="w-5 h-5 rounded-full object-cover"
              aria-hidden="true"
            />
          ) : (
            <span className="w-5 h-5 rounded-full bg-[var(--color-ocean-200)] flex items-center justify-center text-[10px] font-bold text-[var(--color-ocean-700)]">
              {deal.author.displayName[0]}
            </span>
          )}
          <span>{deal.author.displayName}</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href={`/deals/${deal.id}`}
        className="block mx-4 mb-4 text-center text-sm font-semibold py-2.5 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
        aria-label={`عرض تفاصيل: ${deal.title}`}
      >
        عرض الصفقة
      </Link>
    </article>
  );
}
