import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
  // Do not inject secret API keys into the client bundle. If you need a
  // server-side AI integration, create a backend endpoint and set
  // VITE_AI_ENDPOINT to point to it. The frontend should call that
  // endpoint instead of holding secrets.
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
