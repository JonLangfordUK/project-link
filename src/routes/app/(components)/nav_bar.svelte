<script lang="ts">
  import Project from "./project.svelte";
  import Search from "./search.svelte";
  import User from "./user.svelte";
  import { page } from "$app/stores";
  import type { Session, SupabaseClient } from "@supabase/supabase-js";
  import type { Route } from "./route";

  export let routes: Route[];
  export let userRoutes: Route[];

  export let projects: Project[];

  export let session: Session | null;
  export let supabase: SupabaseClient;

  $: currentRoute = $page.url.pathname;
  $: isActive = (href: string) => currentRoute === href;
</script>

<div class="border-b px-4 py-2">
  <div class="flex items-center gap-2">
    <Project {projects} />

    <nav class="flex gap-2 text-sm font-medium items-center">
      {#each routes as route}
        <a
          href={route.route}
          class={isActive(route.route)
            ? "text-foreground hover:text-foreground transition-colors p-2"
            : "text-muted-foreground hover:text-foreground transition-colors p-2"}
        >
          {route.title}
        </a>
      {/each}
    </nav>

    <div class="flex-grow">
      <div class="flex justify-end">
        <Search />
      </div>
    </div>

    <User {session} {supabase} {userRoutes} />
  </div>
</div>
