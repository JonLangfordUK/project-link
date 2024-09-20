<script lang="ts">
  import AuthButtons from "$lib/components/ui/auth_buttons/auth_buttons.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import Divider from "$lib/components/ui/divider/divider.svelte";
  import type { PageData } from "./$types.js";
  import Register from "./register.svelte";
  export let data: PageData;

  async function google_click() {
    console.log("Register Google");
  }

  async function github_click() {
    console.log("Register Github");
  }

  async function gitlab_click() {
    console.log("Register Gitlab");
  }

  async function windows_click() {
    console.log("Register Windows");
  }

  async function email_click() {
    console.log("Register Email");
  }
</script>

<div class="flex h-screen items-center justify-center">
  <div class="max-w-xs flex-grow">
    <div class="shadow rounded p-4">
      <h1 class="mb-4 text-3xl font-bold">Register</h1>

      <AuthButtons
        {google_click}
        {github_click}
        {gitlab_click}
        {windows_click}
        {email_click}
      />
    </div>

    <Divider class="mt-2 mb-2" text="OR" />

    <div class="shadow rounded p-4">
      <Button class="w-full h-12" href="/login">Login</Button>
    </div>
  </div>
</div>
