<script lang="ts">
  import { goto, type invalidateAll } from "$app/navigation";
  import { Button } from "$lib/components/ui/button/index.js";

  export let data;
  $: ({ supabase, user } = data);

  $: if (user !== undefined && !user) {
    goto("/login");
  } else {
    goto("/app");
  }
</script>
