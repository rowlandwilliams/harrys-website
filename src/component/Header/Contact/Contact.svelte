<script lang="ts">
	const contacts = [
		{ icon: 'website', contact: 'harrykelleher.com' },
		{ icon: 'email', contact: 'kelleherharry@gmail.com' },
        { icon: 'linkedin', contact: 'https://www.linkedin.com/in/harry-kelleher/' },
        { icon: 'phone', contact: '07521650667' },
		{ icon: 'location', contact: 'UK / Remote' }
	];
</script>

<div class="flex flex-col gap-y-0.5 rounded-sm p-2 text-xs">
	{#each contacts as { icon, contact }}
		<div class="flex items-center gap-x-2">
			<div class="w-3 text-indigo-400"><img src={`../../../../public/contacts/${icon}.svg`} alt={icon} /></div>
			<p class="text-gray-500">{contact}</p>
		</div>
	{/each}
</div>