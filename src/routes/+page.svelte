<script>
	import Bio from '../component/Bio/Bio.svelte';
	import Education from '../component/Education/Education.svelte';
	import Experience from '../component/Experience/Experience.svelte';
	import Header from '../component/Header/Header.svelte';
	import Skills from '../component/Skills/Skills.svelte';
</script>

<div class="grid place-items-center bg-gray-900 m-2 sm:mx-auto sm:my-2">
	<section
		class="container flex flex-col items-center bg-white border px-4 text-sm w-full "
	>
		<div class="h-full w-full overflow-hidden bg-white">
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
