<script lang="ts">
  import Filter from "./filter.svelte";
  import type { FilterSchema } from "./filter_schema.ts";

  export let filterData: FilterSchema[];
</script>

<div class="flex-grow flex flex-col gap-2 p-2">
  {#each filterData as filter}
    <Filter filterData={filter} />
  {/each}
</div>
