export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          created_at: string | null;
          id: number;
          media_id: number | null;
          post_id: number | null;
          user_id: number;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          media_id?: number | null;
          post_id?: number | null;
          user_id: number;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          media_id?: number | null;
          post_id?: number | null;
          user_id?: number;
        };
      };
      characters: {
        Row: {
          bio: string;
          created_at: string;
          creator_id: number;
          display_name: string;
          id: number;
          username: string;
        };
        Insert: {
          bio: string;
          created_at?: string;
          creator_id: number;
          display_name: string;
          id?: number;
          username: string;
        };
        Update: {
          bio?: string;
          created_at?: string;
          creator_id?: number;
          display_name?: string;
          id?: number;
          username?: string;
        };
      };
      comments: {
        Row: {
          comment: string;
          created_at: string;
          id: number;
          post_id: number;
          user_id: number;
        };
        Insert: {
          comment: string;
          created_at?: string;
          id?: number;
          post_id: number;
          user_id: number;
        };
        Update: {
          comment?: string;
          created_at?: string;
          id?: number;
          post_id?: number;
          user_id?: number;
        };
      };
      creators: {
        Row: {
          created_at: string;
          creator_subscriptions: string;
          id: number;
          is_verified: boolean;
          user_id: number;
        };
        Insert: {
          created_at?: string;
          creator_subscriptions: string;
          id?: number;
          is_verified: boolean;
          user_id: number;
        };
        Update: {
          created_at?: string;
          creator_subscriptions?: string;
          id?: number;
          is_verified?: boolean;
          user_id?: number;
        };
      };
      followers: {
        Row: {
          created_at: string;
          followed_id: number;
          follower_id: number;
          id: number;
        };
        Insert: {
          created_at?: string;
          followed_id: number;
          follower_id: number;
          id?: number;
        };
        Update: {
          created_at?: string;
          followed_id?: number;
          follower_id?: number;
          id?: number;
        };
      };
      hashtags: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          user_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          user_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          user_id?: number;
        };
      };
      info_tags: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
      };
      items: {
        Row: {
          created_at: string;
          creator_id: number;
          id: number;
          name: string;
          owner_id: number;
          price: number;
          rarity: string;
        };
        Insert: {
          created_at?: string;
          creator_id: number;
          id?: number;
          name: string;
          owner_id: number;
          price: number;
          rarity: string;
        };
        Update: {
          created_at?: string;
          creator_id?: number;
          id?: number;
          name?: string;
          owner_id?: number;
          price?: number;
          rarity?: string;
        };
      };
      media: {
        Row: {
          id: number;
          media_type: string;
          media_url: string;
          post_id: number;
        };
        Insert: {
          id?: number;
          media_type: string;
          media_url: string;
          post_id: number;
        };
        Update: {
          id?: number;
          media_type?: string;
          media_url?: string;
          post_id?: number;
        };
      };
      post_likes: {
        Row: {
          created_at: string;
          id: number;
          is_like: boolean;
          is_super: boolean;
          post_id: number;
          user_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          is_like: boolean;
          is_super: boolean;
          post_id: number;
          user_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          is_like?: boolean;
          is_super?: boolean;
          post_id?: number;
          user_id?: number;
        };
      };
      posts: {
        Row: {
          created_at: string;
          description: string;
          hashtags_id: number;
          id: number;
          infotags_id: number;
          is_ppv: boolean;
          prompt_description: string;
          title: string;
          user_id: number;
        };
        Insert: {
          created_at?: string;
          description: string;
          hashtags_id: number;
          id?: number;
          infotags_id: number;
          is_ppv: boolean;
          prompt_description: string;
          title: string;
          user_id: number;
        };
        Update: {
          created_at?: string;
          description?: string;
          hashtags_id?: number;
          id?: number;
          infotags_id?: number;
          is_ppv?: boolean;
          prompt_description?: string;
          title?: string;
          user_id?: number;
        };
      };
      users: {
        Row: {
          bio: string;
          created_at: string;
          display_name: string;
          id: number;
          location: string | null;
          password: string;
          subscriptions: string;
          username: string;
        };
        Insert: {
          bio: string;
          created_at?: string;
          display_name: string;
          id?: number;
          location?: string | null;
          password: string;
          subscriptions: string;
          username: string;
        };
        Update: {
          bio?: string;
          created_at?: string;
          display_name?: string;
          id?: number;
          location?: string | null;
          password?: string;
          subscriptions?: string;
          username?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
