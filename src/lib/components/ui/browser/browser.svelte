<script lang="ts">
  import { Slider } from "$lib/components/ui/slider";
  import * as Resizable from "$lib/components/ui/resizable";
  import type { AssetSchema } from "./asset_schema.js";
  import type { FolderSchema } from "./folder_schema.js";
  import AssetWindow from "./asset_window.svelte";
  import DirectoryTree from "./directoryTree.svelte";
  import Filter from "./filter.svelte";
  import Bar from "./bar.svelte";

  let assets: AssetSchema[] = Array.from({ length: 300 }, (_, i) => ({
    name: `MM_ExampleMaterial_${i}`,
    type: "image",
  }));

  let folders: FolderSchema[] = Array.from({ length: 10 }, (_, i) => ({
    name: `Example_${i}`,
  }));

  let thumbSize: number[] | undefined = [150];
</script>

<div
  class="flex flex-col flex-grow border shadow rounded-xl"
  style="user-select: none;"
>
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

    <Resizable.Pane minSize={30} class="flex flex-col flex-grow">
      <AssetWindow {assets} {folders} {thumbSize} />
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
