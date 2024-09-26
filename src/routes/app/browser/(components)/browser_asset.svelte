<script lang="ts">
  import { Input } from "$lib/components/ui/input/index.js";

  export let size: number = 150;
</script>

<div style="width: {size}px;" class="m-10 rounded-lg shadow-lg overflow-hidden">
  <div style="height: {size}px;" class="bg-green-500"></div>
  <div style="height: 50px;" class="bg-slate-500 p-1">Asset</div>
</div>
