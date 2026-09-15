import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config();

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

// configDotenv().parsed
export default defineConfig({
  schema: './src/lib/server/db/schema.ts', // Your schema file path
  out: './drizzle', // Your migrations folder
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true
});
