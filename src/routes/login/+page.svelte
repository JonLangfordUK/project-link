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

      <form method="POST">
        <Form.Button
          formaction="?/login&provider=google"
          class="w-full h-12 mb-4"
        >
          <div class="grid grid-cols-3 gap-4 w-2/3">
            <img class="size-6 mr-4 w-full" src={google_logo} alt="Google" />
            <span class="col-span-2 w-full">Google</span>
          </div>
        </Form.Button>

        <Form.Button
          formaction="?/login&provider=github"
          class="w-full h-12 mb-4"
        >
          <div class="grid grid-cols-3 gap-4 w-2/3">
            <img class="size-6 mr-4 w-full" src={github_logo} alt="Github" />
            <span class="col-span-2 w-full">Github</span>
          </div>
        </Form.Button>

        <Form.Button
          formaction="?/login&provider=discord"
          class="w-full h-12 mb-4"
        >
          <div class="grid grid-cols-3 gap-4 w-2/3">
            <img class="size-6 mr-4 w-full" src={discord_logo} alt="Discord" />
            <span class="col-span-2 w-full">Discord</span>
          </div>
        </Form.Button>

        <Form.Button formaction="?/login" class="w-full h-12">
          <div class="grid grid-cols-3 gap-4 w-2/3">
            <img class="size-6 mr-4 w-full" src={email_logo} alt="Email" />
            <span class="col-start-2 col-span-2 w-full">Email</span>
          </div>
        </Form.Button>
      </form>
    </div>

    <Divider class="mt-2 mb-2" text="OR" />

    <div class="shadow rounded p-4">
      <Button class="w-full h-12" href="/register">Create Account</Button>
    </div>
  </div>
</div>
