export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      affiliate_joins: {
        Row: {
          affiliate_link_id: number
          affiliate_user_id: string
          created_at: string
          id: number
        }
        Insert: {
          affiliate_link_id: number
          affiliate_user_id: string
          created_at?: string
          id?: number
        }
        Update: {
          affiliate_link_id?: number
          affiliate_user_id?: string
          created_at?: string
          id?: number
        }
      }
      affiliate_links: {
        Row: {
          affiliate_link: string
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          affiliate_link: string
          created_at?: string
          id?: number
          user_id: string
        }
        Update: {
          affiliate_link?: string
          created_at?: string
          id?: number
          user_id?: string
        }
      }
      autocomplete_tags: {
        Row: {
          color_scheme: number | null
          created_at: string
          frequency: number | null
          id: number
          related_terms: string | null
          tag: string
        }
        Insert: {
          color_scheme?: number | null
          created_at?: string
          frequency?: number | null
          id?: number
          related_terms?: string | null
          tag: string
        }
        Update: {
          color_scheme?: number | null
          created_at?: string
          frequency?: number | null
          id?: number
          related_terms?: string | null
          tag?: string
        }
      }
      bookmarks: {
        Row: {
          created_at: string | null
          id: number
          media_id: number | null
          post_id: number | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          media_id?: number | null
          post_id?: number | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          media_id?: number | null
          post_id?: number | null
          user_id?: string
        }
      }
      characters: {
        Row: {
          bio: string
          created_at: string
          creator_id: number
          display_name: string
          id: number
          infotag_ids: number[]
          is_verified: boolean
          profile_banner_picture: string
          profile_picture: string
          username: string
        }
        Insert: {
          bio: string
          created_at?: string
          creator_id: number
          display_name: string
          id?: number
          infotag_ids: number[]
          is_verified: boolean
          profile_banner_picture: string
          profile_picture: string
          username: string
        }
        Update: {
          bio?: string
          created_at?: string
          creator_id?: number
          display_name?: string
          id?: number
          infotag_ids?: number[]
          is_verified?: boolean
          profile_banner_picture?: string
          profile_picture?: string
          username?: string
        }
      }
      comments: {
        Row: {
          created_at: string
          description: string
          id: number
          post_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          post_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          post_id?: number
          user_id?: string
        }
      }
      creator_subscriptions: {
        Row: {
          created_at: string
          id: number
          stripe_subscription_id: string
          subscriber_id: number
          subscription_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          stripe_subscription_id: string
          subscriber_id: number
          subscription_id: number
        }
        Update: {
          created_at?: string
          id?: number
          stripe_subscription_id?: string
          subscriber_id?: number
          subscription_id?: number
        }
      }
      creators: {
        Row: {
          created_at: string
          id: number
          is_verified: boolean
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_verified: boolean
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          is_verified?: boolean
          user_id?: string
        }
      }
      followers: {
        Row: {
          created_at: string
          followed_id: number
          follower_id: string
          id: number
        }
        Insert: {
          created_at?: string
          followed_id: number
          follower_id: string
          id?: number
        }
        Update: {
          created_at?: string
          followed_id?: number
          follower_id?: string
          id?: number
        }
      }
      infotags: {
        Row: {
          created_at: string
          created_by: number
          id: number
          is_hashtag: boolean
          name: string
        }
        Insert: {
          created_at?: string
          created_by: number
          id?: number
          is_hashtag: boolean
          name: string
        }
        Update: {
          created_at?: string
          created_by?: number
          id?: number
          is_hashtag?: boolean
          name?: string
        }
      }
      interests: {
        Row: {
          created_at: string | null
          id: number
          infotag_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          infotag_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          infotag_id?: number
          user_id?: string
        }
      }
      items: {
        Row: {
          created_at: string
          creator_id: number
          id: number
          name: string
          owner_id: string
          price: number
          rarity: string
        }
        Insert: {
          created_at?: string
          creator_id: number
          id?: number
          name: string
          owner_id: string
          price: number
          rarity: string
        }
        Update: {
          created_at?: string
          creator_id?: number
          id?: number
          name?: string
          owner_id?: string
          price?: number
          rarity?: string
        }
      }
      lists: {
        Row: {
          character_ids: number[]
          created_at: string
          id: number
          list_name: string
          user_id: string
        }
        Insert: {
          character_ids: number[]
          created_at?: string
          id?: number
          list_name: string
          user_id: string
        }
        Update: {
          character_ids?: number[]
          created_at?: string
          id?: number
          list_name?: string
          user_id?: string
        }
      }
      mask_images: {
        Row: {
          created_at: string
          creator_user_id: string
          img_hash: string
          img_url: string
          original_img_id: number
        }
        Insert: {
          created_at?: string
          creator_user_id: string
          img_hash: string
          img_url: string
          original_img_id: number
        }
        Update: {
          created_at?: string
          creator_user_id?: string
          img_hash?: string
          img_url?: string
          original_img_id?: number
        }
      }
      media: {
        Row: {
          created_at: string
          id: number
          media_type: string
          media_url: string
          post_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          media_type: string
          media_url: string
          post_id: number
        }
        Update: {
          created_at?: string
          id?: number
          media_type?: string
          media_url?: string
          post_id?: number
        }
      }
      messages_character_to_user: {
        Row: {
          created_at: string
          id: number
          message: string
          recipient_id: string
          room_id: number
          sender_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          message: string
          recipient_id: string
          room_id: number
          sender_id: number
        }
        Update: {
          created_at?: string
          id?: number
          message?: string
          recipient_id?: string
          room_id?: number
          sender_id?: number
        }
      }
      messages_user_to_character: {
        Row: {
          created_at: string
          id: number
          message: string
          recipient_id: number
          sender_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          message: string
          recipient_id: number
          sender_id: string
        }
        Update: {
          created_at?: string
          id?: number
          message?: string
          recipient_id?: number
          sender_id?: string
        }
      }
      post_likes: {
        Row: {
          created_at: string
          id: number
          is_like: boolean
          is_super: boolean
          post_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_like: boolean
          is_super: boolean
          post_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          is_like?: boolean
          is_super?: boolean
          post_id?: number
          user_id?: string
        }
      }
      posts: {
        Row: {
          character_id: number | null
          created_at: string
          description: string
          id: number
          infotag_ids: number[]
          is_character_post: boolean
          is_ppv: boolean
          prompt_description: string
          title: string
          user_id: string
        }
        Insert: {
          character_id?: number | null
          created_at?: string
          description: string
          id?: number
          infotag_ids: number[]
          is_character_post: boolean
          is_ppv: boolean
          prompt_description: string
          title: string
          user_id: string
        }
        Update: {
          character_id?: number | null
          created_at?: string
          description?: string
          id?: number
          infotag_ids?: number[]
          is_character_post?: boolean
          is_ppv?: boolean
          prompt_description?: string
          title?: string
          user_id?: string
        }
      }
      prepaid_dollars: {
        Row: {
          prepaid_dollar_amount: number
          user_id: string
        }
        Insert: {
          prepaid_dollar_amount: number
          user_id: string
        }
        Update: {
          prepaid_dollar_amount?: number
          user_id?: string
        }
      }
      profile: {
        Row: {
          bio: string
          created_at: string
          display_name: string
          location: string | null
          profile_banner_picture: string
          profile_picture: string
          user_id: string
          username: string
        }
        Insert: {
          bio: string
          created_at?: string
          display_name: string
          location?: string | null
          profile_banner_picture: string
          profile_picture: string
          user_id: string
          username: string
        }
        Update: {
          bio?: string
          created_at?: string
          display_name?: string
          location?: string | null
          profile_banner_picture?: string
          profile_picture?: string
          user_id?: string
          username?: string
        }
      }
      referral_joins: {
        Row: {
          created_at: string
          id: number
          referral_id: number
          referral_user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          referral_id: number
          referral_user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          referral_id?: number
          referral_user_id?: string
        }
      }
      referrals: {
        Row: {
          created_at: string
          id: number
          referral_code: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          referral_code: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          referral_code?: string
          user_id?: string
        }
      }
      rooms: {
        Row: {
          character_id: number
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          character_id: number
          created_at?: string
          id?: number
          user_id: string
        }
        Update: {
          character_id?: number
          created_at?: string
          id?: number
          user_id?: string
        }
      }
      sd_images: {
        Row: {
          created_at: string
          creator_user_id: string
          id: number
          img_hash: string
          img_url: string
          label: string
          prompt: string
        }
        Insert: {
          created_at?: string
          creator_user_id: string
          id?: number
          img_hash: string
          img_url: string
          label: string
          prompt: string
        }
        Update: {
          created_at?: string
          creator_user_id?: string
          id?: number
          img_hash?: string
          img_url?: string
          label?: string
          prompt?: string
        }
      }
      stripe_customers: {
        Row: {
          created_at: string
          stripe_customer_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          stripe_customer_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          stripe_customer_id?: string
          user_id?: string
        }
      }
      stripe_payments: {
        Row: {
          amount: string
          card_number: string
          created_at: string
          currency: string
          customer: string
          payment_intent_id: string
          payment_method_id: string
        }
        Insert: {
          amount: string
          card_number: string
          created_at?: string
          currency: string
          customer: string
          payment_intent_id: string
          payment_method_id: string
        }
        Update: {
          amount?: string
          card_number?: string
          created_at?: string
          currency?: string
          customer?: string
          payment_intent_id?: string
          payment_method_id?: string
        }
      }
      stripe_prices: {
        Row: {
          active: boolean
          currency: string
          description: string
          id: string
          interval_count: string
          metadata: string
          price_interval: string
          price_type: string
          product_id: string
          trial_period_days: string
          unit_amount: string
        }
        Insert: {
          active: boolean
          currency: string
          description: string
          id: string
          interval_count: string
          metadata: string
          price_interval: string
          price_type: string
          product_id: string
          trial_period_days: string
          unit_amount: string
        }
        Update: {
          active?: boolean
          currency?: string
          description?: string
          id?: string
          interval_count?: string
          metadata?: string
          price_interval?: string
          price_type?: string
          product_id?: string
          trial_period_days?: string
          unit_amount?: string
        }
      }
      stripe_products: {
        Row: {
          active: boolean
          description: string
          id: string
          image: string
          metadata: string
          name: string
        }
        Insert: {
          active: boolean
          description: string
          id: string
          image: string
          metadata: string
          name: string
        }
        Update: {
          active?: boolean
          description?: string
          id?: string
          image?: string
          metadata?: string
          name?: string
        }
      }
      stripe_subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: string | null
          canceled_at: string | null
          created: string | null
          current_period_end: string | null
          current_period_start: string | null
          ended_at: string | null
          id: string
          metadata: string
          price_id: string
          quantity: string
          subscription_status: boolean
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: string | null
          canceled_at?: string | null
          created?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          ended_at?: string | null
          id: string
          metadata: string
          price_id: string
          quantity: string
          subscription_status: boolean
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: string | null
          canceled_at?: string | null
          created?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          ended_at?: string | null
          id?: string
          metadata?: string
          price_id?: string
          quantity?: string
          subscription_status?: boolean
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
      }
      subscriptions: {
        Row: {
          created_at: string
          id: number
          stripe_product_id: string
          subscription_name: string
          subscription_price: number
          subscription_tier: string
        }
        Insert: {
          created_at?: string
          id?: number
          stripe_product_id: string
          subscription_name: string
          subscription_price: number
          subscription_tier: string
        }
        Update: {
          created_at?: string
          id?: number
          stripe_product_id?: string
          subscription_name?: string
          subscription_price?: number
          subscription_tier?: string
        }
      }
      tag_categories: {
        Row: {
          category: string
          created_at: string
          id: number
        }
        Insert: {
          category: string
          created_at?: string
          id?: number
        }
        Update: {
          category?: string
          created_at?: string
          id?: number
        }
      }
      tags: {
        Row: {
          category_id: number
          created_at: string
          id: number
          tag: string
        }
        Insert: {
          category_id: number
          created_at?: string
          id?: number
          tag: string
        }
        Update: {
          category_id?: number
          created_at?: string
          id?: number
          tag?: string
        }
      }
      user_blocks: {
        Row: {
          blocked_character_id: number | null
          blocked_description: string
          blocked_profile_id: string | null
          blocked_reason_title: string
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          blocked_character_id?: number | null
          blocked_description: string
          blocked_profile_id?: string | null
          blocked_reason_title: string
          created_at?: string
          id?: number
          user_id: string
        }
        Update: {
          blocked_character_id?: number | null
          blocked_description?: string
          blocked_profile_id?: string | null
          blocked_reason_title?: string
          created_at?: string
          id?: number
          user_id?: string
        }
      }
      user_reports: {
        Row: {
          created_at: string
          id: number
          reported_character_id: number | null
          reported_description: string
          reported_profile_id: string | null
          reported_reason_title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          reported_character_id?: number | null
          reported_description: string
          reported_profile_id?: string | null
          reported_reason_title: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          reported_character_id?: number | null
          reported_description?: string
          reported_profile_id?: string | null
          reported_reason_title?: string
          user_id?: string
        }
      }
      user_subscriptions: {
        Row: {
          character_id: number
          created_at: string
          id: number
          stripe_subscription_id: string
          subscription_id: number
          user_id: string
        }
        Insert: {
          character_id: number
          created_at?: string
          id?: number
          stripe_subscription_id: string
          subscription_id: number
          user_id: string
        }
        Update: {
          character_id?: number
          created_at?: string
          id?: number
          stripe_subscription_id?: string
          subscription_id?: number
          user_id?: string
        }
      }
      user_transactions: {
        Row: {
          created_at: string
          stripe_transaction_id: string
          transaction_amount: number
          transaction_description: string
          user_id: string
        }
        Insert: {
          created_at?: string
          stripe_transaction_id: string
          transaction_amount: number
          transaction_description: string
          user_id: string
        }
        Update: {
          created_at?: string
          stripe_transaction_id?: string
          transaction_amount?: number
          transaction_description?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
