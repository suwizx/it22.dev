<script lang="ts">
    import "../app.css";
    let { children } = $props();
</script>

<div class="dark dark:bg-zinc-950 min-h-dvh min-w-dvw text-white #select-none">
    <!-- Grid pattern overlay -->
    <div class="fixed inset-0 bg-[#000000] bg-opacity-90">
        <div
            class="w-full h-full"
            style="background-image: 
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;"
        ></div>
    </div>

    <!-- Top fade overlay -->
    <div
        class="fixed inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
    ></div>

    <!-- Irregular gradient background with light spots -->
    <div class="fixed inset-0">
        <div
            class="w-full h-full bg-gradient-to-t from-blue-900/50 via-blue-800/30 to-transparent"
        ></div>
        <div
            class="absolute inset-0"
            style="background-image: 
    radial-gradient(circle at 70% 85%, rgba(56, 189, 248, 0.4) 0%, transparent 25%),
    radial-gradient(circle at 25% 90%, rgba(59, 130, 246, 0.35) 0%, transparent 20%),
    radial-gradient(circle at 85% 75%, rgba(96, 165, 250, 0.45) 0%, transparent 35%),
    radial-gradient(circle at 55% 80%, rgba(0, 0, 255, 0.2) 0%, transparent 40%),
    radial-gradient(circle at 15% 75%, rgba(0, 0, 255, 0.25) 0%, transparent 30%);
  "
        ></div>
    </div>
    <div class="relative">
        {@render children()}
    </div>
</div>
