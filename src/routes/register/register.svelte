<script lang="ts">
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";

  import google_logo from "$lib/assets/logos--google-icon.svg";
  import github_logo from "$lib/assets/logos--github-icon.svg";
  import discord_logo from "$lib/assets/logos--discord-icon.svg";
  import email_logo from "$lib/assets/email.svg";
  import Button from "$lib/components/ui/button/button.svelte";
  import { boolean, string } from "zod";
  import { onMount } from "svelte";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
  });

  const { form: formData, enhance } = form;

  const enum PageInfo {
    Provider,
    Email,
    Details,
    Password,
  }

  $: currentRegisterPageIndex = PageInfo.Provider;

  $: isEmailFormValid =
    $formData.email &&
    $formData.emailConfirm &&
    $formData.email === $formData.emailConfirm;
  $: isDetailsValid =
    $formData.username && $formData.firstName && $formData.secondName;
  $: isPasswordsValid =
    $formData.password &&
    $formData.passwordConfirm &&
    $formData.password === $formData.passwordConfirm;
  $: isFormValid = isEmailFormValid && isDetailsValid && isPasswordsValid;

  async function ShowSubPage(nextSubPage: string) {
    const pages = ["Provider", "Email", "Details", "Passwords"];
    pages.forEach((page) => {
      const element = document.getElementById(page);
      if (element) {
        element.style.display = "none";
      }
    });

    const element = document.getElementById(nextSubPage);
    if (element) {
      element.style.display = "block";
    }
  }

  onMount(() => {
    ShowSubPage("Provider");
  });
</script>

<form method="POST" use:enhance>
  <div id="Provider">
    <Form.Button
      formaction="?/registerOAuth&provider=google"
      class="w-full h-12 mb-4"
    >
      <div class="grid grid-cols-3 gap-4 w-2/3">
        <img class="size-6 mr-4 w-full" src={google_logo} alt="Google" />
        <span class="col-span-2 w-full">Google</span>
      </div>
    </Form.Button>

    <Form.Button
      formaction="?/registerOAuth&provider=github"
      class="w-full h-12 mb-4"
    >
      <div class="grid grid-cols-3 gap-4 w-2/3">
        <img class="size-6 mr-4 w-full" src={github_logo} alt="Github" />
        <span class="col-span-2 w-full">Github</span>
      </div>
    </Form.Button>

    <Form.Button
      formaction="?/registerOAuth&provider=discord"
      class="w-full h-12 mb-4"
    >
      <div class="grid grid-cols-3 gap-4 w-2/3">
        <img class="size-6 mr-4 w-full" src={discord_logo} alt="Discord" />
        <span class="col-span-2 w-full">Discord</span>
      </div>
    </Form.Button>

    <Button class="w-full h-12" on:click={() => ShowSubPage("Email")}>
      <div class="grid grid-cols-3 gap-4 w-2/3">
        <img class="size-6 mr-4 w-full" src={email_logo} alt="Email" />
        <span class="col-span-2 w-full">Email</span>
      </div>
    </Button>
  </div>
  <div id="Email">
    <h2 class="mb-4 text-2xl font-bold">Email</h2>

    <Form.Field {form} name="email" class="mb-4">
      <Form.Control let:attrs>
        <Form.Label>Email</Form.Label>
        <Input {...attrs} bind:value={$formData.email} type="email" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="emailConfirm" class="mb-4">
      <Form.Control let:attrs>
        <Form.Label>Email Confirmation</Form.Label>
        <Input {...attrs} bind:value={$formData.emailConfirm} type="email" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Button
      class="w-full h-12"
      on:click={() => ShowSubPage("Details")}
      disabled={!isEmailFormValid}
    >
      Next
    </Button>
  </div>
  <div id="Details">
    <h2 class="mb-4 text-2xl font-bold">Details</h2>

    <Form.Field {form} name="username" class="mb-4">
      <Form.Control let:attrs>
        <Form.Label>Username</Form.Label>
        <Input {...attrs} bind:value={$formData.username} type="text" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="firstName" class="mb-4">
      <Form.Control let:attrs>
        <Form.Label>First Name</Form.Label>
        <Input {...attrs} bind:value={$formData.firstName} type="text" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="secondName" class="mb-4">
      <Form.Control let:attrs>
        <Form.Label>Second Name</Form.Label>
        <Input {...attrs} bind:value={$formData.secondName} type="text" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Button
      class="w-full h-12"
      on:click={() => ShowSubPage("Passwords")}
      disabled={!isDetailsValid}
    >
      Next
    </Button>
  </div>
  <div id="Passwords">
    <h2 class="mb-4 text-2xl font-bold">Password</h2>

    <Form.Field {form} name="password" class="mb-4">
      <Form.Control let:attrs>
        <Form.Label>Password</Form.Label>
        <Input {...attrs} bind:value={$formData.password} type="password" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="passwordConfirm" class="mb-4">
      <Form.Control let:attrs>
        <Form.Label>Password Confirm</Form.Label>
        <Input
          {...attrs}
          bind:value={$formData.passwordConfirm}
          type="password"
        />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Button
      class="w-full h-12"
      disabled={!isFormValid}
      formaction="?/registerEmail"
    >
      Create Account
    </Form.Button>
  </div>
</form>
