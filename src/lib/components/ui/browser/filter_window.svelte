<script lang="ts">
  import Filter from "./filter.svelte";
  import type { FilterSchema } from "./filter_schema.ts";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";

  export let filterData: FilterSchema[];
</script>

<ScrollArea class="flex-grow p-2 pr-3 border ">
  <div class="flex flex-col gap-2 h-1">
    {#each filterData as filter}
      <Filter filterData={filter} />
    {/each}
  </div>
</ScrollArea>
