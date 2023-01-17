<script lang="ts">
	const contacts = [
		{ icon: 'website', contact: 'harrykelleher.com', link: 'https://hk-cv-git-master-harry843.vercel.app/' },
		{ icon: 'email', contact: 'Email', link: 'mailto:kelleherharry@gmail.com'},
        { icon: 'linkedin', contact: 'LinkedIn', link: 'https://www.linkedin.com/in/harry-kelleher/' },
        { icon: 'phone', contact: 'Mobile', link: 'tel:07521650667' },
		{ icon: 'location', contact: 'Remote / Leeds', link: 'https://www.google.com/maps/place/Leeds/@53.8060835,-1.6057716,12z/data=!3m1!4b1!4m5!3m4!1s0x48793e4ada64bd99:0x51adbafd0213dca9!8m2!3d53.8007554!4d-1.5490774' }
	];
</script>

<div class="xxs:flex flex-col text-left gap-y-0.5 p-2 sm:flex-row gap-x-0.5 content-evenly sm:text-center lg:flex-col">
	{#each contacts as { icon, contact, link }}
		<div class="xxs:flex justify-left items-left gap-x-2 xs:items-center">
			<div class="w-3 text-indigo-400">
				<a href={link} target="_blank" rel="noopener noreferrer"><img src={`./public/contacts/${icon}.svg`} alt={icon} /></a>
			</div>
			<a href={link} target="_blank" rel="noopener noreferrer"><p class="text-gray-500 hover:text-blue-700 hover:underline mx-2">{contact}</p></a>
		</div>
	{/each}
</div>