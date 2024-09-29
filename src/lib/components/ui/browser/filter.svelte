<script lang="ts">
  import Clickable from "../clickable/clickable.svelte";
  import type { FilterSchema } from "./filter_schema.ts";

  export let filterData: FilterSchema;

  async function onClick(message: string) {
    console.log("Filter clicked");
  }
</script>

<Clickable onClicked={() => onClick(filterData.name)}>
  <div
    class="flex flex-row border rounded-sm bg-secondary hover:bg-slate-400 cursor-pointer"
  >
    <div class={`rounded-l-sm w-1 ${filterData.color}`} />
    <span class="m-1">{filterData.name}</span>
  </div>
</Clickable>
