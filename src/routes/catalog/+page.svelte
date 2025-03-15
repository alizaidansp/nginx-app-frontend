<script>
  import Header from '../../lib/components/Header.svelte';
  import ProductCard from '../../lib/components/ProductCard.svelte';
  import { products_list } from '../../services/api/products';
  import { onMount } from 'svelte';

  let products = [];
  let error = '';

  async function fetchProducts(query = '') {
    try {
      const response = await products_list(query);
      products = response || [];
    } catch (err) {
      error = 'Failed to load products.';
      console.error('Error fetching products:', err);
    }
  }

  function handleSearch(query) {
    // let q = event.detail; // Get the search term
    // console.log(query.detail);
    fetchProducts(query.detail);
  }

  onMount(() => fetchProducts());
</script>

<Header title="Catalog" on:search={handleSearch} />

{#if error}
  <p class="text-red-500">{error}</p>
{:else if products.length === 0}
  <p class="text-gray-400 text-center mt-10">No products available.</p>
{:else}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {#each products as product}
      <ProductCard
        title={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
      />
    {/each}
  </div>
{/if}
