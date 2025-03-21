import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_mDu8ehy3pGUE@ep-jolly-water-a55gzqi8-pooler.us-east-2.aws.neon.tech/my-interior-bud?sslmode=require",
  },
});
