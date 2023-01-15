<script lang="ts">
	import Column from '../Shared/Column/Column.svelte'
	import SkillSection from './SkillSection/SkillSection.svelte';
	import { skills } from './utils/utils';
</script>

<Column columnHeader="Skills">
	<div class="flex flex-col gap-y-4">
		{#each skills as skill}
			<SkillSection {skill} />
		{/each}
	</div>
</Column>