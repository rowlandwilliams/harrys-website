<script lang="ts">
	const contacts = [
		{ icon: 'website', contact: 'harrykelleher.com', link: 'https://hk-cv-git-master-harry843.vercel.app/' },
		{ icon: 'email', contact: 'kelleherharry@gmail.com', link: 'mailto:kelleherharry@gmail.com'},
        { icon: 'linkedin', contact: 'linkedin.com/harry-kelleher', link: 'https://www.linkedin.com/in/harry-kelleher/' },
        { icon: 'phone', contact: '07521650667', link: 'tel:07521650667' },
		{ icon: 'location', contact: 'Remote / Leeds', link: 'https://www.google.com/maps/place/Leeds/@53.8060835,-1.6057716,12z/data=!3m1!4b1!4m5!3m4!1s0x48793e4ada64bd99:0x51adbafd0213dca9!8m2!3d53.8007554!4d-1.5490774' }
	];
</script>

<div class="flex flex-col gap-y-0.5 rounded-sm p-2 text-xs">
	{#each contacts as { icon, contact, link }}
		<div class="flex items-center gap-x-2">
			<div class="w-3 text-indigo-400">
				<a href={link} target="_blank" rel="noopener noreferrer"><img src={`../../../../public/contacts/${icon}.svg`} alt={icon} /></a>
			</div>
			<a href={link} target="_blank" rel="noopener noreferrer"><p class="text-gray-500">{contact}</p></a>
		</div>
	{/each}
</div>