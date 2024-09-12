import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_users_role" AS ENUM('admin', 'seller');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_bg_type" AS ENUM('center', 'bottom', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_buttons_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_item_types_items_buttons_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_slider_hero_with_cards_block_list_link_type" AS ENUM('page', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_slider_hero_with_cards_block_cards_link_type" AS ENUM('page', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_page_header_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_product_cards_cards_link_type" AS ENUM('custom', 'page');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_vertical_card_block_cards_size" AS ENUM('default', 'large');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_vertical_card_block_cards_subtitle_type" AS ENUM('list', 'txt');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_vertical_card_block_cards_icon_type" AS ENUM('bg', 'not-bg');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_vertical_card_block_cards_footer_type" AS ENUM('modal', 'txtLink', 'text', 'btnLink');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_vertical_card_block_cards_footer_lnk_lnk_type" AS ENUM('custom', 'page');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_form_tabs_form_variant" AS ENUM('formForPerson', 'formSendSMS', 'formWithAdditionalInfo', 'formWithCity', 'formWithTextMessage', 'formCardSelection', 'formForOrderingCall');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_private_slider_list_link_type" AS ENUM('page', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_private_slider_list_background_position" AS ENUM('left', 'center', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_private_credit_cards_credit_cards_link_type" AS ENUM('custom', 'page');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_secondary_menu_links_link_type" AS ENUM('page', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_menu_items_link_type" AS ENUM('page', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_menu_items_menu_list_link_type" AS ENUM('page', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_menu_items_menu_list_menu_items_links_link_type" AS ENUM('page', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_menu_items_menu_list_menu_items_add_menu_links_link_type" AS ENUM('page', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_banks_cities_city" AS ENUM('Aksu', 'Aktau', 'Aktobe', 'Almaty', 'Altai', 'Arkalyk', 'Astana', 'Atyrau', 'Balkhash', 'Zhanaozen', 'Zhezkazgan', 'Zaisan', 'Karaganda', 'Kokshetau', 'Kostanay', 'Kulsary', 'Kyzylorda', 'Lisakovsk', 'Pavlodar', 'Petropavlovsk', 'Ridder', 'Rudny', 'Saryagash', 'Semei', 'Taldykorgan', 'Taraz', 'Temirtau', 'Turkestan', 'Oral', 'Ust-Kamenogorsk', 'Khromtau', 'Shakhtinsk', 'Shymkent', 'Ekibastuz');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_banks_working_time_utc" AS ENUM('UTCm1200', 'UTCm1100', 'UTCm1000', 'UTCm0930', 'UTCm0900', 'UTCm0800', 'UTCm0700', 'UTCm0600', 'UTCm0500', 'UTCm0400', 'UTCm0330', 'UTCm0300', 'UTCm0200', 'UTCm0100', 'UTCp0000', 'UTCp0100', 'UTCp0200', 'UTCp0300', 'UTCp0330', 'UTCp0400', 'UTCp0430', 'UTCp0500', 'UTCp0530', 'UTCp0545', 'UTCp0600', 'UTCp0630', 'UTCp0700', 'UTCp0800', 'UTCp0845', 'UTCp0900', 'UTCp0930', 'UTCp1000', 'UTCp1030', 'UTCp1100', 'UTCp1200', 'UTCp1245', 'UTCp1300', 'UTCp1400');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_banks_working_time_start_time" AS ENUM('01T00', '01T30', '02T00', '02T30', '03T00', '03T30', '04T00', '04T30', '05T00', '05T30', '06T00', '06T30', '07T00', '07T30', '08T00', '08T30', '09T00', '09T30', '10T00', '10T30', '11T00', '11T30', '12T00', '12T30', '13T00', '13T30', '14T00', '14T30', '15T00', '15T30', '16T00', '16T30', '17T00', '17T30', '18T00', '18T30', '19T00', '19T30', '20T00', '20T30', '21T00', '21T30', '22T00', '22T30', '23T00', '23T30', '24T00');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_banks_working_time_end_time" AS ENUM('01T00', '01T30', '02T00', '02T30', '03T00', '03T30', '04T00', '04T30', '05T00', '05T30', '06T00', '06T30', '07T00', '07T30', '08T00', '08T30', '09T00', '09T30', '10T00', '10T30', '11T00', '11T30', '12T00', '12T30', '13T00', '13T30', '14T00', '14T30', '15T00', '15T30', '16T00', '16T30', '17T00', '17T30', '18T00', '18T30', '19T00', '19T30', '20T00', '20T30', '21T00', '21T30', '22T00', '22T30', '23T00', '23T30', '24T00');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_banks_working_time_days" AS ENUM('everyday', 'monday-sunday', 'monday-friday', 'monday-saturday', 'tuesday-saturday', 'tuesday-sunday', 'wednesday-sunday', 'wednesday-saturday', 'thursday-sunday', 'thursday-saturday', 'friday-sunday', 'friday-saturday', 'saturday-sunday', 'monday-wednesday', 'monday-thursday', 'monday-tuesday', 'tuesday-thursday', 'tuesday-wednesday', 'wednesday-friday', 'wednesday-thursday', 'thursday-friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_terminals_working_time_utc" AS ENUM('UTCm1200', 'UTCm1100', 'UTCm1000', 'UTCm0930', 'UTCm0900', 'UTCm0800', 'UTCm0700', 'UTCm0600', 'UTCm0500', 'UTCm0400', 'UTCm0330', 'UTCm0300', 'UTCm0200', 'UTCm0100', 'UTCp0000', 'UTCp0100', 'UTCp0200', 'UTCp0300', 'UTCp0330', 'UTCp0400', 'UTCp0430', 'UTCp0500', 'UTCp0530', 'UTCp0545', 'UTCp0600', 'UTCp0630', 'UTCp0700', 'UTCp0800', 'UTCp0845', 'UTCp0900', 'UTCp0930', 'UTCp1000', 'UTCp1030', 'UTCp1100', 'UTCp1200', 'UTCp1245', 'UTCp1300', 'UTCp1400');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_terminals_working_time_start_time" AS ENUM('01T00', '01T30', '02T00', '02T30', '03T00', '03T30', '04T00', '04T30', '05T00', '05T30', '06T00', '06T30', '07T00', '07T30', '08T00', '08T30', '09T00', '09T30', '10T00', '10T30', '11T00', '11T30', '12T00', '12T30', '13T00', '13T30', '14T00', '14T30', '15T00', '15T30', '16T00', '16T30', '17T00', '17T30', '18T00', '18T30', '19T00', '19T30', '20T00', '20T30', '21T00', '21T30', '22T00', '22T30', '23T00', '23T30', '24T00');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_terminals_working_time_end_time" AS ENUM('01T00', '01T30', '02T00', '02T30', '03T00', '03T30', '04T00', '04T30', '05T00', '05T30', '06T00', '06T30', '07T00', '07T30', '08T00', '08T30', '09T00', '09T30', '10T00', '10T30', '11T00', '11T30', '12T00', '12T30', '13T00', '13T30', '14T00', '14T30', '15T00', '15T30', '16T00', '16T30', '17T00', '17T30', '18T00', '18T30', '19T00', '19T30', '20T00', '20T30', '21T00', '21T30', '22T00', '22T30', '23T00', '23T30', '24T00');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_terminals_working_time_days" AS ENUM('everyday', 'monday-sunday', 'monday-friday', 'monday-saturday', 'tuesday-saturday', 'tuesday-sunday', 'wednesday-sunday', 'wednesday-saturday', 'thursday-sunday', 'thursday-saturday', 'friday-sunday', 'friday-saturday', 'saturday-sunday', 'monday-wednesday', 'monday-thursday', 'monday-tuesday', 'tuesday-thursday', 'tuesday-wednesday', 'wednesday-friday', 'wednesday-thursday', 'thursday-friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_terminals_working_time_cities_city" AS ENUM('Aksu', 'Aktau', 'Aktobe', 'Almaty', 'Altai', 'Arkalyk', 'Astana', 'Atyrau', 'Balkhash', 'Zhanaozen', 'Zhezkazgan', 'Zaisan', 'Karaganda', 'Kokshetau', 'Kostanay', 'Kulsary', 'Kyzylorda', 'Lisakovsk', 'Pavlodar', 'Petropavlovsk', 'Ridder', 'Rudny', 'Saryagash', 'Semei', 'Taldykorgan', 'Taraz', 'Temirtau', 'Turkestan', 'Oral', 'Ust-Kamenogorsk', 'Khromtau', 'Shakhtinsk', 'Shymkent', 'Ekibastuz');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_offices_cities_city" AS ENUM('Aksu', 'Aktau', 'Aktobe', 'Almaty', 'Altai', 'Arkalyk', 'Astana', 'Atyrau', 'Balkhash', 'Zhanaozen', 'Zhezkazgan', 'Zaisan', 'Karaganda', 'Kokshetau', 'Kostanay', 'Kulsary', 'Kyzylorda', 'Lisakovsk', 'Pavlodar', 'Petropavlovsk', 'Ridder', 'Rudny', 'Saryagash', 'Semei', 'Taldykorgan', 'Taraz', 'Temirtau', 'Turkestan', 'Oral', 'Ust-Kamenogorsk', 'Khromtau', 'Shakhtinsk', 'Shymkent', 'Ekibastuz');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_offices_working_time_utc" AS ENUM('UTCm1200', 'UTCm1100', 'UTCm1000', 'UTCm0930', 'UTCm0900', 'UTCm0800', 'UTCm0700', 'UTCm0600', 'UTCm0500', 'UTCm0400', 'UTCm0330', 'UTCm0300', 'UTCm0200', 'UTCm0100', 'UTCp0000', 'UTCp0100', 'UTCp0200', 'UTCp0300', 'UTCp0330', 'UTCp0400', 'UTCp0430', 'UTCp0500', 'UTCp0530', 'UTCp0545', 'UTCp0600', 'UTCp0630', 'UTCp0700', 'UTCp0800', 'UTCp0845', 'UTCp0900', 'UTCp0930', 'UTCp1000', 'UTCp1030', 'UTCp1100', 'UTCp1200', 'UTCp1245', 'UTCp1300', 'UTCp1400');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_offices_working_time_start_time" AS ENUM('01T00', '01T30', '02T00', '02T30', '03T00', '03T30', '04T00', '04T30', '05T00', '05T30', '06T00', '06T30', '07T00', '07T30', '08T00', '08T30', '09T00', '09T30', '10T00', '10T30', '11T00', '11T30', '12T00', '12T30', '13T00', '13T30', '14T00', '14T30', '15T00', '15T30', '16T00', '16T30', '17T00', '17T30', '18T00', '18T30', '19T00', '19T30', '20T00', '20T30', '21T00', '21T30', '22T00', '22T30', '23T00', '23T30', '24T00');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_offices_working_time_end_time" AS ENUM('01T00', '01T30', '02T00', '02T30', '03T00', '03T30', '04T00', '04T30', '05T00', '05T30', '06T00', '06T30', '07T00', '07T30', '08T00', '08T30', '09T00', '09T30', '10T00', '10T30', '11T00', '11T30', '12T00', '12T30', '13T00', '13T30', '14T00', '14T30', '15T00', '15T30', '16T00', '16T30', '17T00', '17T30', '18T00', '18T30', '19T00', '19T30', '20T00', '20T30', '21T00', '21T30', '22T00', '22T30', '23T00', '23T30', '24T00');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_offices_working_time_days" AS ENUM('everyday', 'monday-sunday', 'monday-friday', 'monday-saturday', 'tuesday-saturday', 'tuesday-sunday', 'wednesday-sunday', 'wednesday-saturday', 'thursday-sunday', 'thursday-saturday', 'friday-sunday', 'friday-saturday', 'saturday-sunday', 'monday-wednesday', 'monday-thursday', 'monday-tuesday', 'tuesday-thursday', 'tuesday-wednesday', 'wednesday-friday', 'wednesday-thursday', 'thursday-friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"role" "enum_users_role" NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hero_buttons" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"variant" "enum_pages_blocks_hero_buttons_variant" NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hero" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"subtitle_label_ru" varchar,
	"subtitle_label_en" varchar,
	"subtitle_label_kz" varchar,
	"background_color" varchar NOT NULL,
	"secondary_color" varchar,
	"bgType" "enum_pages_blocks_hero_bg_type" NOT NULL,
	"right" numeric,
	"background_size" numeric,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_item_types_items_characteristics" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"value_label_ru" varchar NOT NULL,
	"value_label_en" varchar NOT NULL,
	"value_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_item_types_items_buttons" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"variant" "enum_pages_blocks_item_types_items_buttons_variant" NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_item_types_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_item_types" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_table_headers" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_table_rows_cells" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"value_label_ru" varchar NOT NULL,
	"value_label_en" varchar NOT NULL,
	"value_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_table_rows" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_table" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_details_coin_details" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"value" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_details_coin" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_package_offers_packages_features" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"value_label_ru" varchar NOT NULL,
	"value_label_en" varchar NOT NULL,
	"value_label_kz" varchar NOT NULL,
	"tooltip_enabled" boolean NOT NULL,
	"tooltip_rich_text_label_ru" jsonb,
	"tooltip_rich_text_label_en" jsonb,
	"tooltip_rich_text_label_kz" jsonb
);

CREATE TABLE IF NOT EXISTS "pages_blocks_package_offers_packages" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"price_label_ru" varchar NOT NULL,
	"price_label_en" varchar NOT NULL,
	"price_label_kz" varchar NOT NULL,
	"price_tooltip_enabled" boolean NOT NULL,
	"price_tooltip_rich_text_label_ru" jsonb,
	"price_tooltip_rich_text_label_en" jsonb,
	"price_tooltip_rich_text_label_kz" jsonb
);

CREATE TABLE IF NOT EXISTS "pages_blocks_package_offers" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_services_card_services_features" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"feature_label_ru" varchar NOT NULL,
	"feature_label_en" varchar NOT NULL,
	"feature_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_services_card_services" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_services_card" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"intro_title_label_ru" varchar NOT NULL,
	"intro_title_label_en" varchar NOT NULL,
	"intro_title_label_kz" varchar NOT NULL,
	"intro_description_label_ru" varchar NOT NULL,
	"intro_description_label_en" varchar NOT NULL,
	"intro_description_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_faqs" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"question_label_ru" varchar NOT NULL,
	"question_label_en" varchar NOT NULL,
	"question_label_kz" varchar NOT NULL,
	"answer_label_ru" varchar NOT NULL,
	"answer_label_en" varchar NOT NULL,
	"answer_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_faq" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_list" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"subtitle_label_kz" varchar NOT NULL,
	"subtitle_label_ru" varchar NOT NULL,
	"subtitle_label_en" varchar NOT NULL,
	"button_text_label_kz" varchar NOT NULL,
	"button_text_label_ru" varchar NOT NULL,
	"button_text_label_en" varchar NOT NULL,
	"linkType" "enum_pages_blocks_slider_hero_with_cards_block_list_link_type" NOT NULL,
	"custom_link" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"card_title_label_kz" varchar NOT NULL,
	"card_title_label_ru" varchar NOT NULL,
	"card_title_label_en" varchar NOT NULL,
	"card_subtitle_label_kz" varchar NOT NULL,
	"card_subtitle_label_ru" varchar NOT NULL,
	"card_subtitle_label_en" varchar NOT NULL,
	"linkType" "enum_pages_blocks_slider_hero_with_cards_block_cards_link_type" NOT NULL,
	"custom_link" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_page_header" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"theme" "enum_pages_blocks_page_header_theme",
	"title_label_ru" varchar,
	"title_label_en" varchar,
	"title_label_kz" varchar,
	"subtitle_label_ru" varchar,
	"subtitle_label_en" varchar,
	"subtitle_label_kz" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_posts_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_product_cards_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"sub_title_label_kz" varchar NOT NULL,
	"sub_title_label_ru" varchar NOT NULL,
	"sub_title_label_en" varchar NOT NULL,
	"button_text_label_kz" varchar NOT NULL,
	"button_text_label_ru" varchar NOT NULL,
	"button_text_label_en" varchar NOT NULL,
	"linkType" "enum_pages_blocks_product_cards_cards_link_type" NOT NULL,
	"custom_link" varchar,
	"background_color" varchar NOT NULL,
	"image_offset_bottom" numeric,
	"image_offset_right" numeric
);

CREATE TABLE IF NOT EXISTS "pages_blocks_product_cards" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_vertical_card_block_cards_subtitle_list" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"kz" varchar,
	"ru" varchar,
	"en" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_vertical_card_block_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_pages_blocks_vertical_card_block_cards_size" NOT NULL,
	"title_kz" varchar NOT NULL,
	"title_ru" varchar NOT NULL,
	"title_en" varchar NOT NULL,
	"subtitleType" "enum_pages_blocks_vertical_card_block_cards_subtitle_type" NOT NULL,
	"subtitle_txt_kz" varchar,
	"subtitle_txt_ru" varchar,
	"subtitle_txt_en" varchar,
	"bg_color" varchar NOT NULL,
	"txt_color" varchar,
	"iconType" "enum_pages_blocks_vertical_card_block_cards_icon_type",
	"footerType" "enum_pages_blocks_vertical_card_block_cards_footer_type",
	"footer_txt_kz" varchar,
	"footer_txt_ru" varchar,
	"footer_txt_en" varchar,
	"footerLnk_lnkType" "enum_pages_blocks_vertical_card_block_cards_footer_lnk_lnk_type",
	"footer_lnk_custom_lnk" varchar,
	"footer_modal_title_kz" varchar,
	"footer_modal_title_ru" varchar,
	"footer_modal_title_en" varchar,
	"footer_modal_subtitle_kz" varchar,
	"footer_modal_subtitle_ru" varchar,
	"footer_modal_subtitle_en" varchar,
	"footer_modal_rich_txt" jsonb,
	"img_offsets_bottom" varchar,
	"img_offsets_right" varchar,
	"img_offsets_width" varchar,
	"img_offsets_height" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_vertical_card_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fill_screen" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_form_tabs" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"tab_name_label_ru" varchar NOT NULL,
	"tab_name_label_en" varchar NOT NULL,
	"tab_name_label_kz" varchar NOT NULL,
	"formVariant" "enum_pages_blocks_form_tabs_form_variant" NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_form" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_horizontal_statistic_card_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"statistic_label_ru" varchar NOT NULL,
	"statistic_label_en" varchar NOT NULL,
	"statistic_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_horizontal_statistic_card" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_warning_card" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"warning_text_label_ru" varchar NOT NULL,
	"warning_text_label_en" varchar NOT NULL,
	"warning_text_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_key_pointed_card_bullet_points" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_ru" varchar NOT NULL,
	"label_en" varchar NOT NULL,
	"label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_key_pointed_card" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_description_with_richtext" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"rich_text_label_ru" jsonb NOT NULL,
	"rich_text_label_en" jsonb NOT NULL,
	"rich_text_label_kz" jsonb NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_guarantee_type_card_guarantees_details" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"value_label_ru" varchar NOT NULL,
	"value_label_en" varchar NOT NULL,
	"value_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_guarantee_type_card_guarantees" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar,
	"description_label_en" varchar,
	"description_label_kz" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_guarantee_type_card" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_tariff_card_rates_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"description_tooltip_enabled" boolean,
	"description_tooltip_label_ru" jsonb,
	"description_tooltip_label_en" jsonb,
	"description_tooltip_label_kz" jsonb,
	"price_label_ru" varchar NOT NULL,
	"price_label_en" varchar NOT NULL,
	"price_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_tariff_card_rates" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"title_tooltip_enabled" boolean,
	"title_tooltip_label_ru" jsonb,
	"title_tooltip_label_en" jsonb,
	"title_tooltip_label_kz" jsonb
);

CREATE TABLE IF NOT EXISTS "pages_blocks_tariff_card" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"main_card_title_label_ru" varchar NOT NULL,
	"main_card_title_label_en" varchar NOT NULL,
	"main_card_title_label_kz" varchar NOT NULL,
	"main_card_description_label_ru" varchar NOT NULL,
	"main_card_description_label_en" varchar NOT NULL,
	"main_card_description_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_contact_center_cards_details" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar,
	"label_label_en" varchar,
	"label_label_kz" varchar,
	"value_label_ru" jsonb NOT NULL,
	"value_label_en" jsonb NOT NULL,
	"value_label_kz" jsonb NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_contact_center_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar,
	"description_label_en" varchar,
	"description_label_kz" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_contact_center" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_information_card_cards_details" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"value_label_ru" jsonb NOT NULL,
	"value_label_en" jsonb NOT NULL,
	"value_label_kz" jsonb NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_information_card_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_information_card" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_information_sections_details" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"value_label_ru" jsonb NOT NULL,
	"value_label_en" jsonb NOT NULL,
	"value_label_kz" jsonb NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_information_sections" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar,
	"title_label_en" varchar,
	"title_label_kz" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_information" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"heading_label_ru" varchar,
	"heading_label_en" varchar,
	"heading_label_kz" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_video_player" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_for_sale" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_block_with_icon_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"sub_title_label_ru" jsonb,
	"sub_title_label_en" jsonb,
	"sub_title_label_kz" jsonb
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_block_with_icon" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_partners_icons" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_partners" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_service_privilege_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_service_privilege" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_private_slider_list" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"subtitle_label_kz" varchar NOT NULL,
	"subtitle_label_ru" varchar NOT NULL,
	"subtitle_label_en" varchar NOT NULL,
	"button_text_label_kz" varchar NOT NULL,
	"button_text_label_ru" varchar NOT NULL,
	"button_text_label_en" varchar NOT NULL,
	"linkType" "enum_pages_blocks_private_slider_list_link_type" NOT NULL,
	"custom_link" varchar,
	"backgroundPosition" "enum_pages_blocks_private_slider_list_background_position"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_private_slider" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_additional_bonus_section" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_bonus_section" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_category_bonus_section" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_digital_card_section" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_insurance_section" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_promotions_section" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"titles_first_title_label_ru" varchar NOT NULL,
	"titles_first_title_label_en" varchar NOT NULL,
	"titles_first_title_label_kz" varchar NOT NULL,
	"titles_second_title_label_ru" varchar NOT NULL,
	"titles_second_title_label_en" varchar NOT NULL,
	"titles_second_title_label_kz" varchar NOT NULL,
	"titles_third_title_label_ru" varchar NOT NULL,
	"titles_third_title_label_en" varchar NOT NULL,
	"titles_third_title_label_kz" varchar NOT NULL,
	"titles_last_title_label_ru" varchar NOT NULL,
	"titles_last_title_label_en" varchar NOT NULL,
	"titles_last_title_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_tariff_limits_section_description_list" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_tariff_limits_section_chart_bars" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"height" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_tariff_limits_section" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_bank_location" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_service_packages_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" jsonb,
	"description_label_en" jsonb,
	"description_label_kz" jsonb,
	"button_text_label_kz" varchar NOT NULL,
	"button_text_label_ru" varchar NOT NULL,
	"button_text_label_en" varchar NOT NULL,
	"details_included_items_title_label_ru" varchar NOT NULL,
	"details_included_items_title_label_en" varchar NOT NULL,
	"details_included_items_title_label_kz" varchar NOT NULL,
	"details_included_items_label_ru" jsonb NOT NULL,
	"details_included_items_label_en" jsonb NOT NULL,
	"details_included_items_label_kz" jsonb NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_service_packages" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_board_of_directors" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_history_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_contact_banner_card" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"phone_number_label_ru" varchar NOT NULL,
	"phone_number_label_en" varchar NOT NULL,
	"phone_number_label_kz" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_private_credit_cards_credit_cards_characteristics" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"value_label_ru" varchar NOT NULL,
	"value_label_en" varchar NOT NULL,
	"value_label_kz" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_private_credit_cards_credit_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"button_text_label_kz" varchar NOT NULL,
	"button_text_label_ru" varchar NOT NULL,
	"button_text_label_en" varchar NOT NULL,
	"linkType" "enum_pages_blocks_private_credit_cards_credit_cards_link_type" NOT NULL,
	"custom_link" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_private_credit_cards" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer,
	"icons_id" integer,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "icons" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "secondary_menu_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_labels_label_ru" varchar NOT NULL,
	"link_labels_label_en" varchar NOT NULL,
	"link_labels_label_kz" varchar NOT NULL,
	"linkType" "enum_secondary_menu_links_link_type" NOT NULL,
	"custom_link" varchar
);

CREATE TABLE IF NOT EXISTS "secondary_menu" (
	"id" serial PRIMARY KEY NOT NULL,
	"labels_label_ru" varchar NOT NULL,
	"labels_label_en" varchar NOT NULL,
	"labels_label_kz" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "secondary_menu_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"privsate_label_ru" varchar NOT NULL,
	"privsate_label_en" varchar NOT NULL,
	"privsate_label_kz" varchar NOT NULL,
	"privsate_phone" varchar NOT NULL,
	"business_label_ru" varchar NOT NULL,
	"business_label_en" varchar NOT NULL,
	"business_label_kz" varchar NOT NULL,
	"business_phone" varchar NOT NULL,
	"social_links_telegram_url" varchar NOT NULL,
	"social_links_vk_url" varchar NOT NULL,
	"social_links_facebook_url" varchar NOT NULL,
	"social_links_youtube_url" varchar NOT NULL,
	"social_links_whatsapp_url" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "contacts_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"icons_id" integer
);

CREATE TABLE IF NOT EXISTS "menu_items_menu_list_menu_items_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_kz" varchar NOT NULL,
	"label_ru" varchar NOT NULL,
	"label_en" varchar NOT NULL,
	"linkType" "enum_menu_items_menu_list_menu_items_links_link_type" NOT NULL,
	"custom_link" varchar
);

CREATE TABLE IF NOT EXISTS "menu_items_menu_list_menu_items_add_menu_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_kz" varchar NOT NULL,
	"label_ru" varchar NOT NULL,
	"label_en" varchar NOT NULL,
	"linkType" "enum_menu_items_menu_list_menu_items_add_menu_links_link_type" NOT NULL,
	"custom_link" varchar
);

