<script lang="ts">
  import { goto, type invalidateAll } from "$app/navigation";
  import { Button } from "$lib/components/ui/button/index.js";

  export let data;
  $: ({ supabase, user } = data);

  async function logout() {
    await supabase.auth.signOut();
    goto("/", { invalidateAll: true });
  }

  $: if (user !== undefined && !user) {
    goto("/login");
  }
</script>

{#if user}
  <h1>Welcome {user.email}</h1>
  <Button on:click={logout}>Logout</Button>
{/if}
