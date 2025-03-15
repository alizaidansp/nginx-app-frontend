import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
	plugins: [sveltekit(),    tailwindcss()],  
	server: {
		allowedHosts: true, // Allow localhost
		port: 5173,

	  }
});
