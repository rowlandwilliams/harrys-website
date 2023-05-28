<script lang="ts">
	import Email from './icons/Email.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
	import Location from './icons/Location.svelte';
	import Website from './icons/Website.svelte';
	import Github from './icons/GitHub.svelte';

	const contacts = [
		{
			name: 'website',
			contact: 'harrykelleher.com',
			link: 'https://www.harrykelleher.com/',
			icon: Website
		},
		{ name: 'email', contact: 'Email', link: 'mailto:kelleherharry@gmail.com', icon: Email },
		{
			name: 'linkedin',
			contact: 'LinkedIn',
			link: 'https://www.linkedin.com/in/harry-kelleher/',
			icon: LinkedIn
		},
		{ name: 'github', contact: 'GitHub', link: 'https://github.com/harry843', icon: Github },
		{
			name: 'location',
			contact: 'Remote / Leeds',
			link: 'https://www.google.com/maps/place/Leeds/@53.8060835,-1.6057716,12z/data=!3m1!4b1!4m5!3m4!1s0x48793e4ada64bd99:0x51adbafd0213dca9!8m2!3d53.8007554!4d-1.5490774',
			icon: Location
		}
	];
</script>

<div
	class="text-left justify-between p-2 xxs:grid grid-rows-3 grid-flow-col max-h-20 gap-y-0.5 gap-x-2 sm:flex flex-row sm:align-middle sm:gap-x-0.5 content-evenly sm:max-h-fit sm:text-center lg:flex-col lg:justify-start "
>
	{#each contacts as { name, contact, link, icon }}
		<div class="items-center xxs:flex row-span-1 gap-x-2 xs:flex sm:gap-x-0.5">
			<div class="flex justify-center items-center w-4 h-4 pt-0.5 text-gray-600 hover:text-{name}">
				<a href={link} target="_blank" rel="noopener noreferrer"><svelte:component this={icon} /></a
				>
			</div>
			<div>
				<a href={link} target="_blank" rel="noopener noreferrer"
					><p class="text-gray-500 hover:text-blue-700 hover:underline mx-2">{contact}</p></a
				>
			</div>
		</div>
	{/each}
</div>
