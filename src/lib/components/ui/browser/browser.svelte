<script lang="ts">
  import { Slider } from "$lib/components/ui/slider";
  import * as Resizable from "$lib/components/ui/resizable";
  import type { AssetSchema } from "./asset_schema.js";
  import AssetWindow from "./asset_window.svelte";
  import DirectoryTree from "./directoryTree.svelte";
  import Filter from "./filter.svelte";
  import Bar from "./bar.svelte";

  let assets: AssetSchema[] = Array.from({ length: 200 }, (_, i) => ({
    name: `Asset ${i}`,
    type: "image",
  }));

  let thumbSize: number[] | undefined = [150];
</script>

<div class="flex flex-col flex-grow shadow rounded-xl">
  <Bar bind:thumbSize />

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
      <AssetWindow {assets} {thumbSize} />
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
