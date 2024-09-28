<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
  import type { AssetSchema } from "./asset_schema.js";
  import type { FolderSchema } from "./folder_schema.js";
  import FilterWindow from "./filter_window.svelte";
  import AssetWindow from "./asset_window.svelte";
  import DirectoryTree from "./directoryTree.svelte";
  import Bar from "./bar.svelte";

  let assets: AssetSchema[] = Array.from({ length: 300 }, (_, i) => ({
    name: `MM_ExampleMaterial_${i}`,
    type: "image",
    path: "/Content/Environments/Props/Materials/ExampleMaterial",
    resourceSize: 512,
    guid: `1b04529d-f36d-4bb3-8a06-cb15bc8f4baf`,
    testType: "Hello Jon",
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

    <Resizable.Pane
      defaultSize={10}
      minSize={5}
      class="flex flex-col flex-grow"
    >
      <FilterWindow
        filterData={{ name: "Static Mesh", color: "bg-green-500" }}
      />
    </Resizable.Pane>

    <Resizable.Handle withHandle />

    <Resizable.Pane minSize={30} class="flex flex-col flex-grow">
      <AssetWindow {assets} {folders} {thumbSize} />
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
