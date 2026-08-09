# Travel Deals Platform — Task List

## Phase 1: Foundation & Infrastructure

- [x] 1.1 Project structure setup — create folders: `src/components`, `src/lib`, `src/types`, `src/hooks`, and app route sub-folders
- [x] 1.2 TypeScript types — `src/types/index.ts` with User, Post, Deal, Destination, Category, Comment, Notification, and supporting interfaces
- [x] 1.3 Global CSS & design tokens — update `globals.css` with Voyage color palette, typography scale, RTL support, and utility classes
- [x] 1.4 Global layout — update `layout.tsx` with title "Voyage - Travel Deals", multilingual `<html>` config, and font setup
- [x] 1.5 Home page — `src/app/page.tsx` with hero section (Arabic primary), featured deals, popular destinations, and navigation header

## Phase 2: Authentication

- [ ] 2.1 Auth types & validation helpers — `src/lib/auth.ts` with password rules, email validation, and session token helpers
- [ ] 2.2 Registration page — `src/app/(auth)/register/page.tsx` with name, email, password, confirm-password fields and client-side validation
- [ ] 2.3 Login page — `src/app/(auth)/login/page.tsx` with email/password form and "remember me" option
- [ ] 2.4 Auth layout — `src/app/(auth)/layout.tsx` shared wrapper for auth pages
- [ ] 2.5 User session context — `src/hooks/useAuth.ts` (React context + hook) for session state management
- [ ] 2.6 Protected route utility — `src/lib/protected.ts` middleware helper to redirect unauthenticated users

## Phase 3: Traveler Profile

- [ ] 3.1 Profile page — `src/app/profile/[username]/page.tsx` with avatar, bio, location, stats (posts/followers/following)
- [ ] 3.2 Edit profile page — `src/app/profile/edit/page.tsx` with form to update name, bio, avatar, location, languages
- [ ] 3.3 Profile components — `src/components/profile/` avatar uploader, stats bar, content tabs
- [ ] 3.4 Follow button component — `src/components/profile/FollowButton.tsx` with optimistic UI

## Phase 4: Content Publishing

- [ ] 4.1 Rich text editor wrapper — `src/components/editor/RichTextEditor.tsx` (lightweight prose editor)
- [ ] 4.2 New post page — `src/app/posts/new/page.tsx` with title, body, tags, images, and destination fields
- [ ] 4.3 Post detail page — `src/app/posts/[id]/page.tsx` rendering post content, author info, and comments
- [ ] 4.4 Post card component — `src/components/posts/PostCard.tsx` for feed display
- [ ] 4.5 Image upload helper — `src/lib/upload.ts` utilities for file validation and preview

## Phase 5: Deals Publishing

- [ ] 5.1 New deal page — `src/app/deals/new/page.tsx` with hotel/flight fields, price, discount %, validity dates
- [ ] 5.2 Deal card component — `src/components/deals/DealCard.tsx` with pricing badge, countdown timer, and CTA
- [ ] 5.3 Deal detail page — `src/app/deals/[id]/page.tsx` full deal view with gallery, terms, and booking link
- [ ] 5.4 Deal list page — `src/app/deals/page.tsx` with grid layout and filter sidebar
- [ ] 5.5 Deals data helpers — `src/lib/deals.ts` mock data and utility functions

## Phase 6: Search & Filtering

- [ ] 6.1 Search bar component — `src/components/search/SearchBar.tsx` with debounced input and autocomplete dropdown
- [ ] 6.2 Filter sidebar component — `src/components/search/FilterSidebar.tsx` for price range, dates, category, stars
- [ ] 6.3 Search results page — `src/app/search/page.tsx` with query params and paginated results
- [ ] 6.4 Search hook — `src/hooks/useSearch.ts` managing search state and URL sync

## Phase 7: Social Interactions

- [ ] 7.1 Like button component — `src/components/social/LikeButton.tsx` with count and optimistic update
- [ ] 7.2 Comment form & list — `src/components/social/CommentSection.tsx` with nested replies
- [ ] 7.3 Share component — `src/components/social/ShareButton.tsx` with copy-link and social share options
- [ ] 7.4 Social data helpers — `src/lib/social.ts` mock endpoints for likes/comments/follows

## Phase 8: Feed & Discovery

- [ ] 8.1 Main feed page — `src/app/feed/page.tsx` with infinite scroll and content mix (posts + deals)
- [ ] 8.2 Feed card component — `src/components/feed/FeedCard.tsx` polymorphic card (post or deal)
- [ ] 8.3 Category navigation — `src/components/feed/CategoryNav.tsx` horizontal scrollable pill tabs
- [ ] 8.4 Trending sidebar — `src/components/feed/TrendingSidebar.tsx` with top destinations and hot deals

## Phase 9: Destinations

- [ ] 9.1 Destinations list page — `src/app/destinations/page.tsx` with grid and map toggle
- [ ] 9.2 Destination detail page — `src/app/destinations/[slug]/page.tsx` with gallery, weather, and linked posts/deals
- [ ] 9.3 Destination card component — `src/components/destinations/DestinationCard.tsx`
- [ ] 9.4 Destinations data — `src/lib/destinations.ts` mock destination data

## Phase 10: Notifications

- [ ] 10.1 Notifications page — `src/app/notifications/page.tsx` grouped by type (likes, comments, follows)
- [ ] 10.2 Notification bell component — `src/components/notifications/NotificationBell.tsx` with unread badge
- [ ] 10.3 Notification item component — `src/components/notifications/NotificationItem.tsx`
- [ ] 10.4 Notification preferences page — `src/app/settings/notifications/page.tsx`

## Phase 11: Moderation & Settings

- [ ] 11.1 Report modal component — `src/components/moderation/ReportModal.tsx` with reason selection
- [ ] 11.2 Admin moderation dashboard — `src/app/admin/moderation/page.tsx` (role-gated)
- [ ] 11.3 Settings layout & page — `src/app/settings/page.tsx` with account, privacy, language tabs
- [ ] 11.4 Language switcher — `src/components/ui/LanguageSwitcher.tsx` (ar/en/es) with direction change

## Phase 12: Shared UI Components

- [ ] 12.1 Button component — `src/components/ui/Button.tsx` with variants (primary, secondary, ghost, danger)
- [ ] 12.2 Input & form components — `src/components/ui/Input.tsx`, `Textarea.tsx`, `Select.tsx`
- [ ] 12.3 Modal component — `src/components/ui/Modal.tsx` with focus trap and backdrop
- [ ] 12.4 Badge & tag components — `src/components/ui/Badge.tsx`
- [ ] 12.5 Skeleton loaders — `src/components/ui/Skeleton.tsx` for loading states
- [ ] 12.6 Toast notification system — `src/components/ui/Toast.tsx` with queue management
- [ ] 12.7 Avatar component — `src/components/ui/Avatar.tsx` with fallback initials

## Phase 13: Performance & Accessibility

- [ ] 13.1 Image optimization — audit all `<img>` usages and replace with Next.js `<Image>` with proper sizes
- [ ] 13.2 Accessibility audit — add `aria-label`, `role`, skip-to-content link, keyboard navigation support
- [ ] 13.3 Metadata & SEO — dynamic `generateMetadata` for post/deal/destination pages
- [ ] 13.4 Loading & error boundaries — `loading.tsx` and `error.tsx` files for major routes
- [ ] 13.5 Performance audit — Lighthouse run, fix CLS/LCP issues, add `next/font` optimization
