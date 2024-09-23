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