CREATE TABLE IF NOT EXISTS "menu_items_menu_list" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_kz" varchar NOT NULL,
	"label_ru" varchar NOT NULL,
	"label_en" varchar NOT NULL,
	"linkType" "enum_menu_items_menu_list_link_type",
	"free_link" varchar,
	"menu_items_add_menu_name_menu" varchar
);

CREATE TABLE IF NOT EXISTS "menu_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"label_kz" varchar NOT NULL,
	"label_ru" varchar NOT NULL,
	"label_en" varchar NOT NULL,
	"linkType" "enum_menu_items_link_type",
	"free_link" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "menu_items_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "posts_content_array" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"rich_text_label_kz" jsonb NOT NULL,
	"rich_text_label_ru" jsonb NOT NULL,
	"rich_text_label_en" jsonb NOT NULL,
	"hint_text_label_kz" varchar,
	"hint_text_label_ru" varchar,
	"hint_text_label_en" varchar
);

CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title_en" varchar NOT NULL,
	"title_ru" varchar NOT NULL,
	"title_kz" varchar NOT NULL,
	"date" timestamp(3) with time zone NOT NULL,
	"description_label_kz" varchar,
	"description_label_ru" varchar,
	"description_label_en" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "posts_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer,
	"post_categories_id" integer
);

