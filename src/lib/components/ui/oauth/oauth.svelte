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
  export let onEmailClicked: ButtonEventHandler<MouseEvent> | null | undefined;

</script>

<form method="POST" use:enhance>
  {#each oauthData as { logoComponent, name, action }}
    <Form.Button class="w-full h-12 mb-4 formaction={action}">
      <div class="grid grid-cols-3 gap-4 w-2/3">
        <img class="size-6 mr-4 w-full" src={logoComponent} alt={name} />
        <span class="col-span-2 w-full">{name}</span>
      </div>
    </Form.Button>
  {/each}
</form>

<Button class="w-full h-12 mb-4" on:click={onEmailClicked}>
  <div class="grid grid-cols-3 gap-4 w-2/3">
    <img class="size-6 mr-4 w-full" src={email_logo} alt="Email" />
    <span class="col-span-2 w-full">Email</span>
  </div>
</Button>