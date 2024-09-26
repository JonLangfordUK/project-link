<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
  import type { AssetSchema } from "./asset_schema.js";
  import AssetWindow from "./asset_window.svelte";
  import DirectoryTree from "./directoryTree.svelte";
  import Filter from "./filter.svelte";

  let assets: AssetSchema[] = Array.from({ length: 200 }, (_, i) => ({
    name: `Asset ${i}`,
    type: "image",
  }));
</script>

<div class="flex flex-col flex-grow shadow rounded">
  <Resizable.PaneGroup direction="horizontal" class="flex flex-col flex-grow">
    <Resizable.Pane size defaultSize={20} minSize={5}>
      <DirectoryTree />
    </Resizable.Pane>

    <Resizable.Handle withHandle />

    <Resizable.Pane defaultSize={10} minSize={5}>
      <Filter />
    </Resizable.Pane>

    <Resizable.Handle withHandle />

    <Resizable.Pane class="flex flex-col flex-grow">
      <AssetWindow {assets} />
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
