<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
  import BrowserAsset from "./(components)/browser_asset.svelte";

  let assets = Array.from({ length: 100 });
</script>

<div class="shadow rounded p-4 flex-grow">
  <Resizable.PaneGroup direction="horizontal">
    <Resizable.Pane defaultSize={10} minSize={5} />

    <Resizable.Handle withHandle />

    <Resizable.Pane defaultSize={5} minSize={5} />

    <Resizable.Handle withHandle />

    <Resizable.Pane>
      <div class="grid-container">
        {#each assets as _, index}
          <BrowserAsset />
        {/each}
      </div>
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>

<style>
  .grid-container {
    @apply grid gap-4 p-4; /* Tailwind utility classes for grid, gap, and padding */
    grid-template-columns: repeat(
      auto-fit,
      minmax(150px, 1fr)
    ); /* Adjust minmax value as needed */
  }
</style>
