<script>
	import classNames from 'classnames';
	import { page } from '$app/stores';
	import { routes} from '../utils/utils';

</script>

<div
	class="items-right justify-between hidden w-full md:flex md:w-auto md:order-2"
	id="navbar-sticky"
>
	<ul
		class="flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
	>
		{#each routes as route}
			<li>
				<a
					href={'/'+
					route.slug}
					class={classNames('block py-2 px-4 text-gray-800 rounded-lg hover:bg-gray-50 hover:rounded-md', {
						'md:text-blue-700': route.slug === $page.url.pathname.slice(1)
					})}
					aria-current="page">
					{route.label}</a
				>
			</li>
		{/each}
	</ul>
</div>
