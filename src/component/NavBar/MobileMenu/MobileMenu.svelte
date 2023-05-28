<script lang="ts">
	import classNames from 'classnames';
	import { page } from '$app/stores';
    import { routes} from '../utils/utils';
	export let open: boolean;
	export let handleClose: () => void;

</script>

<div
	class={classNames(
		'absolute p-4 w-1/2 h-screen top-20 transition-all duration-700 md:hidden',
		{
			'left-1/2': open,
			'left-full': !open
		}
	)}
>
	<ul
		class="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
	>
		{#each routes as route}
			<li>
				<a
					href={'/' + route.slug}
					class={classNames('block py-2 px-4 text-gray-800 border-blue-300', {
						'text-blue-700 bg-gray-100 rounded-md': route.slug === $page.url.pathname.slice(1)
					},
                    )}
					aria-current="page"
                    on:click={handleClose}
					>{route.label}
				</a>
			</li>
		{/each}
	</ul>
</div>
