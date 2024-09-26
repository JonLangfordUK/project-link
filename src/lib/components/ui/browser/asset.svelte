<script lang="ts">
  import { Input } from "$lib/components/ui/input/index.js";
  import type { AssetSchema } from "./asset_schema.ts";

  export let thumbSize: number[] | undefined = [150];
  export let assetData: AssetSchema;
</script>

<div style="width: {thumbSize}px;" class="rounded-md shadow-lg">
  <div style="height: {thumbSize}px;" class="rounded-t-md bg-slate-300"></div>
  <div class="h-1 bg-green-500"></div>
  <div class="grid grid-cols-1 gap-1 rounded-b-md bg-slate-400 px-1 pb-1">
    <span class="text-sm text-slate-200 font-bold">{assetData.name}</span>
    <span class="text-xs text-slate-200">{assetData.type}</span>
  </div>
</div>
