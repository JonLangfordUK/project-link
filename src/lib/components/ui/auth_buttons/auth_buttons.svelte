<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Form from "$lib/components/ui/form";
  import Divider from "$lib/components/ui/divider/divider.svelte";

  import type { ButtonEventHandler } from "bits-ui";

  import google_logo from "$lib/assets/logos--google-icon.svg";
  import github_logo from "$lib/assets/logos--github-icon.svg";
  import discord_logo from "$lib/assets/logos--discord-icon.svg";
  import email_logo from "$lib/assets/email.svg";

  export let google_action: string | undefined = undefined;
  export let github_action: string | undefined = undefined;
  export let discord_action: string | undefined = undefined;
  export let email_action: string | undefined = undefined;
</script>

<Form.Button formaction={google_action} class="w-full h-12 mb-4">
  <div class="grid grid-cols-3 gap-4 w-2/3">
    <img class="size-6 mr-4 w-full" src={google_logo} alt="Google" />
    <span class="col-span-2 w-full">Google</span>
  </div>
</Form.Button>

<Form.Button formaction={github_action} class="w-full h-12 mb-4">
  <div class="grid grid-cols-3 gap-4 w-2/3">
    <img class="size-6 mr-4 w-full" src={github_logo} alt="Github" />
    <span class="col-span-2 w-full">Github</span>
  </div>
</Form.Button>

<Form.Button formaction={discord_action} class="w-full h-12 mb-4">
  <div class="grid grid-cols-3 gap-4 w-2/3">
    <img class="size-6 mr-4 w-full" src={discord_logo} alt="Discord" />
    <span class="col-span-2 w-full">Discord</span>
  </div>
</Form.Button>

<Form.Button formaction={email_action} class="w-full h-12">
  <div class="grid grid-cols-3 gap-4 w-2/3">
    <img class="size-6 mr-4 w-full" src={email_logo} alt="Email" />
    <span class="col-start-2 col-span-2 w-full">Email</span>
  </div>
</Form.Button>
