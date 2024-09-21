import { Button } from "$lib/components/ui/button/index.js";
import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import type { Provider } from "@supabase/supabase-js";

const OAUTH_PROVIDERS = [
    "google",
    "discord",
    "github"
]

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    login: async (event) => {
        const provider = event.url.searchParams.get("provider") as Provider;

        if (provider) {
            if (!OAUTH_PROVIDERS.includes(provider)) {
                return fail(400, {
                    error: 'Provider not supported',
                    message: 'Unsupported OAuth provider!'
                });
            }

            const { data, error: err } = await event.locals.supabase.auth.signInWithOAuth({
                provider: provider
            });

            if (err) {
                console.log(err);
                return fail(400, { message: 'Something went wrong!' });
            }

            throw redirect(303, data.url);
        }

        const form = await superValidate(event, zod(formSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        // Create account with Supabase
        const supabase = event.locals.supabase;
        const { email, password } = form.data;
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.log(error);
            return setError(form, "password", "Invalid and/or password");
        }
        else {
            return redirect(303, "/");
        };

        throw redirect(303, "/");
    },
};