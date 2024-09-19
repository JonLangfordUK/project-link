<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import { cn } from "$lib/utils.js";

  let className: string = "";
  export { className as class };
  export let text: string;
</script>

<div class={cn("flex items-center gap-4", className)}>
  <Separator class="flex-1" />
  <span class="text-muted-foreground">{text}</span>
  <Separator class="flex-1" />
</div>
