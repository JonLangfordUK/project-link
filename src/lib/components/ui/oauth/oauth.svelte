<script lang="ts">
  import type { ComponentType } from "svelte";
  import type { Icon } from "lucide-svelte";
  import { enhance } from "$app/forms";
  import type { ButtonEventHandler } from "bits-ui";
  import * as Form from "$lib/components/ui/form";
  import Button from "$lib/components/ui/button/button.svelte";

  import Email from "$lib/assets/icons/email.svelte";

  export type OAuthData = {
    logo: ComponentType<Icon>;
    name: string;
    action: string;
  };

  export let oauthData: OAuthData[] = [];
  export let onEmailClicked:
    | ((e: ButtonEventHandler<MouseEvent>) => void)
    | null
    | undefined;
</script>

<form method="POST" use:enhance>
  <div class="grid grid-cols-1 gap-4">
    {#each oauthData as data}
      <Form.Button class="w-full h-12" formaction={data.action}>
        <div class="grid grid-cols-3 gap-4 w-2/3 items-center">
          <div class="w-9 h-9">
            <svelte:component this={data.logo} />
          </div>
          <span class="col-span-2 w-full items-center">{data.name}</span>
        </div>
      </Form.Button>
    {/each}

    <Button class="w-full h-12" on:click={onEmailClicked}>
      <div class="grid grid-cols-3 gap-4 w-2/3 items-center">
        <div class="w-9 h-9">
          <svelte:component this={Email} />
        </div>
        <span class="col-span-2 w-full items-center">Email</span>
      </div>
    </Button>
  </div>
</form>
