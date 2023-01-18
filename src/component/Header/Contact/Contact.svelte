<script lang="ts">
	const contacts = [
		{ icon: 'website', contact: 'harrykelleher.com', link: 'https://hk-cv-git-master-harry843.vercel.app/' },
		{ icon: 'email', contact: 'Email', link: 'mailto:kelleherharry@gmail.com'},
        { icon: 'phone', contact: 'Mobile', link: 'tel:07521650667' },
		{ icon: 'linkedin', contact: 'LinkedIn', link: 'https://www.linkedin.com/in/harry-kelleher/' },
		{ icon: 'location', contact: 'Remote / Leeds', link: 'https://www.google.com/maps/place/Leeds/@53.8060835,-1.6057716,12z/data=!3m1!4b1!4m5!3m4!1s0x48793e4ada64bd99:0x51adbafd0213dca9!8m2!3d53.8007554!4d-1.5490774' }
	];
</script>

<div class="text-left items-left p-2 xxs:grid grid-rows-3 grid-flow-col max-h-20 gap-y-0.5 gap-x-2 sm:flex flex-row sm:gap-x-0.5 content-evenly sm:max-h-fit sm:text-center lg:flex-col justify-start ">
	{#each contacts as { icon, contact, link }}
		<div class="xxs:flex items-left row-span-1 gap-x-2 xs:flex items-left md:justifiy-start items-left lg:gap-x-0.5">
			<div class="w-4 lg:pt-1">
				<a href={link} target="_blank" rel="noopener noreferrer"><img src={`${icon}.svg`} alt={icon} /></a>
			</div>
			<div><a href={link} target="_blank" rel="noopener noreferrer"><p class="text-gray-500 hover:text-blue-700 hover:underline mx-2">{contact}</p></a></div>
		</div>
	{/each}
</div>