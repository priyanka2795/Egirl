-- Main tables
CREATE TABLE IF NOT EXISTS profile (
	user_id uuid PRIMARY KEY NOT NULL REFERENCES auth.users(id),
	username VARCHAR(256) NOT NULL,
	display_name VARCHAR(256) NOT NULL,
	bio VARCHAR(256) NOT NULL,
	location VARCHAR(256),
	profile_picture VARCHAR(500) NOT NULL,
	profile_banner_picture VARCHAR(500) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS creators (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	is_verified BOOL NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS characters (
	id SERIAL PRIMARY KEY,
	username VARCHAR(256) NOT NULL,
	display_name VARCHAR(256) NOT NULL,
	is_verified BOOL NOT NULL,
	bio VARCHAR(256) NOT NULL,
	creator_id INTEGER NOT NULL REFERENCES creators(id),
	profile_picture VARCHAR(500) NOT NULL,
	profile_banner_picture VARCHAR(500) NOT NULL,
	character_profile_tag_ids INTEGER [] NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS profile_tags (
	id SERIAL PRIMARY KEY,
	name VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS character_profile_tags (
	id SERIAL PRIMARY KEY,
	character_id INTEGER NOT NULL REFERENCES characters(id),
	character_profile_tag_id INTEGER NOT NULL REFERENCES profile_tags(id),
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS subscriptions (
	id SERIAL PRIMARY KEY,
	subscription_name VARCHAR(256) NOT NULL,
	subscription_price NUMERIC NOT NULL,
	stripe_product_id VARCHAR(256) NOT NULL,
	subscription_tier VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_subscriptions (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	character_id INTEGER NOT NULL REFERENCES characters(id),
	subscription_id INTEGER NOT NULL REFERENCES subscriptions(id),
	stripe_subscription_id VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS creator_subscriptions (
	id SERIAL PRIMARY KEY,
	subscriber_id INTEGER NOT NULL REFERENCES creators(id),
	subscription_id INTEGER NOT NULL REFERENCES subscriptions(id),
	stripe_subscription_id VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS followers (
	id SERIAL PRIMARY KEY,
	follower_id uuid NOT NULL REFERENCES profile(user_id),
	followed_id INTEGER NOT NULL REFERENCES characters(id),
	UNIQUE (follower_id, followed_id),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- deprecated
-- CREATE TABLE IF NOT EXISTS infotags (
-- 	id SERIAL PRIMARY KEY,
-- 	created_by INTEGER NOT NULL REFERENCES characters(id),
-- 	name VARCHAR(256) NOT NULL,
-- 	is_hashtag BOOL NOT NULL,
-- 	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );
CREATE TABLE IF NOT EXISTS posts (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	character_id INTEGER REFERENCES characters(id),
	title VARCHAR(256) NOT NULL,
	description VARCHAR(256) NOT NULL,
	prompt_description VARCHAR(256) NOT NULL,
	is_ppv BOOL NOT NULL,
	is_character_post BOOL NOT NULL,
	profile_tag_ids INTEGER [] NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media (
	id SERIAL PRIMARY KEY,
	post_id INTEGER NOT NULL REFERENCES posts(id),
	media_type VARCHAR(256) NOT NULL,
	media_url VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS comments (
	id SERIAL PRIMARY KEY,
	post_id INTEGER NOT NULL REFERENCES posts(id),
	user_id uuid NOT NULL REFERENCES profile(user_id),
	description VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS post_likes (
	id SERIAL PRIMARY KEY,
	post_id INTEGER NOT NULL REFERENCES posts(id),
	user_id uuid NOT NULL REFERENCES profile(user_id),
	is_like BOOLEAN NOT NULL,
	is_super BOOLEAN NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	creator_id INTEGER NOT NULL REFERENCES creators(id),
	owner_id uuid NOT NULL REFERENCES profile(user_id),
	price DECIMAL(10, 2) NOT NULL,
	rarity VARCHAR(256) NOT NULL,
	thumbnail VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bookmarks (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	post_id INTEGER NULL REFERENCES posts(id),
	media_id INTEGER NULL REFERENCES media(id),
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	UNIQUE (user_id, post_id, media_id)
);

CREATE TABLE IF NOT EXISTS user_interests (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	profile_tag_id INTEGER NOT NULL REFERENCES profile_tags(id),
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS lists (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	list_name VARCHAR(256) NOT NULL,
	character_ids INTEGER [] NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_blocks (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	blocked_profile_id uuid REFERENCES profile(user_id),
	blocked_character_id INTEGER REFERENCES characters(id),
	blocked_reason_title VARCHAR(200) NOT NULL,
	blocked_description VARCHAR(500) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_reports (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	reported_profile_id uuid REFERENCES profile(user_id),
	reported_character_id INTEGER REFERENCES characters(id),
	reported_reason_title VARCHAR(200) NOT NULL,
	reported_description VARCHAR(500) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS rooms (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	character_id INTEGER NOT NULL REFERENCES characters(id),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS messages_user_to_character (
	id SERIAL PRIMARY KEY,
	room_id INTEGER NOT NULL REFERENCES rooms(id),
	sender_id uuid NOT NULL REFERENCES profile(user_id),
	recipient_id INTEGER NOT NULL REFERENCES characters(id),
	message VARCHAR(2000) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS messages_character_to_user (
	id SERIAL PRIMARY KEY,
	room_id INTEGER NOT NULL REFERENCES rooms(id),
	sender_id INTEGER NOT NULL REFERENCES characters(id),
	recipient_id uuid NOT NULL REFERENCES profile(user_id),
	message VARCHAR(2000) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS prepaid_dollars (
	user_id uuid NOT NULL REFERENCES profile(user_id),
	prepaid_dollar_amount NUMERIC(11, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_transactions (
	user_id uuid NOT NULL REFERENCES profile(user_id),
	transaction_amount NUMERIC(11, 2) NOT NULL,
	transaction_description VARCHAR(256) NOT NULL,
	stripe_transaction_id VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Stripe tables
-- Stripe Customers
CREATE TABLE IF NOT EXISTS stripe_customers (
	user_id uuid NOT NULL REFERENCES profile(user_id),
	stripe_customer_id VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Stripe Payments
CREATE TABLE IF NOT EXISTS stripe_payments (
	customer VARCHAR(256) NOT NULL,
	payment_intent_id VARCHAR(256) NOT NULL,
	amount VARCHAR(256) NOT NULL,
	currency VARCHAR(256) NOT NULL,
	card_number VARCHAR(256) NOT NULL,
	payment_method_id VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Stripe Products
CREATE TABLE IF NOT EXISTS stripe_products (
	id VARCHAR(256) PRIMARY KEY,
	active BOOLEAN NOT NULL,
	name VARCHAR(256) NOT NULL,
	description VARCHAR(256) NOT NULL,
	image VARCHAR(256) NOT NULL,
	metadata VARCHAR(256) NOT NULL
);

-- Stripe Prices
CREATE TABLE IF NOT EXISTS stripe_prices (
	id VARCHAR(256) PRIMARY KEY,
	product_id VARCHAR(256) NOT NULL,
	active BOOLEAN NOT NULL,
	currency VARCHAR(256) NOT NULL,
	description VARCHAR(256) NOT NULL,
	price_type VARCHAR(256) NOT NULL,
	unit_amount VARCHAR(256) NOT NULL,
	price_interval VARCHAR(256) NOT NULL,
	interval_count VARCHAR(256) NOT NULL,
	trial_period_days VARCHAR(256) NOT NULL,
	metadata VARCHAR(256) NOT NULL
);

-- Stripe Subscriptions
CREATE TABLE IF NOT EXISTS stripe_subscriptions (
	id VARCHAR(256) PRIMARY KEY,
	user_id VARCHAR(256) NOT NULL,
	metadata VARCHAR(256) NOT NULL,
	subscription_status BOOLEAN NOT NULL,
	price_id VARCHAR(256) NOT NULL,
	quantity VARCHAR(256) NOT NULL,
	cancel_at_period_end VARCHAR(256),
	cancel_at VARCHAR(256),
	canceled_at VARCHAR(256),
	current_period_start VARCHAR(256),
	current_period_end VARCHAR(256),
	created VARCHAR(256),
	ended_at VARCHAR(256),
	trial_start VARCHAR(256),
	trial_end VARCHAR(256)
);

-- ML Object stores 
-- Images
CREATE TABLE IF NOT EXISTS sd_images (
	id SERIAL PRIMARY KEY,
	creator_user_id uuid NOT NULL REFERENCES profile(user_id),
	prompt TEXT NOT NULL,
	img_url VARCHAR(256) NOT NULL,
	img_hash VARCHAR(512) NOT NULL,
	label VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Inpainting  
CREATE TABLE IF NOT EXISTS mask_images (
	creator_user_id uuid NOT NULL REFERENCES profile(user_id),
	original_img_id INTEGER NOT NULL REFERENCES sd_images(id),
	img_url VARCHAR(256) NOT NULL,
	img_hash VARCHAR(512) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- TODO: Textual Inversion tables
-- Tags categories
CREATE TABLE IF NOT EXISTS tag_categories (
	id SERIAL PRIMARY KEY,
	category VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tags Table (prompt tags)
CREATE TABLE IF NOT EXISTS tags (
	id SERIAL PRIMARY KEY,
	tag VARCHAR(256) NOT NULL,
	category_id INTEGER NOT NULL REFERENCES tag_categories(id),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Autocomplete Tags Table (autocomplete tags) - danbooru, E621 etc. 
CREATE TABLE IF NOT EXISTS autocomplete_tags (
	id SERIAL PRIMARY KEY,
	tag VARCHAR(256) NOT NULL,
	color_scheme INTEGER,
	frequency INTEGER,
	related_terms TEXT,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Affiliate marketing  
CREATE TABLE IF NOT EXISTS affiliate_links (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	affiliate_link VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS affiliate_joins (
	id SERIAL PRIMARY KEY,
	affiliate_link_id INT NOT NULL REFERENCES affiliate_links(id),
	affiliate_user_id uuid NOT NULL REFERENCES profile(user_id),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS referral_joins (
	id SERIAL PRIMARY KEY,
	referral_id INT NOT NULL REFERENCES referrals(id),
	referral_user_id uuid NOT NULL REFERENCES profile(user_id),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS referrals (
	id SERIAL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES profile(user_id),
	referral_code VARCHAR(256) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);