<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Divider from "$lib/components/ui/divider/divider.svelte";

  import type { PageData } from "./$types.js";
  import AuthButtons from "$lib/components/ui/auth_buttons/auth_buttons.svelte";

  export let data: PageData;
</script>

<div class="flex h-screen items-center justify-center">
  <div class="max-w-xs flex-grow">
    <div class="shadow rounded p-4">
      <h1 class="mb-4 text-3xl font-bold">Login</h1>

      <form class="socials" method="POST">
        <AuthButtons
          google_action="?/login&provider=google"
          github_action="?/login&provider=github"
          discord_action="?/login&provider=discord"
          email_action="?/login"
        />
      </form>
    </div>

    <Divider class="mt-2 mb-2" text="OR" />

    <div class="shadow rounded p-4">
      <Button class="w-full h-12" href="/register">Create Account</Button>
    </div>
  </div>
</div>
