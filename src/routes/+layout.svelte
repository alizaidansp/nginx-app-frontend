<script>
  import Sidebar from '../lib/components/Sidebar.svelte';
  import "../app.css";
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  // Routes where the sidebar should be hidden
  const hiddenRoutes = ['/auth/login', '/auth/join'];

  // Check if the current route matches any in the array
  const hideSideBar = derived(page, ($page) => hiddenRoutes.includes($page.url.pathname));
</script>

<div class="bg-gray-900 text-gray-100 min-h-screen flex">
  <!-- Debug output -->
  <!-- <pre class="text-red-500 p-4">hideSideBar: {$hideSideBar}</pre> -->

  {#if !$hideSideBar}
    <Sidebar />
  {/if}

  <main class="flex-1 p-8">
    <slot />
  </main>
</div>
