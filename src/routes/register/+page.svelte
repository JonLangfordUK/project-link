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
    <div class="shadow rounded p-4 grid grid-cols-1 gap-4">
      <h1 class="text-3xl font-bold">Register</h1>

      <Register data={data.form} />

      <Divider text="OR" />

      <div class="flex items-center justify-center">
        <a class="text-center" href="/login">Login</a>
      </div>
    </div>
  </div>
</div>
