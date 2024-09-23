<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Form from "$lib/components/ui/form";
  import Divider from "$lib/components/ui/divider/divider.svelte";

  import google_logo from "$lib/assets/logos--google-icon.svg";
  import github_logo from "$lib/assets/logos--github-icon.svg";
  import discord_logo from "$lib/assets/logos--discord-icon.svg";
  import email_logo from "$lib/assets/email.svg";

  import type { PageData } from "./$types.js";

  export let data: PageData;
</script>

<div class="flex h-screen items-center justify-center">
  <div class="max-w-xs flex-grow">
    <div class="shadow rounded p-4">
      <h1 class="mb-4 text-3xl font-bold">Login</h1>
      <h1 class="mb-4 text-3xl font-bold">NOT THIS ONE</h1>
      <Button class="w-full h-12" href="/register">Create Account</Button>
    </div>
  </div>
</div>
