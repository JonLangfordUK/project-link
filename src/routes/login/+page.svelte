<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Divider from "$lib/components/ui/divider/divider.svelte";
  import { text } from "@sveltejs/kit";

  import type { PageData } from "./$types.js";
  import Login from "./login.svelte";
  import AuthButtons from "$lib/components/ui/auth_buttons/auth_buttons.svelte";
  export let data: PageData;

  async function google_click() {
    console.log("Login Google");
  }

  async function github_click() {
    console.log("Login Github");
  }

  async function gitlab_click() {
    console.log("Login Gitlab");
  }

  async function windows_click() {
    console.log("Login Windows");
  }

  async function email_click() {
    console.log("Login Email");
  }
</script>

<div class="flex h-screen items-center justify-center">
  <div class="max-w-xs flex-grow">
    <div class="shadow rounded p-4">
      <h1 class="mb-4 text-3xl font-bold">Login</h1>

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
      <Button class="w-full h-12" href="/register">Create Account</Button>
    </div>
  </div>
</div>
