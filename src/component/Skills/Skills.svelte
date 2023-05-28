<script lang="ts">
	import Row from '../Shared/Row/Row.svelte';
	import SkillSection from './SkillSection/SkillSection.svelte';
	import { skills } from './utils/utils';
</script>

<Row rowHeader="Skills">
	<div
		class="flex flex-col gap-y-5 md:flex-row md:justify-normal rounded-xl border px-4 py-1 border-gray-100 md:gap-x-24"
	>
		{#each skills as skill}
			<SkillSection {skill}/>
		{/each}
	</div>
</Row>
