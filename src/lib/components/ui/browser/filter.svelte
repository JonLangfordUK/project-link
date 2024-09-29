<script lang="ts">
  import Clickable from "../clickable/clickable.svelte";
  import type { FilterSchema } from "./filter_schema.ts";

  export let filterData: FilterSchema;

  async function onClick(message: string) {
    console.log("Filter clicked");
  }
</script>

<Clickable
  onClicked={() => onClick(filterData.name)}
  class="flex flex-row rounded-sm bg-slate-300 hover:bg-slate-200"
>
  <div class={`rounded-l-sm w-1 ${filterData.color}`} />
  <span class="m-1">{filterData.name}</span>
</Clickable>
