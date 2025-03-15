<script>
  import { createEventDispatcher } from 'svelte';
  import { Search, LogOut } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { clearToken } from '../../services/api/store';

  export let title = "Product Catalog";
  const dispatch = createEventDispatcher();

  function handleLogout() {
    clearToken();
    goto('/auth/login');
  }

  function handleInput(event) {
    // alert(event.target.value)
    dispatch('search', event.target.value);
  }
</script>

<header class="flex justify-between items-center mb-8">
  <h2 class="text-2xl font-bold">{title}</h2>
  <div class="flex items-center space-x-4">
    <div class="relative">
      <input
        type="text"
        placeholder="Search products..."
        class="pl-10 pr-4 py-2 w-64 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        on:input={handleInput}
      />
      <Search class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
    </div>

    <button class="p-2 hover:bg-gray-800 rounded-lg" on:click={handleLogout}>
      <LogOut class="w-6 h-6" />
    </button>
  </div>
</header>
