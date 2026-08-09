// ============================================================
// Voyage — Utility Functions
// ============================================================

/**
 * Formats a price with the given currency.
 */
export function formatPrice(amount: number, currency: string): string {
  const localeMap: Record<string, string> = {
    SAR: "ar-SA",
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
  };
  const locale = localeMap[currency] ?? "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Returns a relative time string (e.g. "منذ 3 أيام").
 */
export function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffDay > 0) return `منذ ${diffDay} ${diffDay === 1 ? "يوم" : "أيام"}`;
  if (diffHr > 0) return `منذ ${diffHr} ${diffHr === 1 ? "ساعة" : "ساعات"}`;
  if (diffMin > 0) return `منذ ${diffMin} دقيقة`;
  return "الآن";
}

/**
 * Returns the time remaining until a date (e.g. "ينتهي خلال 3 أيام").
 */
export function timeUntil(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();

  if (diffMs <= 0) return "منتهي الصلاحية";

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffDay > 0) return `ينتهي خلال ${diffDay} ${diffDay === 1 ? "يوم" : "أيام"}`;
  if (diffHr > 0) return `ينتهي خلال ${diffHr} ${diffHr === 1 ? "ساعة" : "ساعات"}`;
  return `ينتهي خلال ${diffMin} دقيقة`;
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Truncates a string to a maximum length.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + "…";
}

/**
 * Returns CSS classes conditionally (simple cn utility).
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const categoryLabels: Record<string, string> = {
  hotel: "فندق",
  flight: "رحلة جوية",
  package: "باقة سياحية",
  restaurant: "مطعم",
  activity: "نشاط",
  tip: "نصيحة",
  itinerary: "خط سير",
  other: "أخرى",
};

export function getCategoryLabel(category: string): string {
  return categoryLabels[category] ?? category;
}
