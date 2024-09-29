<script lang="ts">
  import Clickable from "$lib/components/ui/clickable/clickable.svelte";
  import type { AssetSchema } from "./asset_schema.ts";

  export let thumbSize: number[] | undefined = [150];
  export let assetData: AssetSchema;
</script>

<Clickable class="bg-slate-300 hover:bg-slate-200 rounded-md shadow-lg">
  <div
    class="rounded-t-md bg-slate-500 overflow-hidden"
    style="width: {thumbSize}px; height: {thumbSize}px;"
  ></div>
  <div style="height: calc(3 * 1.5rem);">
    <div class="w-full h-1 bg-green-500" />
    <span
      class="text-muted-forground text-left text-sm overflow-hidden text-ellipsis whitespace-normal capitalize m-1 mb-0"
      style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; white-space: normal; word-break: break-word;"
    >
      {assetData.name}
    </span>
    <span
      class="text-muted-forground text-left text-xs capitalize m-1 mt-0"
      style="display: -webkit-box;">{assetData.type}</span
    >
  </div>

  <!--<div class="flex flex-row border-b pb-2">
    <h1 class="text-md font-bold capitalize mr-2">{assetData.name}</h1>
    <h1 class="text-sm capitalize">{`(${assetData.type})`}</h1>
  </div>

  <table class="mt-1">
    <tbody>
      {#each Object.entries(assetData).sort(([keyA], [keyB]) => {
        if (keyA === "guid") return 1;
        if (keyB === "guid") return -1;
        return keyA.localeCompare(keyB);
      }) as [key, value]}
        {#if key !== "name" && key !== "type"}
          <tr>
            <td class="pr-2 capitalize">
              {key
                .replace(/_/g, " ")
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </td>
            <td class="pl-2 border-l"
              >{key === "resourceSize" ? `${value} MB` : value}</td
            >
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>-->
</Clickable>
