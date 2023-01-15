<script lang="ts">
	import Row from '../Shared/Row/Row.svelte';
	import ExperienceBox from '../Shared/ExperienceBox/ExperienceBox.svelte';
	import { jobs } from './utils/jobs';
</script>

<Row rowHeader="Experience">
	<div class="grid gap-2">
		{#each jobs as job}
			<ExperienceBox {...job} withArrow />
		{/each}
	</div>
</Row>