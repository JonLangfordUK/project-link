<script lang="ts">
  import Asset from "./asset.svelte";
  import type { AssetSchema } from "./asset_schema.js";

  export let assets: AssetSchema[];
  export let thumbSize: number[] | undefined = [150];
</script>

<div
  class="flex-grow p-2 h-1 grid-container grid-cols-3 gap-2 overflow-y-auto"
  style="--thumbSize: {thumbSize}px"
>
  {#each assets as assetData}
    <Asset {thumbSize} {assetData} />
  {/each}
</div>

<style>
  .grid-container {
    @apply grid; /* Tailwind utility classes for grid, gap, and padding */
    grid-template-columns: repeat(auto-fit, minmax(var(--thumbSize), 100px));
  }
</style>
