<script lang="ts">
  import type { FilterSchema } from "./filter_schema.ts";

  export let filterData: FilterSchema;
</script>

<div class="flex flex-row border rounded-sm">
  <div class="rounded-l-sm w-1 bg-green-500" />
  <span class="m-1">{filterData.name}</span>
</div>
