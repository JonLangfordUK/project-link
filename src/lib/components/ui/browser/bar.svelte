<script lang="ts">
  import { Slider } from "$lib/components/ui/slider";

  export let thumbSize: number[] | undefined;
</script>

<div class="flex border-b w-full items-center p-2">
  <div class="m-2 w-full max-w-60">
    <Slider bind:value={thumbSize} min={100} max={300} step={1} />
  </div>
</div>
