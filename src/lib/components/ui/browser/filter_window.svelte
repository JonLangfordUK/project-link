<script lang="ts">
  import Filter from "./filter.svelte";
  import type { FilterSchema } from "./filter_schema.ts";

  export let filterData: FilterSchema;
</script>

<div class="flex-grow gird grid-cols-1 gap-2 bg-red-500">
  <span>a</span>
  <span>a</span>
  <span>a</span>
  <Filter {filterData} />
  <Filter {filterData} />
  <Filter {filterData} />
</div>
