-- Migration: Add image support to news_articles table
-- Date: 2026-04-09

USE audoe_forms;

-- Add image column if it doesn't exist
ALTER TABLE news_articles ADD COLUMN image VARCHAR(255) DEFAULT NULL AFTER emoji;

-- Create indexes for better query performance
ALTER TABLE news_articles ADD KEY idx_news_image (image);
