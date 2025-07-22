-- Type: account_type

-- DROP TYPE IF EXISTS public.account_type;

-- CREATE TYPE public.account_type AS ENUM
--     ('Client', 'Employee', 'Admin');

-- ALTER TYPE public.account_type
--     OWNER TO Bassey;

-- -- User table
-- CREATE TABLE public.users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50) UNIQUE NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     password_hash VARCHAR(255) NOT NULL,
--     account_type public.account_type NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Pictures table
-- CREATE TABLE public.pictures (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES public.users(id) ON DELETE CASCADE,
--     url TEXT NOT NULL,
--     description TEXT,
--     uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Documents table
-- CREATE TABLE public.documents (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES public.users(id) ON DELETE CASCADE,
--     url TEXT NOT NULL,
--     description TEXT,
--     uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Events table
-- CREATE TABLE public.events (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES public.users(id) ON DELETE CASCADE,
--     title VARCHAR(100) NOT NULL,
--     description TEXT,
--     event_date TIMESTAMP NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

