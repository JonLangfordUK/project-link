<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import Button from "$lib/components/ui/button/button.svelte";

  import email_logo from "$lib/assets/email.svg";
  import { enhance } from "$app/forms";
  import type { ButtonEventHandler } from "bits-ui";

  export class OAuthData {
    logoComponent: Component;
    name: string = "";
    action: string = "";
  }

  export let oauthData: OAuthData[] = [];
  export let onEmailClicked: ((e: ButtonEventHandler<MouseEvent>) => void) | null | undefined;

</script>

<form method="POST" use:enhance>  
  <div class="grid grid-cols-1 gap-4">
    {#each oauthData as { logoComponent, name, action }}
      <Form.Button class="w-full h-12" formaction={action}>
        <div class="grid grid-cols-3 gap-4 w-2/3">
          <img class="size-6 mr-4 w-full" src={logoComponent} alt={name} />
          <span class="col-span-2 w-full">{name}</span>
        </div>
      </Form.Button>
    {/each}

    <Button class="w-full h-12" on:click={onEmailClicked}>
      <div class="grid grid-cols-3 gap-4 w-2/3">
        <img class="size-6 mr-4 w-full" src={email_logo} alt="Email" />
        <span class="col-span-2 w-full">Email</span>
      </div>
    </Button>
  </div>
</form>

