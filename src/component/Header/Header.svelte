<script>
	import Section from '../Shared/Section/Section.svelte';
	import Contact from './Contact/Contact.svelte';
</script>

<Section>
	<div class="flex items-center justify-between">
		<div class="flex flex-col gap-y-2">
			<h1 class="max-w-max text-3xl font-semibold pb-2">Harry Kelleher</h1>
			<h2 class="text-lg font-medium text-gray-800">
				Business Intelligence Developer <span class="text-indigo-500">&#8226;</span> Analytics Manager
			</h2>
			<div class="text-left">
				<p>
					Security Cleared<img
						src={`../../../public/contacts/secure.svg`}
						alt="security cleared"
						style="float:left;width:24px;height:24px;margin-right:6px"
					/>
				</p>
			</div>
		</div>
		<Contact />
	</div>
</Section>
