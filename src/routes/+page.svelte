<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import { BsChatFill } from "svelte-icons-pack/bs";
</script>

<div class="w-full h-dvh flex items-center justify-center">
  <div class="container mx-auto flex flex-col items-center justify-center">
    <h1 class="text-4xl md:text-7xl font-bold text-white mb-2">
      <span class="text-blue-500">IT</span><span class="text-orange-500"
        >22</span
      >.dev
    </h1>
    <p class="text-lg mb-6">Website is under construction.</p>
    <a
      href="https://line.me/ti/g/a7_bFLrQbw"
      target="_blank"
      class="bg-green-500 hover:bg-green-600 text-white py-1 px-4 font-bold rounded-full flex items-center gap-2 justify-center flex-wrap transition-all duration-200"
    >
      <Icon src={BsChatFill} /> Join IT KMITL22 ประชาสัมพันธ์
      <span class="hidden md:inline"> Line Group</span> !</a
    >
    <a
      href="/member"
      class="mt-4 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg px-4 py-2 transition-all duration-200"
    >
      IT22 Tech Team members
    </a>
  </div>
</div>
