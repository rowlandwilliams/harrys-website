import type { Jobs } from 'src/types/types';

export const jobs: Jobs = [
	{
		title: 'Lead Business Intelligence Developer',
		employer: 'NHS Digital',
		employer_url: 'https://digital.nhs.uk/dashboards',
		image: 'nhs.svg',
		imageColorClass: 'bg-nhs_bright_blue',
		bullets: [
			'Responsible for end-to-end technical delivery of business intelligence products across NHS.',			
			'Manager of 7 developers; responsible for their technical development, quality of work, and prioritising workload according to organisational priorities.',
			'Implemented standards for dashboard delivery, leading to: strong, consistent branding across products, reduction in Live service incidents and bugs deployed, improved processes for repeatable quality outputs.',
			'Subject Matter Expert on Tableau and NHS Data Viz Community Leader – hosted monthly community of practice events, championed RAP principles and inter-org collaboration.',
            'Delivered key outputs of NHS Data Viz Strategy such as the Tableau data validation framework, test-driven development, automation of manual processes, upskilling team etc.',
            'Led client engagement for new commissions, including selling, scoping, sizing, identifying risks to delivery and their mitigating actions.',
            'Built senior relationships across multiple NHS organisations to gain buy-in and uptake of NHS Data Viz Strategy during merger between NHS Digital, NHSX and NHS England.'
		],
		timeframe: { start: '2022-03' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Leeds, UK', 'Remote']
	},
	{
		title: 'Business Intelligence Developer',
		employer: 'NHS Digital',
		employer_url: 'https://digital.nhs.uk/dashboards',
		image: 'nhs.svg',
		imageColorClass: 'bg-nhs_bright_blue',
		bullets: [
			'Lead developer of GP Appointments dashboards in Tableau (1000 NHS Users per week).',
            'Deployed dashboards from testing into production following organisation change protocol and developer best practice, using Tableau APIs, managing version control via a GIT repo.',
            'Responsible for creating and maintaining data pipelines in multiple languages.',
            'Led external stakeholder engagement to determine technical requirements for sprints.',
            'Line manager to graduate developer: responsible for their technical development, quality of work, prioritising their workload according to organisational priorities.',
            'Built relationships across the organisation to ensure timely and quality service delivery.'
		],
		timeframe: { start: '2021-08', end: '2022-03' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Leeds, UK', 'Remote']
	},

	{
		title: 'Data Science Graduate Trainee',
		employer: 'NHS Digital',
		employer_url: 'https://digital.nhs.uk/dashboards',
		image: 'nhs.svg',
		imageColorClass: 'bg-nhs_bright_blue',
		bullets: [
			'Automated pipelines to transport big data volumes to AWS S3 via Python using boto3 API. Coordinated with internal teams to define responsibilities and manage dependencies.',
			'Led re-design of data processing for multiple statistical publications to deadline from SAS to Python, in line with organisational priorities to move towards open-source technology.',
            'Implemented row-level security across multiple Tableau Dashboards to control user access and first of type parameter-based sheet swapping to enhance user experience.'
		],
		timeframe: { start: '2020-09', end: '2021-08' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Leeds, UK', 'Remote']
	},
	{
		title: 'Business Analysis Graduate Trainee',
		employer: 'NHS Digital',
		employer_url: 'https://digital.nhs.uk/',
		image: 'nhs.svg',
		imageColorClass: 'bg-nhs_bright_blue',
		bullets: [
			'Developed Outcome Data Infographics at national and local levels using Google Charts API, giving NHS 111 Providers operational insights on secondary care outcomes following a 111 call.',
			'Product Owner for the NHS Apps Library assessment process: engaged NHS experts across multiple professions to deliver the online assessment for onboarding health apps onto the NHS Apps Library.'
		],
		timeframe: { start: '2018-09', end: '2020-09' },
		contractType: ['Full-time'],
		locations: ['London, UK', 'Remote']
	},
    {
		title: 'Digital Intern',
		employer: 'Best Beginnings',
		employer_url: 'https://www.bestbeginnings.org.uk/',
		image: 'best_beginnings.jpg',
		imageColorClass: 'bg-rose-200',
		bullets: [
			'Led website redesign implementation to improve user interface in order to increase donor acquisition and online traffic.',
			'Analysed data in Excel from app usage to create weekly reporting for executive team.'
		],
		timeframe: { start: '2018-03', end: '2018-07' },
		contractType: ['Full-time'],
		locations: ['London, UK', 'Remote']
	}
];