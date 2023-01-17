<script>
    import ExperienceBox from '../Shared/ExperienceBox/ExperienceBox.svelte';
    import Column from '../Shared/Column/Column.svelte'; 

	const educationDetails = {
		title: 'MSci Natural Sciences (1st Class Honours)',
		employer: 'University College London (UCL)',
		employer_url: 'https://www.ucl.ac.uk/',
		image: './public/images/ucl.svg',
		imageColorClass: 'bg-gray-100',
		bullets: [
			"Provost's Excellence Scholarship for outstanding academic achievement.",
			'Specialised in Genetics, Environment and Evolution with Policy, Communication and Ethics.',
			'The Dean’s List Nominee (2014)'
		],
		timeframe: { start: '2013-09', end: '2017-06' },
		contractType: [],
		locations: ['London, UK']
	};
</script>

<section>
	<Column columnHeader="Education">
		<ExperienceBox {...educationDetails} />
	</Column>
</section>