CREATE TABLE IF NOT EXISTS "post_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"label_en" varchar NOT NULL,
	"label_ru" varchar NOT NULL,
	"label_kz" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "for_sale_images" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "for_sale_info" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"key_key_kz" varchar NOT NULL,
	"key_key_ru" varchar NOT NULL,
	"key_key_en" varchar NOT NULL,
	"value_value_kz" varchar NOT NULL,
	"value_value_ru" varchar NOT NULL,
	"value_value_en" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "for_sale" (
	"id" serial PRIMARY KEY NOT NULL,
	"title_title_kz" varchar NOT NULL,
	"title_title_ru" varchar NOT NULL,
	"title_title_en" varchar NOT NULL,
	"description_description_kz" varchar NOT NULL,
	"description_description_ru" varchar NOT NULL,
	"description_description_en" varchar NOT NULL,
	"points_latitude" numeric,
	"points_longitude" numeric,
	"contacts_phone" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "for_sale_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer,
	"filters_id" integer
);

CREATE TABLE IF NOT EXISTS "filters" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_label_kz" varchar,
	"category_label_ru" varchar,
	"category_label_en" varchar,
	"region_label_kz" varchar,
	"region_label_ru" varchar,
	"region_label_en" varchar,
	"service_type_label_kz" varchar,
	"service_type_label_ru" varchar,
	"service_type_label_en" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "debit_card_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "compare_cards_horizontal_t_h" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"card_name_label_kz" varchar NOT NULL,
	"card_name_label_ru" varchar NOT NULL,
	"card_name_label_en" varchar NOT NULL,
	"description_label_kz" varchar,
	"description_label_ru" varchar,
	"description_label_en" varchar
);

