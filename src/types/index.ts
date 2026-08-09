// ============================================================
// Voyage — Core TypeScript Types
// ============================================================

export type UserRole = "user" | "moderator" | "admin";

export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
  visitedCountries: string[];
  role: UserRole;
  isEmailVerified: boolean;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  dealsCount: number;
  createdAt: string;
}

export type PostCategory =
  | "hotel"
  | "flight"
  | "restaurant"
  | "activity"
  | "tip"
  | "itinerary"
  | "other";

export interface Post {
  id: string;
  title: string;
  content: string;
  category: PostCategory;
  destination: Destination;
  images: string[];
  tags: string[];
  author: Pick<User, "id" | "username" | "displayName" | "avatarUrl">;
  likesCount: number;
  commentsCount: number;
  isLikedByCurrentUser?: boolean;
  isSavedByCurrentUser?: boolean;
  editedAt?: string;
  createdAt: string;
}

export type DealCategory = "hotel" | "flight" | "package" | "other";
export type Currency = "USD" | "EUR" | "GBP" | "SAR";

export interface Deal {
  id: string;
  title: string;
  description?: string;
  category: DealCategory;
  destination: Destination;
  originalPrice: number;
  discountedPrice: number;
  currency: Currency;
  discountPercent: number;
  sourceUrl: string;
  expiresAt: string;
  author: Pick<User, "id" | "username" | "displayName" | "avatarUrl">;
  clicksCount: number;
  savesCount: number;
  isExpired: boolean;
  isExpiringSoon: boolean; // < 24 hours
  isSavedByCurrentUser?: boolean;
  createdAt: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  countryCode: string;
  imageUrl?: string;
  postsCount: number;
  activeDealsCount: number;
  averageRating: number;
}

export interface Comment {
  id: string;
  content: string;
  author: Pick<User, "id" | "username" | "displayName" | "avatarUrl">;
  parentId?: string;
  replies?: Comment[];
  likesCount: number;
  createdAt: string;
}

export type NotificationType =
  | "like"
  | "comment"
  | "follow"
  | "reply"
  | "deal_expiring";

export interface Notification {
  id: string;
  type: NotificationType;
  isRead: boolean;
  actor?: Pick<User, "id" | "username" | "displayName" | "avatarUrl">;
  targetId?: string;
  targetTitle?: string;
  createdAt: string;
}

export interface SearchFilters {
  query?: string;
  destination?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minDiscount?: number;
  dateFrom?: string;
  dateTo?: string;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
