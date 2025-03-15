<script>
  import { ShoppingCart } from 'lucide-svelte';

  export let title;
  export let description;
  export let price;
  export let image; // Larger placeholder for better visuals
</script>

<div class="bg-gray-800 rounded-xl p-4 hover:transform hover:scale-105 transition-all duration-300">
  <img
    src={image}
    alt={title}
    class="w-full h-48 object-cover rounded-lg mb-4"
  />
  <h3 class="text-lg font-semibold text-white mb-1">{title}</h3>
  <p class="text-gray-400 text-sm mb-2 truncate" title={description}>{description}</p>
  <div class="flex justify-between items-center mt-3">
    <span class="text-xl font-bold text-green-400">${price.toFixed(2)}</span>
    <button class="p-2 hover:bg-gray-700 rounded-full">
      <ShoppingCart class="w-6 h-6 text-white" />
    </button>
  </div>
</div>
