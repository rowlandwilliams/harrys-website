<script lang="ts">
	export let columnHeader: string;
</script>

<section class="flex flex-col gap-y-2 py-4">
	<h1 class="font-medium text-indigo-500">{columnHeader}</h1>
	<slot />
</section>