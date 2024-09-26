<script lang="ts">
  import NavBar from "./(components)/nav_bar.svelte";
  import type { Project } from "./(components)/project.ts";
  import { routes } from "./nav_config";
  import { userRoutes } from "./user_nav_config";

  import GoogleLogo from "$lib/assets/icons/google.svelte";

  export let data;
  $: ({ session, supabase } = data);

  const projects: Project[] = [
    {
      title: "Example Project A",
      name: "pj-a",
      icon: GoogleLogo,
    },
    {
      title: "Another Project B",
      name: "pj-b",
      icon: GoogleLogo,
    },
    {
      title: "Yet Another Project C",
      name: "pj-c",
      icon: GoogleLogo,
    },
  ];
</script>

<div class="flex flex-col h-screen">
  <NavBar {routes} {userRoutes} {projects} {session} {supabase} />

  <div class="flex flex-col flex-grow p-4">
    <slot class="flex-grow m-4" />
  </div>
</div>
