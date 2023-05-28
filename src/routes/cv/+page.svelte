<svelte:head>
    <title>CV | Harry Kelleher</title> 
</svelte:head>

<script>
	import Bio from '../../component/Bio/Bio.svelte';
	import Education from '../../component/Education/Education.svelte';
	import Experience from '../../component/Experience/Experience.svelte';
	import Header from '../../component/Header/Header.svelte';
	import Skills from '../../component/Skills/Skills.svelte';

</script>

<div class="grid place-items-center py-2 m-2 sm:mx-auto sm:my-0 lg:m-0">
	<section
		class="flex flex-col items-center rounded-md bg-white border px-4 text-sm sm:m-2 ">
		<div class="h-full w-full overflow-hidden bg-white">
			<Header />
			<Bio />
			<Skills />
			<Experience />
			<Education />
			
			<div class="xxs:grid grid-rows gap-y-4 lg:grid-cols-2 gap-x-4">
				
				
			</div>
		</div>
	</section>
</div>
