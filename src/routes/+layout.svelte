<script lang="ts">
	import '../app.css';
	import NavBar from '../component/NavBar/NavBar.svelte';
</script>

<NavBar />
<section class="mt-20 w-full">
	<slot />
</section>
