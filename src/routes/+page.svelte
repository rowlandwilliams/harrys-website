<script>
	import Skills from '../component/Skills/Skills.svelte';
	import Bio from '../component/Bio/Bio.svelte';
	import Experience from '../component/Experience/Experience.svelte';
	import Header from '../component/Header/Header.svelte';
	import Education  from '../component/Education/Education.svelte';
</script>

<section class="container flex flex-col border px-4 text-xs">
	<div class="h-full w-full overflow-hidden bg-white">
		<Header />
		<Bio />
		<Experience />
		<div class="grid grid-cols-2 gap-x-4">
			<Skills />
			<Education />
		</div>
	</div>
</section>

