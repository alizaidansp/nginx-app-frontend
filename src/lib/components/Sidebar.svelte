<script>
  import { Home, Database, ClipboardList, BarChart3, LayoutDashboard } from 'lucide-svelte';
  import { page } from '$app/stores';
  
  const links = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/catalog', icon: Database, label: 'Catalog' },
    { href: '/orders', icon: ClipboardList, label: 'Orders' },
    { href: '/reports', icon: BarChart3, label: 'Reports' },
    { href: '/user/dashboard', icon: LayoutDashboard, label: 'Dashboard' }
  ];

  let currentPath = '';
  $: page.subscribe(({ url }) => {
    currentPath = url.pathname;
  });

  const isActive = (href) => href === currentPath;
</script>

<aside class="w-64 bg-gray-800 p-6 flex flex-col">
  <div class="mb-10">
    <h1 class="text-2xl font-bold text-white">NGINX - CATALOG</h1>
  </div>

  <nav class="space-y-2 flex-1">
    {#each links as { href, icon: Icon, label }}
      <a
        href={href}
        class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700"
        class:shadow-lg={isActive(href)}
      >
        <Icon class="w-6 h-6" />
        <span>{label}</span>
      </a>
    {/each}
  </nav>

  <div class="mt-auto p-3 bg-gray-700 rounded-lg">
    <p class="text-sm">📦 Total products</p>
    <p class="text-xl font-bold">575</p>
  </div>
</aside>
