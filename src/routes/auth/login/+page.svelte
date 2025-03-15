<script>
  import { login } from '../../../services/api/auth';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let error = '';

  async function handleLogin() {
  try {
    const response = await login(email, password);
    console.log('Login Successful:', response);
    goto('/user/dashboard'); // Redirect to dashboard on success
  } catch (err) {
    console.error('Login Error:', err);
    // Ensure 'err' is treated as an object with a 'message' property
    error = err instanceof Error ? err.message : 'Login failed. Please try again.';
  }
}

</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
  <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-sm w-full shadow-lg">
    <h1 class="text-3xl font-semibold text-white mb-6 text-center">Welcome Back</h1>

    {#if error}
      <p class="text-red-500 mb-4 text-sm">{error}</p>
    {/if}

    <form on:submit|preventDefault={handleLogin} class="space-y-4">
      <!-- Email Input -->
      <div>
        <label for="email" class="block text-sm text-white mb-1">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          placeholder="Enter your email"
          class="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <!-- Password Input -->
      <div>
        <label for="password" class="block text-sm text-white mb-1">Password</label>
        <input
          id="password"
          type="password"
          bind:value={password}
          placeholder="Enter your password"
          class="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full p-3 mt-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition duration-300"
      >
        Log In
      </button>
    </form>

    <!-- Sign-Up Link -->
    <p class="text-sm text-gray-300 mt-6 text-center">
      Don't have an account? <a href="/auth/join" class="text-blue-400 hover:underline">Sign up</a>
    </p>
  </div>
</div>
