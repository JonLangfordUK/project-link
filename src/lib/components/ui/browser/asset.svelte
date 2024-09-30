<script lang="ts">
  import Clickable from "$lib/components/ui/clickable/clickable.svelte";
  import type { AssetSchema } from "./asset_schema.ts";

  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as ContextMenu from "$lib/components/ui/context-menu";
  import * as Popover from "$lib/components/ui/popover";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Button from "../button/button.svelte";
  import { flyAndScale } from "$lib/utils.js";

  export let thumbSize: number[] | undefined = [150];
  export let assetData: AssetSchema;

  let tooltipOpen = false;

  /*function leaveAsset(mouseEvent: MouseEvent) {
    const toElement = mouseEvent.toElement as HTMLElement;
    const divElement = toElement?.closest("div");

    if (divElement?.role === "tooltip") {
      tooltipOpen = true;
    } else {
      tooltipOpen = false;
    }
  }

  function leaveAssetTooltip(mouseEvent: MouseEvent) {
    tooltipOpen = false;
  }*/

  function onEnterAsset(mouseEvent: MouseEvent) {
    tooltipOpen = true;
  }

  function onExitAsset(mouseEvent: MouseEvent) {
    tooltipOpen = false;
  }
</script>


<Popover.Root bind:open={tooltipOpen}>
  <Popover.Trigger>
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Clickable onMouseEnter={onEnterAsset} onMouseLeave={onExitAsset} class="bg-slate-300 hover:bg-slate-200 rounded-md shadow-lg">
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
        </Clickable>
      </ContextMenu.Trigger>

      <ContextMenu.Content class="min-w-72">
        <span class="text-muted-forground font-bold text-left text-sm p-2">Open In</span>
        <ContextMenu.Item>Asset</ContextMenu.Item>
        <ContextMenu.Item>Conversation</ContextMenu.Item>
        <Separator />

        <span class="text-muted-forground font-bold text-left text-sm p-2">Version</span>
        <ContextMenu.Item>Upload New</ContextMenu.Item>
        <ContextMenu.Item>History</ContextMenu.Item>
        <ContextMenu.Item>Validate</ContextMenu.Item>
        <Separator />

        <span class="text-muted-forground font-bold text-left text-sm p-2">Actions</span>
        <ContextMenu.Item>Open in Maya</ContextMenu.Item>
        <ContextMenu.Item>Open in 3ds Max</ContextMenu.Item>
        <ContextMenu.Item>Open in Blender</ContextMenu.Item>
        <ContextMenu.Item>Open in Houdini</ContextMenu.Item>
        <ContextMenu.Item>Sent to Unreal</ContextMenu.Item>
        <ContextMenu.Item>Sent to Unity</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  </Popover.Trigger>

  <Popover.Content class="w-auto">
    <div class="flex flex-row border-b pb-2">
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
    </table>
  </Popover.Content>
<!---->

</Popover.Root>