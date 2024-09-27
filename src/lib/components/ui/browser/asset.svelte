<script lang="ts">
  import type { AssetSchema } from "./asset_schema.ts";

  export let thumbSize: number[] | undefined = [150];
  export let assetData: AssetSchema;
</script>

<div class="bg-slate-400 rounded-md shadow-lg">
  <div
    class="rounded-t-md bg-slate-300 overflow-hidden"
    style="width: {thumbSize}px; height: {thumbSize}px;"
  ></div>
  <div style="height: calc(3 * 1.5rem);">
    <div class="w-full h-1 bg-green-500" />
    <span
      class="text-muted-forground text-sm overflow-hidden text-ellipsis whitespace-normal capitalize m-1 mb-0"
      style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; white-space: normal; word-break: break-word;"
    >
      {assetData.name}
    </span>
    <span class="text-muted-forground text-xs capitalize m-1 mt-0"
      >{assetData.type}</span
    >
  </div>
</div>
