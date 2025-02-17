<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="dark dark:bg-zinc-950 min-h-dvh min-w-dvw text-white select-none">
	{@render children()}
</div>