CREATE TABLE IF NOT EXISTS "compare_cards_sections_rows_values" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_kz" varchar,
	"label_label_ru" varchar,
	"label_label_en" varchar
);

CREATE TABLE IF NOT EXISTS "compare_cards_sections_rows" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label_label_kz" varchar NOT NULL,
	"label_label_ru" varchar NOT NULL,
	"label_label_en" varchar NOT NULL,
	"tooltip_label_kz" varchar,
	"tooltip_label_ru" varchar,
	"tooltip_label_en" varchar
);

CREATE TABLE IF NOT EXISTS "compare_cards_sections" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"section_title_label_kz" varchar NOT NULL,
	"section_title_label_ru" varchar NOT NULL,
	"section_title_label_en" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "compare_cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "compare_cards_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "banks_cities" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"city" "enum_banks_cities_city"
);

CREATE TABLE IF NOT EXISTS "banks" (
	"id" serial PRIMARY KEY NOT NULL,
	"latitude" numeric NOT NULL,
	"longitude" numeric NOT NULL,
	"address_label_en" varchar NOT NULL,
	"address_label_ru" varchar NOT NULL,
	"address_label_kz" varchar NOT NULL,
	"workingTime_utc" "enum_banks_working_time_utc" NOT NULL,
	"workingTime_startTime" "enum_banks_working_time_start_time" NOT NULL,
	"workingTime_endTime" "enum_banks_working_time_end_time" NOT NULL,
	"workingTime_days" "enum_banks_working_time_days" NOT NULL,
	"working_time_building_label_en" varchar NOT NULL,
	"working_time_building_label_ru" varchar NOT NULL,
	"working_time_building_label_kz" varchar NOT NULL,
	"working_time_name_label_en" varchar NOT NULL,
	"working_time_name_label_ru" varchar NOT NULL,
	"working_time_name_label_kz" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "banks_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"service_list_id" integer
);

CREATE TABLE IF NOT EXISTS "terminals_working_time_cities" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"city" "enum_terminals_working_time_cities_city"
);

CREATE TABLE IF NOT EXISTS "terminals" (
	"id" serial PRIMARY KEY NOT NULL,
	"latitude" numeric NOT NULL,
	"longitude" numeric NOT NULL,
	"address_label_en" varchar NOT NULL,
	"address_label_ru" varchar NOT NULL,
	"address_label_kz" varchar NOT NULL,
	"workingTime_utc" "enum_terminals_working_time_utc" NOT NULL,
	"workingTime_startTime" "enum_terminals_working_time_start_time" NOT NULL,
	"workingTime_endTime" "enum_terminals_working_time_end_time" NOT NULL,
	"workingTime_days" "enum_terminals_working_time_days" NOT NULL,
	"working_time_building_label_en" varchar NOT NULL,
	"working_time_building_label_ru" varchar NOT NULL,
	"working_time_building_label_kz" varchar NOT NULL,
	"working_time_name_label_en" varchar NOT NULL,
	"working_time_name_label_ru" varchar NOT NULL,
	"working_time_name_label_kz" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "terminals_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"service_list_id" integer
);

CREATE TABLE IF NOT EXISTS "offices_cities" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"city" "enum_offices_cities_city"
);

CREATE TABLE IF NOT EXISTS "offices" (
	"id" serial PRIMARY KEY NOT NULL,
	"latitude" numeric NOT NULL,
	"longitude" numeric NOT NULL,
	"address_label_en" varchar NOT NULL,
	"address_label_ru" varchar NOT NULL,
	"address_label_kz" varchar NOT NULL,
	"workingTime_utc" "enum_offices_working_time_utc" NOT NULL,
	"workingTime_startTime" "enum_offices_working_time_start_time" NOT NULL,
	"workingTime_endTime" "enum_offices_working_time_end_time" NOT NULL,
	"workingTime_days" "enum_offices_working_time_days" NOT NULL,
	"working_time_building_label_en" varchar NOT NULL,
	"working_time_building_label_ru" varchar NOT NULL,
	"working_time_building_label_kz" varchar NOT NULL,
	"working_time_name_label_en" varchar NOT NULL,
	"working_time_name_label_ru" varchar NOT NULL,
	"working_time_name_label_kz" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "offices_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"service_list_id" integer
);

