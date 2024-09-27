<script lang="ts">
  import type { FolderSchema } from "./folder_schema.js";
  import FolderIcon from "$lib/assets/icons/folder.svelte";

  export let thumbSize: number[] | undefined = [150];
  export let folderData: FolderSchema;
</script>

<div>
  <div
    class="overflow-hidden"
    style="width: {thumbSize}px; height: {thumbSize}px;"
  >
    <svelte:component this={FolderIcon} />
  </div>
  <div class="p-1" style="height: calc(3 * 1.5rem);">
    <span
      class="text-muted-forground text-sm overflow-hidden text-ellipsis whitespace-normal capitalize text-center"
      style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; white-space: normal; word-break: break-word;"
    >
      {folderData.name}
    </span>
  </div>
</div>
