<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Divider from "$lib/components/ui/divider/divider.svelte";

  import type { ButtonEventHandler } from "bits-ui";

  import google_logo from "$lib/assets/logos--google-icon.svg";
  import github_logo from "$lib/assets/logos--github-icon.svg";
  import gitlab_logo from "$lib/assets/logos--gitlab.svg";
  import microsoft_windows_logo from "$lib/assets/logos--microsoft-windows-icon.svg";
  import email_logo from "$lib/assets/email.svg";

  let className: string = "";
  export { className as class };

  export let google_click:
    | ((e: ButtonEventHandler<MouseEvent>) => void)
    | null
    | undefined = undefined;
  export let github_click:
    | ((e: ButtonEventHandler<MouseEvent>) => void)
    | null
    | undefined = undefined;
  export let gitlab_click:
    | ((e: ButtonEventHandler<MouseEvent>) => void)
    | null
    | undefined = undefined;
  export let windows_click:
    | ((e: ButtonEventHandler<MouseEvent>) => void)
    | null
    | undefined = undefined;
  export let email_click:
    | ((e: ButtonEventHandler<MouseEvent>) => void)
    | null
    | undefined = undefined;
</script>

<div class={className}>
  <Button class="w-full h-12 mb-4" on:click={google_click}>
    <div class="grid grid-cols-3 gap-4 w-2/3">
      <img class="size-6 mr-4 w-full" src={google_logo} alt="Google" />
      <span class="col-span-2 w-full">Google</span>
    </div>
  </Button>

  <Button class="w-full h-12 mb-4" on:click={github_click}>
    <div class="grid grid-cols-3 gap-4 w-2/3">
      <img class="size-6 mr-4 w-full" src={github_logo} alt="Github" />
      <span class="col-span-2 w-full">Github</span>
    </div>
  </Button>

  <Button class="w-full h-12 mb-4" on:click={gitlab_click}>
    <div class="grid grid-cols-3 gap-4 w-2/3">
      <img class="size-6 mr-4 w-full" src={gitlab_logo} alt="Gitlab" />
      <span class="col-span-2 w-full">Gitlab</span>
    </div>
  </Button>

  <Button class="w-full h-12 mb-4" on:click={windows_click}>
    <div class="grid grid-cols-3 gap-4 w-2/3">
      <img
        class="size-6 mr-4 w-full"
        src={microsoft_windows_logo}
        alt="Windows"
      />
      <span class="col-span-2 w-full">Windows</span>
    </div>
  </Button>

  <Button class="w-full h-12" on:click={email_click}>
    <div class="grid grid-cols-3 gap-4 w-2/3">
      <img class="size-6 mr-4 w-full" src={email_logo} alt="Email" />
      <span class="col-start-2 col-span-2 w-full">Email</span>
    </div>
  </Button>
</div>