CREATE TABLE IF NOT EXISTS "service_list" (
	"id" serial PRIMARY KEY NOT NULL,
	"label_en" varchar NOT NULL,
	"label_ru" varchar NOT NULL,
	"label_kz" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "files" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "directors" (
	"id" serial PRIMARY KEY NOT NULL,
	"name_label_kz" varchar NOT NULL,
	"name_label_ru" varchar NOT NULL,
	"name_label_en" varchar NOT NULL,
	"position_label_kz" varchar NOT NULL,
	"position_label_ru" varchar NOT NULL,
	"position_label_en" varchar NOT NULL,
	"description_label_kz" varchar NOT NULL,
	"description_label_ru" varchar NOT NULL,
	"description_label_en" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "directors_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "employees" (
	"id" serial PRIMARY KEY NOT NULL,
	"name_label_kz" varchar NOT NULL,
	"name_label_ru" varchar NOT NULL,
	"name_label_en" varchar NOT NULL,
	"position_label_kz" varchar NOT NULL,
	"position_label_ru" varchar NOT NULL,
	"position_label_en" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "history" (
	"id" serial PRIMARY KEY NOT NULL,
	"title_label_ru" varchar NOT NULL,
	"title_label_en" varchar NOT NULL,
	"title_label_kz" varchar NOT NULL,
	"date" timestamp(3) with time zone NOT NULL,
	"description_label_ru" jsonb NOT NULL,
	"description_label_en" jsonb NOT NULL,
	"description_label_kz" jsonb NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "history_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_buttons_order_idx" ON "pages_blocks_hero_buttons" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_buttons_parent_id_idx" ON "pages_blocks_hero_buttons" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_order_idx" ON "pages_blocks_hero" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_path_idx" ON "pages_blocks_hero" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_items_characteristics_order_idx" ON "pages_blocks_item_types_items_characteristics" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_items_characteristics_parent_id_idx" ON "pages_blocks_item_types_items_characteristics" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_items_buttons_order_idx" ON "pages_blocks_item_types_items_buttons" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_items_buttons_parent_id_idx" ON "pages_blocks_item_types_items_buttons" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_items_order_idx" ON "pages_blocks_item_types_items" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_items_parent_id_idx" ON "pages_blocks_item_types_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_order_idx" ON "pages_blocks_item_types" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_parent_id_idx" ON "pages_blocks_item_types" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_item_types_path_idx" ON "pages_blocks_item_types" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_headers_order_idx" ON "pages_blocks_table_headers" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_headers_parent_id_idx" ON "pages_blocks_table_headers" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_rows_cells_order_idx" ON "pages_blocks_table_rows_cells" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_rows_cells_parent_id_idx" ON "pages_blocks_table_rows_cells" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_rows_order_idx" ON "pages_blocks_table_rows" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_rows_parent_id_idx" ON "pages_blocks_table_rows" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_order_idx" ON "pages_blocks_table" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_parent_id_idx" ON "pages_blocks_table" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_table_path_idx" ON "pages_blocks_table" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_details_coin_details_order_idx" ON "pages_blocks_details_coin_details" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_details_coin_details_parent_id_idx" ON "pages_blocks_details_coin_details" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_details_coin_order_idx" ON "pages_blocks_details_coin" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_details_coin_parent_id_idx" ON "pages_blocks_details_coin" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_details_coin_path_idx" ON "pages_blocks_details_coin" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_package_offers_packages_features_order_idx" ON "pages_blocks_package_offers_packages_features" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_package_offers_packages_features_parent_id_idx" ON "pages_blocks_package_offers_packages_features" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_package_offers_packages_order_idx" ON "pages_blocks_package_offers_packages" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_package_offers_packages_parent_id_idx" ON "pages_blocks_package_offers_packages" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_package_offers_order_idx" ON "pages_blocks_package_offers" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_package_offers_parent_id_idx" ON "pages_blocks_package_offers" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_package_offers_path_idx" ON "pages_blocks_package_offers" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_card_services_features_order_idx" ON "pages_blocks_services_card_services_features" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_card_services_features_parent_id_idx" ON "pages_blocks_services_card_services_features" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_card_services_order_idx" ON "pages_blocks_services_card_services" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_card_services_parent_id_idx" ON "pages_blocks_services_card_services" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_card_order_idx" ON "pages_blocks_services_card" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_card_parent_id_idx" ON "pages_blocks_services_card" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_services_card_path_idx" ON "pages_blocks_services_card" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_faqs_order_idx" ON "pages_blocks_faq_faqs" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_faqs_parent_id_idx" ON "pages_blocks_faq_faqs" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_order_idx" ON "pages_blocks_faq" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_path_idx" ON "pages_blocks_faq" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_list_order_idx" ON "pages_blocks_slider_hero_with_cards_block_list" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_list_parent_id_idx" ON "pages_blocks_slider_hero_with_cards_block_list" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_cards_order_idx" ON "pages_blocks_slider_hero_with_cards_block_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_cards_parent_id_idx" ON "pages_blocks_slider_hero_with_cards_block_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_order_idx" ON "pages_blocks_slider_hero_with_cards_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_parent_id_idx" ON "pages_blocks_slider_hero_with_cards_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_slider_hero_with_cards_block_path_idx" ON "pages_blocks_slider_hero_with_cards_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_page_header_order_idx" ON "pages_blocks_page_header" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_page_header_parent_id_idx" ON "pages_blocks_page_header" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_page_header_path_idx" ON "pages_blocks_page_header" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_posts_block_order_idx" ON "pages_blocks_posts_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_posts_block_parent_id_idx" ON "pages_blocks_posts_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_posts_block_path_idx" ON "pages_blocks_posts_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_product_cards_cards_order_idx" ON "pages_blocks_product_cards_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_product_cards_cards_parent_id_idx" ON "pages_blocks_product_cards_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_product_cards_order_idx" ON "pages_blocks_product_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_product_cards_parent_id_idx" ON "pages_blocks_product_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_product_cards_path_idx" ON "pages_blocks_product_cards" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_vertical_card_block_cards_subtitle_list_order_idx" ON "pages_blocks_vertical_card_block_cards_subtitle_list" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_vertical_card_block_cards_subtitle_list_parent_id_idx" ON "pages_blocks_vertical_card_block_cards_subtitle_list" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_vertical_card_block_cards_order_idx" ON "pages_blocks_vertical_card_block_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_vertical_card_block_cards_parent_id_idx" ON "pages_blocks_vertical_card_block_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_vertical_card_block_order_idx" ON "pages_blocks_vertical_card_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_vertical_card_block_parent_id_idx" ON "pages_blocks_vertical_card_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_vertical_card_block_path_idx" ON "pages_blocks_vertical_card_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_tabs_order_idx" ON "pages_blocks_form_tabs" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_tabs_parent_id_idx" ON "pages_blocks_form_tabs" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_order_idx" ON "pages_blocks_form" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_parent_id_idx" ON "pages_blocks_form" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_path_idx" ON "pages_blocks_form" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_horizontal_statistic_card_cards_order_idx" ON "pages_blocks_horizontal_statistic_card_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_horizontal_statistic_card_cards_parent_id_idx" ON "pages_blocks_horizontal_statistic_card_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_horizontal_statistic_card_order_idx" ON "pages_blocks_horizontal_statistic_card" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_horizontal_statistic_card_parent_id_idx" ON "pages_blocks_horizontal_statistic_card" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_horizontal_statistic_card_path_idx" ON "pages_blocks_horizontal_statistic_card" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_warning_card_order_idx" ON "pages_blocks_warning_card" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_warning_card_parent_id_idx" ON "pages_blocks_warning_card" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_warning_card_path_idx" ON "pages_blocks_warning_card" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_key_pointed_card_bullet_points_order_idx" ON "pages_blocks_key_pointed_card_bullet_points" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_key_pointed_card_bullet_points_parent_id_idx" ON "pages_blocks_key_pointed_card_bullet_points" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_key_pointed_card_order_idx" ON "pages_blocks_key_pointed_card" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_key_pointed_card_parent_id_idx" ON "pages_blocks_key_pointed_card" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_key_pointed_card_path_idx" ON "pages_blocks_key_pointed_card" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_description_with_richtext_order_idx" ON "pages_blocks_description_with_richtext" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_description_with_richtext_parent_id_idx" ON "pages_blocks_description_with_richtext" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_description_with_richtext_path_idx" ON "pages_blocks_description_with_richtext" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_guarantee_type_card_guarantees_details_order_idx" ON "pages_blocks_guarantee_type_card_guarantees_details" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_guarantee_type_card_guarantees_details_parent_id_idx" ON "pages_blocks_guarantee_type_card_guarantees_details" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_guarantee_type_card_guarantees_order_idx" ON "pages_blocks_guarantee_type_card_guarantees" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_guarantee_type_card_guarantees_parent_id_idx" ON "pages_blocks_guarantee_type_card_guarantees" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_guarantee_type_card_order_idx" ON "pages_blocks_guarantee_type_card" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_guarantee_type_card_parent_id_idx" ON "pages_blocks_guarantee_type_card" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_guarantee_type_card_path_idx" ON "pages_blocks_guarantee_type_card" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_card_rates_items_order_idx" ON "pages_blocks_tariff_card_rates_items" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_card_rates_items_parent_id_idx" ON "pages_blocks_tariff_card_rates_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_card_rates_order_idx" ON "pages_blocks_tariff_card_rates" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_card_rates_parent_id_idx" ON "pages_blocks_tariff_card_rates" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_card_order_idx" ON "pages_blocks_tariff_card" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_card_parent_id_idx" ON "pages_blocks_tariff_card" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_card_path_idx" ON "pages_blocks_tariff_card" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_center_cards_details_order_idx" ON "pages_blocks_contact_center_cards_details" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_center_cards_details_parent_id_idx" ON "pages_blocks_contact_center_cards_details" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_center_cards_order_idx" ON "pages_blocks_contact_center_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_center_cards_parent_id_idx" ON "pages_blocks_contact_center_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_center_order_idx" ON "pages_blocks_contact_center" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_center_parent_id_idx" ON "pages_blocks_contact_center" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_center_path_idx" ON "pages_blocks_contact_center" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_card_cards_details_order_idx" ON "pages_blocks_information_card_cards_details" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_card_cards_details_parent_id_idx" ON "pages_blocks_information_card_cards_details" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_card_cards_order_idx" ON "pages_blocks_information_card_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_card_cards_parent_id_idx" ON "pages_blocks_information_card_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_card_order_idx" ON "pages_blocks_information_card" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_card_parent_id_idx" ON "pages_blocks_information_card" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_card_path_idx" ON "pages_blocks_information_card" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_sections_details_order_idx" ON "pages_blocks_information_sections_details" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_sections_details_parent_id_idx" ON "pages_blocks_information_sections_details" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_sections_order_idx" ON "pages_blocks_information_sections" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_sections_parent_id_idx" ON "pages_blocks_information_sections" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_order_idx" ON "pages_blocks_information" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_parent_id_idx" ON "pages_blocks_information" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_information_path_idx" ON "pages_blocks_information" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_video_player_order_idx" ON "pages_blocks_video_player" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_video_player_parent_id_idx" ON "pages_blocks_video_player" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_video_player_path_idx" ON "pages_blocks_video_player" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_for_sale_order_idx" ON "pages_blocks_for_sale" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_for_sale_parent_id_idx" ON "pages_blocks_for_sale" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_for_sale_path_idx" ON "pages_blocks_for_sale" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_block_with_icon_cards_order_idx" ON "pages_blocks_card_block_with_icon_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_block_with_icon_cards_parent_id_idx" ON "pages_blocks_card_block_with_icon_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_block_with_icon_order_idx" ON "pages_blocks_card_block_with_icon" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_block_with_icon_parent_id_idx" ON "pages_blocks_card_block_with_icon" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_block_with_icon_path_idx" ON "pages_blocks_card_block_with_icon" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_partners_icons_order_idx" ON "pages_blocks_partners_icons" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_partners_icons_parent_id_idx" ON "pages_blocks_partners_icons" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_partners_order_idx" ON "pages_blocks_partners" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_partners_parent_id_idx" ON "pages_blocks_partners" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_partners_path_idx" ON "pages_blocks_partners" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_privilege_cards_order_idx" ON "pages_blocks_service_privilege_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_privilege_cards_parent_id_idx" ON "pages_blocks_service_privilege_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_privilege_order_idx" ON "pages_blocks_service_privilege" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_privilege_parent_id_idx" ON "pages_blocks_service_privilege" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_privilege_path_idx" ON "pages_blocks_service_privilege" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_slider_list_order_idx" ON "pages_blocks_private_slider_list" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_slider_list_parent_id_idx" ON "pages_blocks_private_slider_list" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_slider_order_idx" ON "pages_blocks_private_slider" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_slider_parent_id_idx" ON "pages_blocks_private_slider" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_slider_path_idx" ON "pages_blocks_private_slider" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_additional_bonus_section_order_idx" ON "pages_blocks_additional_bonus_section" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_additional_bonus_section_parent_id_idx" ON "pages_blocks_additional_bonus_section" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_additional_bonus_section_path_idx" ON "pages_blocks_additional_bonus_section" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_bonus_section_order_idx" ON "pages_blocks_bonus_section" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_bonus_section_parent_id_idx" ON "pages_blocks_bonus_section" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_bonus_section_path_idx" ON "pages_blocks_bonus_section" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_category_bonus_section_order_idx" ON "pages_blocks_category_bonus_section" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_category_bonus_section_parent_id_idx" ON "pages_blocks_category_bonus_section" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_category_bonus_section_path_idx" ON "pages_blocks_category_bonus_section" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_digital_card_section_order_idx" ON "pages_blocks_digital_card_section" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_digital_card_section_parent_id_idx" ON "pages_blocks_digital_card_section" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_digital_card_section_path_idx" ON "pages_blocks_digital_card_section" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_insurance_section_order_idx" ON "pages_blocks_insurance_section" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_insurance_section_parent_id_idx" ON "pages_blocks_insurance_section" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_insurance_section_path_idx" ON "pages_blocks_insurance_section" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_promotions_section_order_idx" ON "pages_blocks_promotions_section" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_promotions_section_parent_id_idx" ON "pages_blocks_promotions_section" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_promotions_section_path_idx" ON "pages_blocks_promotions_section" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_limits_section_description_list_order_idx" ON "pages_blocks_tariff_limits_section_description_list" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_limits_section_description_list_parent_id_idx" ON "pages_blocks_tariff_limits_section_description_list" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_limits_section_chart_bars_order_idx" ON "pages_blocks_tariff_limits_section_chart_bars" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_limits_section_chart_bars_parent_id_idx" ON "pages_blocks_tariff_limits_section_chart_bars" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_limits_section_order_idx" ON "pages_blocks_tariff_limits_section" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_limits_section_parent_id_idx" ON "pages_blocks_tariff_limits_section" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_tariff_limits_section_path_idx" ON "pages_blocks_tariff_limits_section" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_bank_location_order_idx" ON "pages_blocks_bank_location" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_bank_location_parent_id_idx" ON "pages_blocks_bank_location" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_bank_location_path_idx" ON "pages_blocks_bank_location" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_packages_cards_order_idx" ON "pages_blocks_service_packages_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_packages_cards_parent_id_idx" ON "pages_blocks_service_packages_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_packages_order_idx" ON "pages_blocks_service_packages" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_packages_parent_id_idx" ON "pages_blocks_service_packages" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_service_packages_path_idx" ON "pages_blocks_service_packages" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_board_of_directors_order_idx" ON "pages_blocks_board_of_directors" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_board_of_directors_parent_id_idx" ON "pages_blocks_board_of_directors" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_board_of_directors_path_idx" ON "pages_blocks_board_of_directors" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_history_block_order_idx" ON "pages_blocks_history_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_history_block_parent_id_idx" ON "pages_blocks_history_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_history_block_path_idx" ON "pages_blocks_history_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_banner_card_order_idx" ON "pages_blocks_contact_banner_card" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_banner_card_parent_id_idx" ON "pages_blocks_contact_banner_card" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_contact_banner_card_path_idx" ON "pages_blocks_contact_banner_card" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_credit_cards_credit_cards_characteristics_order_idx" ON "pages_blocks_private_credit_cards_credit_cards_characteristics" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_credit_cards_credit_cards_characteristics_parent_id_idx" ON "pages_blocks_private_credit_cards_credit_cards_characteristics" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_credit_cards_credit_cards_order_idx" ON "pages_blocks_private_credit_cards_credit_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_credit_cards_credit_cards_parent_id_idx" ON "pages_blocks_private_credit_cards_credit_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_credit_cards_order_idx" ON "pages_blocks_private_credit_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_credit_cards_parent_id_idx" ON "pages_blocks_private_credit_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_private_credit_cards_path_idx" ON "pages_blocks_private_credit_cards" ("_path");
CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" ("created_at");
CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" ("order");
CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" ("path");
CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "icons_created_at_idx" ON "icons" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "icons_filename_idx" ON "icons" ("filename");
CREATE INDEX IF NOT EXISTS "secondary_menu_links_order_idx" ON "secondary_menu_links" ("_order");
CREATE INDEX IF NOT EXISTS "secondary_menu_links_parent_id_idx" ON "secondary_menu_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "secondary_menu_created_at_idx" ON "secondary_menu" ("created_at");
CREATE INDEX IF NOT EXISTS "secondary_menu_rels_order_idx" ON "secondary_menu_rels" ("order");
CREATE INDEX IF NOT EXISTS "secondary_menu_rels_parent_idx" ON "secondary_menu_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "secondary_menu_rels_path_idx" ON "secondary_menu_rels" ("path");
CREATE INDEX IF NOT EXISTS "contacts_created_at_idx" ON "contacts" ("created_at");
CREATE INDEX IF NOT EXISTS "contacts_rels_order_idx" ON "contacts_rels" ("order");
CREATE INDEX IF NOT EXISTS "contacts_rels_parent_idx" ON "contacts_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "contacts_rels_path_idx" ON "contacts_rels" ("path");
CREATE INDEX IF NOT EXISTS "menu_items_menu_list_menu_items_links_order_idx" ON "menu_items_menu_list_menu_items_links" ("_order");
CREATE INDEX IF NOT EXISTS "menu_items_menu_list_menu_items_links_parent_id_idx" ON "menu_items_menu_list_menu_items_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "menu_items_menu_list_menu_items_add_menu_links_order_idx" ON "menu_items_menu_list_menu_items_add_menu_links" ("_order");
CREATE INDEX IF NOT EXISTS "menu_items_menu_list_menu_items_add_menu_links_parent_id_idx" ON "menu_items_menu_list_menu_items_add_menu_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "menu_items_menu_list_order_idx" ON "menu_items_menu_list" ("_order");
CREATE INDEX IF NOT EXISTS "menu_items_menu_list_parent_id_idx" ON "menu_items_menu_list" ("_parent_id");
CREATE INDEX IF NOT EXISTS "menu_items_created_at_idx" ON "menu_items" ("created_at");
CREATE INDEX IF NOT EXISTS "menu_items_rels_order_idx" ON "menu_items_rels" ("order");
CREATE INDEX IF NOT EXISTS "menu_items_rels_parent_idx" ON "menu_items_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "menu_items_rels_path_idx" ON "menu_items_rels" ("path");
CREATE INDEX IF NOT EXISTS "posts_content_array_order_idx" ON "posts_content_array" ("_order");
CREATE INDEX IF NOT EXISTS "posts_content_array_parent_id_idx" ON "posts_content_array" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" ("created_at");
CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" ("order");
CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" ("path");
CREATE INDEX IF NOT EXISTS "post_categories_created_at_idx" ON "post_categories" ("created_at");
CREATE INDEX IF NOT EXISTS "for_sale_images_order_idx" ON "for_sale_images" ("_order");
CREATE INDEX IF NOT EXISTS "for_sale_images_parent_id_idx" ON "for_sale_images" ("_parent_id");
CREATE INDEX IF NOT EXISTS "for_sale_info_order_idx" ON "for_sale_info" ("_order");
CREATE INDEX IF NOT EXISTS "for_sale_info_parent_id_idx" ON "for_sale_info" ("_parent_id");
CREATE INDEX IF NOT EXISTS "for_sale_created_at_idx" ON "for_sale" ("created_at");
CREATE INDEX IF NOT EXISTS "for_sale_rels_order_idx" ON "for_sale_rels" ("order");
CREATE INDEX IF NOT EXISTS "for_sale_rels_parent_idx" ON "for_sale_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "for_sale_rels_path_idx" ON "for_sale_rels" ("path");
CREATE INDEX IF NOT EXISTS "filters_created_at_idx" ON "filters" ("created_at");
CREATE INDEX IF NOT EXISTS "debit_card_categories_created_at_idx" ON "debit_card_categories" ("created_at");
CREATE INDEX IF NOT EXISTS "compare_cards_horizontal_t_h_order_idx" ON "compare_cards_horizontal_t_h" ("_order");
CREATE INDEX IF NOT EXISTS "compare_cards_horizontal_t_h_parent_id_idx" ON "compare_cards_horizontal_t_h" ("_parent_id");
CREATE INDEX IF NOT EXISTS "compare_cards_sections_rows_values_order_idx" ON "compare_cards_sections_rows_values" ("_order");
CREATE INDEX IF NOT EXISTS "compare_cards_sections_rows_values_parent_id_idx" ON "compare_cards_sections_rows_values" ("_parent_id");
CREATE INDEX IF NOT EXISTS "compare_cards_sections_rows_order_idx" ON "compare_cards_sections_rows" ("_order");
CREATE INDEX IF NOT EXISTS "compare_cards_sections_rows_parent_id_idx" ON "compare_cards_sections_rows" ("_parent_id");
CREATE INDEX IF NOT EXISTS "compare_cards_sections_order_idx" ON "compare_cards_sections" ("_order");
CREATE INDEX IF NOT EXISTS "compare_cards_sections_parent_id_idx" ON "compare_cards_sections" ("_parent_id");
CREATE INDEX IF NOT EXISTS "compare_cards_created_at_idx" ON "compare_cards" ("created_at");
CREATE INDEX IF NOT EXISTS "compare_cards_rels_order_idx" ON "compare_cards_rels" ("order");
CREATE INDEX IF NOT EXISTS "compare_cards_rels_parent_idx" ON "compare_cards_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "compare_cards_rels_path_idx" ON "compare_cards_rels" ("path");
CREATE INDEX IF NOT EXISTS "banks_cities_order_idx" ON "banks_cities" ("_order");
CREATE INDEX IF NOT EXISTS "banks_cities_parent_id_idx" ON "banks_cities" ("_parent_id");
CREATE INDEX IF NOT EXISTS "banks_created_at_idx" ON "banks" ("created_at");
CREATE INDEX IF NOT EXISTS "banks_rels_order_idx" ON "banks_rels" ("order");
CREATE INDEX IF NOT EXISTS "banks_rels_parent_idx" ON "banks_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "banks_rels_path_idx" ON "banks_rels" ("path");
CREATE INDEX IF NOT EXISTS "terminals_working_time_cities_order_idx" ON "terminals_working_time_cities" ("_order");
CREATE INDEX IF NOT EXISTS "terminals_working_time_cities_parent_id_idx" ON "terminals_working_time_cities" ("_parent_id");
CREATE INDEX IF NOT EXISTS "terminals_created_at_idx" ON "terminals" ("created_at");
CREATE INDEX IF NOT EXISTS "terminals_rels_order_idx" ON "terminals_rels" ("order");
CREATE INDEX IF NOT EXISTS "terminals_rels_parent_idx" ON "terminals_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "terminals_rels_path_idx" ON "terminals_rels" ("path");
CREATE INDEX IF NOT EXISTS "offices_cities_order_idx" ON "offices_cities" ("_order");
CREATE INDEX IF NOT EXISTS "offices_cities_parent_id_idx" ON "offices_cities" ("_parent_id");
CREATE INDEX IF NOT EXISTS "offices_created_at_idx" ON "offices" ("created_at");
CREATE INDEX IF NOT EXISTS "offices_rels_order_idx" ON "offices_rels" ("order");
CREATE INDEX IF NOT EXISTS "offices_rels_parent_idx" ON "offices_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "offices_rels_path_idx" ON "offices_rels" ("path");
CREATE INDEX IF NOT EXISTS "service_list_created_at_idx" ON "service_list" ("created_at");
CREATE INDEX IF NOT EXISTS "files_created_at_idx" ON "files" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "files_filename_idx" ON "files" ("filename");
CREATE INDEX IF NOT EXISTS "directors_created_at_idx" ON "directors" ("created_at");
CREATE INDEX IF NOT EXISTS "directors_rels_order_idx" ON "directors_rels" ("order");
CREATE INDEX IF NOT EXISTS "directors_rels_parent_idx" ON "directors_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "directors_rels_path_idx" ON "directors_rels" ("path");
CREATE INDEX IF NOT EXISTS "employees_created_at_idx" ON "employees" ("created_at");
CREATE INDEX IF NOT EXISTS "history_created_at_idx" ON "history" ("created_at");
CREATE INDEX IF NOT EXISTS "history_rels_order_idx" ON "history_rels" ("order");
CREATE INDEX IF NOT EXISTS "history_rels_parent_idx" ON "history_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "history_rels_path_idx" ON "history_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_buttons" ADD CONSTRAINT "pages_blocks_hero_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_item_types_items_characteristics" ADD CONSTRAINT "pages_blocks_item_types_items_characteristics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_item_types_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_item_types_items_buttons" ADD CONSTRAINT "pages_blocks_item_types_items_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_item_types_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_item_types_items" ADD CONSTRAINT "pages_blocks_item_types_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_item_types"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_item_types" ADD CONSTRAINT "pages_blocks_item_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_table_headers" ADD CONSTRAINT "pages_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_table_rows_cells" ADD CONSTRAINT "pages_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_table_rows" ADD CONSTRAINT "pages_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_table" ADD CONSTRAINT "pages_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_details_coin_details" ADD CONSTRAINT "pages_blocks_details_coin_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_details_coin"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_details_coin" ADD CONSTRAINT "pages_blocks_details_coin_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_package_offers_packages_features" ADD CONSTRAINT "pages_blocks_package_offers_packages_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_package_offers_packages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_package_offers_packages" ADD CONSTRAINT "pages_blocks_package_offers_packages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_package_offers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_package_offers" ADD CONSTRAINT "pages_blocks_package_offers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_services_card_services_features" ADD CONSTRAINT "pages_blocks_services_card_services_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_services_card_services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_services_card_services" ADD CONSTRAINT "pages_blocks_services_card_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_services_card"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_services_card" ADD CONSTRAINT "pages_blocks_services_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_faqs" ADD CONSTRAINT "pages_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_slider_hero_with_cards_block_list" ADD CONSTRAINT "pages_blocks_slider_hero_with_cards_block_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_slider_hero_with_cards_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_slider_hero_with_cards_block_cards" ADD CONSTRAINT "pages_blocks_slider_hero_with_cards_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_slider_hero_with_cards_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_slider_hero_with_cards_block" ADD CONSTRAINT "pages_blocks_slider_hero_with_cards_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_page_header" ADD CONSTRAINT "pages_blocks_page_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_posts_block" ADD CONSTRAINT "pages_blocks_posts_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_product_cards_cards" ADD CONSTRAINT "pages_blocks_product_cards_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_product_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_product_cards" ADD CONSTRAINT "pages_blocks_product_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_vertical_card_block_cards_subtitle_list" ADD CONSTRAINT "pages_blocks_vertical_card_block_cards_subtitle_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_vertical_card_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_vertical_card_block_cards" ADD CONSTRAINT "pages_blocks_vertical_card_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_vertical_card_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_vertical_card_block" ADD CONSTRAINT "pages_blocks_vertical_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form_tabs" ADD CONSTRAINT "pages_blocks_form_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form" ADD CONSTRAINT "pages_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_horizontal_statistic_card_cards" ADD CONSTRAINT "pages_blocks_horizontal_statistic_card_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_horizontal_statistic_card"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_horizontal_statistic_card" ADD CONSTRAINT "pages_blocks_horizontal_statistic_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_warning_card" ADD CONSTRAINT "pages_blocks_warning_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_key_pointed_card_bullet_points" ADD CONSTRAINT "pages_blocks_key_pointed_card_bullet_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_key_pointed_card"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_key_pointed_card" ADD CONSTRAINT "pages_blocks_key_pointed_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_description_with_richtext" ADD CONSTRAINT "pages_blocks_description_with_richtext_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_guarantee_type_card_guarantees_details" ADD CONSTRAINT "pages_blocks_guarantee_type_card_guarantees_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_guarantee_type_card_guarantees"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_guarantee_type_card_guarantees" ADD CONSTRAINT "pages_blocks_guarantee_type_card_guarantees_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_guarantee_type_card"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_guarantee_type_card" ADD CONSTRAINT "pages_blocks_guarantee_type_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_tariff_card_rates_items" ADD CONSTRAINT "pages_blocks_tariff_card_rates_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_tariff_card_rates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_tariff_card_rates" ADD CONSTRAINT "pages_blocks_tariff_card_rates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_tariff_card"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_tariff_card" ADD CONSTRAINT "pages_blocks_tariff_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_contact_center_cards_details" ADD CONSTRAINT "pages_blocks_contact_center_cards_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_contact_center_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_contact_center_cards" ADD CONSTRAINT "pages_blocks_contact_center_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_contact_center"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_contact_center" ADD CONSTRAINT "pages_blocks_contact_center_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_information_card_cards_details" ADD CONSTRAINT "pages_blocks_information_card_cards_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_information_card_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_information_card_cards" ADD CONSTRAINT "pages_blocks_information_card_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_information_card"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_information_card" ADD CONSTRAINT "pages_blocks_information_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_information_sections_details" ADD CONSTRAINT "pages_blocks_information_sections_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_information_sections"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_information_sections" ADD CONSTRAINT "pages_blocks_information_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_information"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_information" ADD CONSTRAINT "pages_blocks_information_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_video_player" ADD CONSTRAINT "pages_blocks_video_player_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_for_sale" ADD CONSTRAINT "pages_blocks_for_sale_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_block_with_icon_cards" ADD CONSTRAINT "pages_blocks_card_block_with_icon_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_block_with_icon"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_block_with_icon" ADD CONSTRAINT "pages_blocks_card_block_with_icon_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_partners_icons" ADD CONSTRAINT "pages_blocks_partners_icons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_partners"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_partners" ADD CONSTRAINT "pages_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_service_privilege_cards" ADD CONSTRAINT "pages_blocks_service_privilege_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_service_privilege"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_service_privilege" ADD CONSTRAINT "pages_blocks_service_privilege_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_private_slider_list" ADD CONSTRAINT "pages_blocks_private_slider_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_private_slider"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_private_slider" ADD CONSTRAINT "pages_blocks_private_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_additional_bonus_section" ADD CONSTRAINT "pages_blocks_additional_bonus_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_bonus_section" ADD CONSTRAINT "pages_blocks_bonus_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_category_bonus_section" ADD CONSTRAINT "pages_blocks_category_bonus_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_digital_card_section" ADD CONSTRAINT "pages_blocks_digital_card_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_insurance_section" ADD CONSTRAINT "pages_blocks_insurance_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_promotions_section" ADD CONSTRAINT "pages_blocks_promotions_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_tariff_limits_section_description_list" ADD CONSTRAINT "pages_blocks_tariff_limits_section_description_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_tariff_limits_section"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_tariff_limits_section_chart_bars" ADD CONSTRAINT "pages_blocks_tariff_limits_section_chart_bars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_tariff_limits_section"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_tariff_limits_section" ADD CONSTRAINT "pages_blocks_tariff_limits_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_bank_location" ADD CONSTRAINT "pages_blocks_bank_location_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_service_packages_cards" ADD CONSTRAINT "pages_blocks_service_packages_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_service_packages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_service_packages" ADD CONSTRAINT "pages_blocks_service_packages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_board_of_directors" ADD CONSTRAINT "pages_blocks_board_of_directors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_history_block" ADD CONSTRAINT "pages_blocks_history_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_contact_banner_card" ADD CONSTRAINT "pages_blocks_contact_banner_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_private_credit_cards_credit_cards_characteristics" ADD CONSTRAINT "pages_blocks_private_credit_cards_credit_cards_characteristics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_private_credit_cards_credit_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_private_credit_cards_credit_cards" ADD CONSTRAINT "pages_blocks_private_credit_cards_credit_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_private_credit_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_private_credit_cards" ADD CONSTRAINT "pages_blocks_private_credit_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_icons_fk" FOREIGN KEY ("icons_id") REFERENCES "icons"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "secondary_menu_links" ADD CONSTRAINT "secondary_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "secondary_menu"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "secondary_menu_rels" ADD CONSTRAINT "secondary_menu_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "secondary_menu"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "secondary_menu_rels" ADD CONSTRAINT "secondary_menu_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "contacts_rels" ADD CONSTRAINT "contacts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "contacts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "contacts_rels" ADD CONSTRAINT "contacts_rels_icons_fk" FOREIGN KEY ("icons_id") REFERENCES "icons"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "menu_items_menu_list_menu_items_links" ADD CONSTRAINT "menu_items_menu_list_menu_items_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "menu_items_menu_list"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "menu_items_menu_list_menu_items_add_menu_links" ADD CONSTRAINT "menu_items_menu_list_menu_items_add_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "menu_items_menu_list"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "menu_items_menu_list" ADD CONSTRAINT "menu_items_menu_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "menu_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "menu_items_rels" ADD CONSTRAINT "menu_items_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "menu_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "menu_items_rels" ADD CONSTRAINT "menu_items_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_content_array" ADD CONSTRAINT "posts_content_array_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_post_categories_fk" FOREIGN KEY ("post_categories_id") REFERENCES "post_categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "for_sale_images" ADD CONSTRAINT "for_sale_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "for_sale"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "for_sale_info" ADD CONSTRAINT "for_sale_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "for_sale"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "for_sale_rels" ADD CONSTRAINT "for_sale_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "for_sale"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "for_sale_rels" ADD CONSTRAINT "for_sale_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "for_sale_rels" ADD CONSTRAINT "for_sale_rels_filters_fk" FOREIGN KEY ("filters_id") REFERENCES "filters"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "compare_cards_horizontal_t_h" ADD CONSTRAINT "compare_cards_horizontal_t_h_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "compare_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "compare_cards_sections_rows_values" ADD CONSTRAINT "compare_cards_sections_rows_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "compare_cards_sections_rows"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "compare_cards_sections_rows" ADD CONSTRAINT "compare_cards_sections_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "compare_cards_sections"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "compare_cards_sections" ADD CONSTRAINT "compare_cards_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "compare_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "compare_cards_rels" ADD CONSTRAINT "compare_cards_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "compare_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "compare_cards_rels" ADD CONSTRAINT "compare_cards_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "banks_cities" ADD CONSTRAINT "banks_cities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "banks"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "banks_rels" ADD CONSTRAINT "banks_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "banks"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "banks_rels" ADD CONSTRAINT "banks_rels_service_list_fk" FOREIGN KEY ("service_list_id") REFERENCES "service_list"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "terminals_working_time_cities" ADD CONSTRAINT "terminals_working_time_cities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "terminals"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "terminals_rels" ADD CONSTRAINT "terminals_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "terminals"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "terminals_rels" ADD CONSTRAINT "terminals_rels_service_list_fk" FOREIGN KEY ("service_list_id") REFERENCES "service_list"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "offices_cities" ADD CONSTRAINT "offices_cities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "offices"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "offices_rels" ADD CONSTRAINT "offices_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "offices"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "offices_rels" ADD CONSTRAINT "offices_rels_service_list_fk" FOREIGN KEY ("service_list_id") REFERENCES "service_list"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "directors_rels" ADD CONSTRAINT "directors_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "directors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "directors_rels" ADD CONSTRAINT "directors_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "history_rels" ADD CONSTRAINT "history_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "history"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "history_rels" ADD CONSTRAINT "history_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "users";
DROP TABLE "pages_blocks_hero_buttons";
DROP TABLE "pages_blocks_hero";
DROP TABLE "pages_blocks_item_types_items_characteristics";
DROP TABLE "pages_blocks_item_types_items_buttons";
DROP TABLE "pages_blocks_item_types_items";
DROP TABLE "pages_blocks_item_types";
DROP TABLE "pages_blocks_table_headers";
DROP TABLE "pages_blocks_table_rows_cells";
DROP TABLE "pages_blocks_table_rows";
DROP TABLE "pages_blocks_table";
DROP TABLE "pages_blocks_details_coin_details";
DROP TABLE "pages_blocks_details_coin";
DROP TABLE "pages_blocks_package_offers_packages_features";
DROP TABLE "pages_blocks_package_offers_packages";
DROP TABLE "pages_blocks_package_offers";
DROP TABLE "pages_blocks_services_card_services_features";
DROP TABLE "pages_blocks_services_card_services";
DROP TABLE "pages_blocks_services_card";
DROP TABLE "pages_blocks_faq_faqs";
DROP TABLE "pages_blocks_faq";
DROP TABLE "pages_blocks_slider_hero_with_cards_block_list";
DROP TABLE "pages_blocks_slider_hero_with_cards_block_cards";
DROP TABLE "pages_blocks_slider_hero_with_cards_block";
DROP TABLE "pages_blocks_page_header";
DROP TABLE "pages_blocks_posts_block";
DROP TABLE "pages_blocks_product_cards_cards";
DROP TABLE "pages_blocks_product_cards";
DROP TABLE "pages_blocks_vertical_card_block_cards_subtitle_list";
DROP TABLE "pages_blocks_vertical_card_block_cards";
DROP TABLE "pages_blocks_vertical_card_block";
DROP TABLE "pages_blocks_form_tabs";
DROP TABLE "pages_blocks_form";
DROP TABLE "pages_blocks_horizontal_statistic_card_cards";
DROP TABLE "pages_blocks_horizontal_statistic_card";
DROP TABLE "pages_blocks_warning_card";
DROP TABLE "pages_blocks_key_pointed_card_bullet_points";
DROP TABLE "pages_blocks_key_pointed_card";
DROP TABLE "pages_blocks_description_with_richtext";
DROP TABLE "pages_blocks_guarantee_type_card_guarantees_details";
DROP TABLE "pages_blocks_guarantee_type_card_guarantees";
DROP TABLE "pages_blocks_guarantee_type_card";
DROP TABLE "pages_blocks_tariff_card_rates_items";
DROP TABLE "pages_blocks_tariff_card_rates";
DROP TABLE "pages_blocks_tariff_card";
DROP TABLE "pages_blocks_contact_center_cards_details";
DROP TABLE "pages_blocks_contact_center_cards";
DROP TABLE "pages_blocks_contact_center";
DROP TABLE "pages_blocks_information_card_cards_details";
DROP TABLE "pages_blocks_information_card_cards";
DROP TABLE "pages_blocks_information_card";
DROP TABLE "pages_blocks_information_sections_details";
DROP TABLE "pages_blocks_information_sections";
DROP TABLE "pages_blocks_information";
DROP TABLE "pages_blocks_video_player";
DROP TABLE "pages_blocks_for_sale";
DROP TABLE "pages_blocks_card_block_with_icon_cards";
DROP TABLE "pages_blocks_card_block_with_icon";
DROP TABLE "pages_blocks_partners_icons";
DROP TABLE "pages_blocks_partners";
DROP TABLE "pages_blocks_service_privilege_cards";
DROP TABLE "pages_blocks_service_privilege";
DROP TABLE "pages_blocks_private_slider_list";
DROP TABLE "pages_blocks_private_slider";
DROP TABLE "pages_blocks_additional_bonus_section";
DROP TABLE "pages_blocks_bonus_section";
DROP TABLE "pages_blocks_category_bonus_section";
DROP TABLE "pages_blocks_digital_card_section";
DROP TABLE "pages_blocks_insurance_section";
DROP TABLE "pages_blocks_promotions_section";
DROP TABLE "pages_blocks_tariff_limits_section_description_list";
DROP TABLE "pages_blocks_tariff_limits_section_chart_bars";
DROP TABLE "pages_blocks_tariff_limits_section";
DROP TABLE "pages_blocks_bank_location";
DROP TABLE "pages_blocks_service_packages_cards";
DROP TABLE "pages_blocks_service_packages";
DROP TABLE "pages_blocks_board_of_directors";
DROP TABLE "pages_blocks_history_block";
DROP TABLE "pages_blocks_contact_banner_card";
DROP TABLE "pages_blocks_private_credit_cards_credit_cards_characteristics";
DROP TABLE "pages_blocks_private_credit_cards_credit_cards";
DROP TABLE "pages_blocks_private_credit_cards";
DROP TABLE "pages";
DROP TABLE "pages_rels";
DROP TABLE "media";
DROP TABLE "icons";
DROP TABLE "secondary_menu_links";
DROP TABLE "secondary_menu";
DROP TABLE "secondary_menu_rels";
DROP TABLE "contacts";
DROP TABLE "contacts_rels";
DROP TABLE "menu_items_menu_list_menu_items_links";
DROP TABLE "menu_items_menu_list_menu_items_add_menu_links";
DROP TABLE "menu_items_menu_list";
DROP TABLE "menu_items";
DROP TABLE "menu_items_rels";
DROP TABLE "posts_content_array";
DROP TABLE "posts";
DROP TABLE "posts_rels";
DROP TABLE "post_categories";
DROP TABLE "for_sale_images";
DROP TABLE "for_sale_info";
DROP TABLE "for_sale";
DROP TABLE "for_sale_rels";
DROP TABLE "filters";
DROP TABLE "debit_card_categories";
DROP TABLE "compare_cards_horizontal_t_h";
DROP TABLE "compare_cards_sections_rows_values";
DROP TABLE "compare_cards_sections_rows";
DROP TABLE "compare_cards_sections";
DROP TABLE "compare_cards";
DROP TABLE "compare_cards_rels";
DROP TABLE "banks_cities";
DROP TABLE "banks";
DROP TABLE "banks_rels";
DROP TABLE "terminals_working_time_cities";
DROP TABLE "terminals";
DROP TABLE "terminals_rels";
DROP TABLE "offices_cities";
DROP TABLE "offices";
DROP TABLE "offices_rels";
DROP TABLE "service_list";
DROP TABLE "files";
DROP TABLE "directors";
DROP TABLE "directors_rels";
DROP TABLE "employees";
DROP TABLE "history";
DROP TABLE "history_rels";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";`);

};
