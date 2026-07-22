CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NOT UNIQUE,
    password_hash TEXT,
    google_id VARCHAR(255) UNIQUE,
    role VARCHAR(20) NOT NULL DEFAULT 'USER'
      CHECK (ROLE IN ('USER', ADMIN)),
    created_at TIMESTAMPS NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPS NOT NULL DEFAULT NOW()

)