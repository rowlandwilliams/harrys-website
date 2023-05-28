<svelte:head>
    <title>Patient Journeys via 111 | Portfolio</title> 
  <style>
	//flex relative self-center content-center justify-items-center justify-center items-center inline-block text-white overflow-hidden w-full pb-[100%]
	
    svg {
      width: 100%;
	  height: 100%;
    }
  </style>
</svelte:head>

<script>
	import { renderSankey } from "./sankey.js";
</script>

<section class="container flex flex-col items-center font-normal px-4 text-sm w-full ">
	<p>Visualisation showing the journey of 111 callers through NHS services.</p>

	<div id="sankey-diagram" style="position: relative; height: 0; width: 100%; padding: 0;padding-bottom: 100%; " class="text-white">
		{renderSankey()}
	</div>
</section>
