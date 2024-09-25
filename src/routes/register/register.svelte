<script lang="ts">
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { onMount } from "svelte";

  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { OAuth, OAuthData } from "$lib/components/ui/oauth";

  import DiscordLogo from "$lib/assets/icons/discord.svelte";
  import GithubLogo from "$lib/assets/icons/github.svelte";
  import GoogleLogo from "$lib/assets/icons/google.svelte";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
  });

  const { form: formData, enhance } = form;

  const oauthData: OAuthData[] = [
    {
      logo: GoogleLogo,
      name: "Google",
      action: "?/registerOAuth&provider=google",
    },
    {
      logo: GithubLogo,
      name: "Github",
      action: "?/registerOAuth&provider=github",
    },
    {
      logo: DiscordLogo,
      name: "Discord",
      action: "?/registerOAuth&provider=discord",
    },
  ];

  onMount(() => {
    ShowSubPage("Provider");
  });

  async function ShowSubPage(nextSubPage: string) {
    const pages = ["Provider", "Email"];
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
</script>

<div>
  <div id="Provider">
    <OAuth
      {oauthData}
      onEmailClicked={() => {
        ShowSubPage("Email");
      }}
    />
  </div>

  <form method="POST" use:enhance>
    <div id="Email">
      <div class="grid grid-cols-1 gap-2">
        <Form.Field {form} name="email">
          <Form.Control let:attrs>
            <Form.Label>Email</Form.Label>
            <Input {...attrs} bind:value={$formData.email} type="email" />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="emailConfirm">
          <Form.Control let:attrs>
            <Form.Label>Email Confirmation</Form.Label>
            <Input
              {...attrs}
              bind:value={$formData.emailConfirm}
              type="email"
            />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>

        <Separator class="my-2" />

        <Form.Field {form} name="password">
          <Form.Control let:attrs>
            <Form.Label>Password</Form.Label>
            <Input {...attrs} bind:value={$formData.password} type="password" />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="passwordConfirm">
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

        <Form.Button class="w-full h-12" formaction="?/registerEmail">
          Create Account
        </Form.Button>
      </div>
    </div>
  </form>
</div>
