import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.GETFORM_SLUG_URL': JSON.stringify(process.env.GETFORM_SLUG_URL),
  },
});
