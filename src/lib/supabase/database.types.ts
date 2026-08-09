export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          display_name: string;
          avatar_url: string | null;
          bio: string | null;
          visited_countries: string[];
          role: "user" | "moderator" | "admin";
          followers_count: number;
          following_count: number;
          posts_count: number;
          deals_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          display_name: string;
          avatar_url?: string | null;
          bio?: string | null;
          visited_countries?: string[];
          role?: "user" | "moderator" | "admin";
          followers_count?: number;
          following_count?: number;
          posts_count?: number;
          deals_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      destinations: {
        Row: {
          id: string;
          name: string;
          slug: string;
          country: string;
          country_code: string;
          image_url: string | null;
          posts_count: number;
          active_deals_count: number;
          average_rating: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          country: string;
          country_code: string;
          image_url?: string | null;
          posts_count?: number;
          active_deals_count?: number;
          average_rating?: number;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["destinations"]["Insert"]>;
      };
      deals: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          category: "hotel" | "flight" | "package" | "other";
          destination_id: string;
          original_price: number;
          discounted_price: number;
          currency: "USD" | "EUR" | "GBP" | "SAR";
          discount_percent: number;
          source_url: string;
          expires_at: string;
          author_id: string;
          clicks_count: number;
          saves_count: number;
          is_expired: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          category: "hotel" | "flight" | "package" | "other";
          destination_id: string;
          original_price: number;
          discounted_price: number;
          currency: "USD" | "EUR" | "GBP" | "SAR";
          discount_percent?: number;
          source_url: string;
          expires_at: string;
          author_id: string;
          clicks_count?: number;
          saves_count?: number;
          is_expired?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["deals"]["Insert"]>;
      };
      posts: {
        Row: {
          id: string;
          title: string;
          content: string;
          category: "hotel" | "flight" | "restaurant" | "activity" | "tip" | "itinerary" | "other";
          destination_id: string;
          images: string[];
          tags: string[];
          author_id: string;
          likes_count: number;
          comments_count: number;
          edited_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          category: "hotel" | "flight" | "restaurant" | "activity" | "tip" | "itinerary" | "other";
          destination_id: string;
          images?: string[];
          tags?: string[];
          author_id: string;
          likes_count?: number;
          comments_count?: number;
          edited_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["posts"]["Insert"]>;
      };
      comments: {
        Row: {
          id: string;
          content: string;
          post_id: string | null;
          deal_id: string | null;
          parent_id: string | null;
          author_id: string;
          likes_count: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          content: string;
          post_id?: string | null;
          deal_id?: string | null;
          parent_id?: string | null;
          author_id: string;
          likes_count?: number;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["comments"]["Insert"]>;
      };
      likes: {
        Row: {
          id: string;
          user_id: string;
          post_id: string | null;
          deal_id: string | null;
          comment_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          post_id?: string | null;
          deal_id?: string | null;
          comment_id?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["likes"]["Insert"]>;
      };
      saved_items: {
        Row: {
          id: string;
          user_id: string;
          post_id: string | null;
          deal_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          post_id?: string | null;
          deal_id?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["saved_items"]["Insert"]>;
      };
      follows: {
        Row: {
          id: string;
          follower_id: string;
          following_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          follower_id: string;
          following_id: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["follows"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
