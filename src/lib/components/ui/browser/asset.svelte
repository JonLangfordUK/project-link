<script lang="ts">
  import { Input } from "$lib/components/ui/input/index.js";
  import type { AssetSchema } from "./asset_schema.ts";

  export let size: number = 150;
  export let assetData: AssetSchema;
</script>

<div style="width: {size}px;" class="rounded-lg shadow-lg">
  <div style="height: {size}px;" class="rounded-t-lg bg-slate-300"></div>
  <div class="h-1 bg-green-500"></div>
  <div class="grid grid-cols-1 gap-1 rounded-b-lg bg-slate-400 p-1">
    <span>{assetData.name}</span>
    <span>{assetData.type}</span>
  </div>
</div>
