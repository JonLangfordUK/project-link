<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Divider from "$lib/components/ui/divider/divider.svelte";
  import { text } from "@sveltejs/kit";

  import type { PageData } from "./$types.js";
  import Login from "./login.svelte";
  export let data: PageData;
</script>

<div class="flex h-screen items-center justify-center">
  <div class="max-w-xs flex-grow shadow rounded p-4">
    <h1 class="mb-4 text-3xl font-bold">Login</h1>
    <Login data={data.form}></Login>

    <Divider class="mt-2 mb-2" text="or" />

    <Button class="w-full" href="/register">Create Account</Button>
  </div>
</div>
