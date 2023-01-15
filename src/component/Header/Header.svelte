<script>
	import Section from '../Shared/Section/Section.svelte';
	import Contact from './Contact/Contact.svelte';
</script>

<Section>
	<div class="flex items-center justify-between">
		<div class="flex flex-col gap-y-2">
			<h1 class="max-w-max text-2xl font-semibold">Harry Kelleher</h1>
			<h2 class="text-sm font-medium text-gray-800">
				Business Intelligence Developer <span class="text-indigo-500">&#8226;</span> Analytics Manager
			</h2>
		</div>
		<Contact />
	</div>
</Section>