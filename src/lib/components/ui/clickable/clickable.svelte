<script lang="ts">
  import type { ButtonEventHandler } from "bits-ui";

  let className: string = "";
  export { className as class };
  export let onClicked:
    | ((e: ButtonEventHandler<MouseEvent>) => void)
    | null
    | undefined;
</script>

<div class={className} on:click={onClicked}>
  <slot />
</div>
