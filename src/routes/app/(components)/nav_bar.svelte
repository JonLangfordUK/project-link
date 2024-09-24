<script lang="ts">
  import Project from "./project.svelte";
  import Search from "./search.svelte";
  import User from "./user.svelte";

  export type Route = {
    title: string;
    route: string;
  };

  export let routes: Route[];
</script>

<div class="border-b">
  <div class="flex h-16 items-center px-4">
    <Project />

    <nav class="flex items-center space-x-4 lg:space-x-6 mx-6">
      {#each routes as route}
        <a
          href={route.route}
          class="hover:text-primary text-sm font-medium transition-colors"
        >
          {route.title}
        </a>
      {/each}
    </nav>

    <div class="ml-auto flex items-center space-x-4">
      <Search />
      <User />
    </div>
  </div>
</div>
