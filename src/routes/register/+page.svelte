<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Form from "$lib/components/ui/form";
  import Divider from "$lib/components/ui/divider/divider.svelte";

  import type { PageData } from "./$types.js";
  import Register from "./register.svelte";

  export let data: PageData;
</script>

<div class="flex h-screen items-center justify-center">
  <div class="max-w-xs flex-grow">
    <div class="shadow rounded p-4">
      <h1 class="mb-4 text-3xl font-bold">Register</h1>

      <Register data={data.form} />
    </div>

    <Divider class="mt-2 mb-2" text="OR" />

    <div class="shadow rounded p-4">
      <Button class="w-full h-12" href="/login">Login</Button>
    </div>
  </div>
</div>
