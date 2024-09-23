export const prerender = false;

import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import type { Provider } from "@supabase/supabase-js";

const OAUTH_PROVIDERS = ["google", "discord", "github"];

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  loginEmail: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    const supabase = event.locals.supabase;
    const { email, password } = form.data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error);
      return setError(form, "password", error.message);
    }

    return redirect(303, "/");
  },
  loginOAuth: async (event) => {
    const provider = event.url.searchParams.get("provider") as Provider;
    if (!provider) {
      return fail(400, {
        error: "Provider null",
        message: "No provider given!",
      });
    }

    if (!OAUTH_PROVIDERS.includes(provider)) {
      return fail(400, {
        error: "Provider not supported",
        message: "Unsupported OAuth provider!",
      });
    }

    const { data, error: err } =
      await event.locals.supabase.auth.signInWithOAuth({
        provider: provider,
      });

    if (err) {
      console.log(err);
      return fail(400, { message: "Something went wrong!" });
    }

    throw redirect(303, data.url);
  },
};
