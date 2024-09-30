<script lang="ts">
  import type { ButtonEventHandler } from "bits-ui";
  import type { MouseEventHandler } from "svelte/elements";

  let className: string = "";
  export { className as class };
  export let onClicked: MouseEventHandler<HTMLDivElement> | null | undefined = undefined;
  export let onMouseEnter: MouseEventHandler<HTMLDivElement> | null | undefined = undefined;
  export let onMouseLeave: MouseEventHandler<HTMLDivElement> | null | undefined = undefined;
</script>

<div class={className + " cursor-pointer"} on:click={onClicked} on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
  <slot />
</div>
