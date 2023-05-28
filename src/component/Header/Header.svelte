<script>
	import Section from '../Shared/Section/Section.svelte';
	import Contact from './Contact/Contact.svelte';
</script>

<Section>
	<div class="xxs:flex flex-col text-left lg:flex-row items-left justify-between">
		<div class="flex flex-col gap-y-2">
			<h1 class="max-w-max text-3xl font-semibold pb-2">Harry Kelleher</h1>
			<div class="flex flex-col sm:items-center sm:flex-row gap-x-4 pt-3">
				<h2 class="text-lg font-medium text-gray-800">
					Business Intelligence Developer <span class="text-indigo-500">&#8226;</span> Analytics Manager
				</h2>
				<span class="text-indigo-500 hidden sm:block text-xl">|</span>
				<div class="flex flex-col gap-y-2 text-left group relative ">
					<p style="padding-top:4px;">
						<button>Security Cleared</button><img
							src={`secure.svg`}
							alt="security cleared"
							style="float:left;width:24px;height:24px;margin-right:6px"
						/>
						<span
							class="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity rounded bg-gray-900 px-2 py-1 text-ss font-normal text-gray-50 group-hover:opacity-100"
						>
							Expires January 2031.
						</span>
					</p>
				</div>
			</div>
		</div>
		<Contact />
	</div>
</Section>
