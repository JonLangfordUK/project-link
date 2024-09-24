<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable/index.js";
  import NavBar from "./(components)/nav_bar.svelte";
  import { routes } from "./nav_config.js";
</script>

<NavBar {routes} />

<div class="m-4">
  <slot />
</div>
