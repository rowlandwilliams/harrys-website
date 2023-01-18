<script>
	import Bio from '../component/Bio/Bio.svelte';
	import Education from '../component/Education/Education.svelte';
	import Experience from '../component/Experience/Experience.svelte';
	import Header from '../component/Header/Header.svelte';
	import Skills from '../component/Skills/Skills.svelte';
</script>

<div class="grid place-items-center m-12">
	<section
		class="container flex flex-col items-center border px-4 text-sm w-full md:w-[a4WidthInPixels] md:h-[a4WidthInPixels]"
	>
		<div class="h-full w-full overflow-hidden bg-whit">
			<Header />
			<Bio />
			<Experience />
			<div class="xxs:grid grid-rows gap-y-4 lg:grid-cols-2 gap-x-4">
				<Skills />
				<Education />
			</div>
		</div>
	</section>
</div>
