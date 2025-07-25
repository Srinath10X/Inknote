import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./orm",
  schema: "./lib/drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
