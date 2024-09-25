<script lang="ts">
  import type { ComponentType } from "svelte";
  import type { Icon } from "lucide-svelte";
  import * as Select from "$lib/components/ui/select/index.js";
  import Gmail from "$lib/assets/icons/gmail.svelte";

  export type Project = {
    title: string;
    name: string;
    icon: ComponentType<Icon>;
  };

  let className: string = "";
  export { className as class };

  export let projects: Project[] = [
    {
      title: "Project A",
      name: "pj-a",
      icon: Gmail,
    },
    {
      title: "Project B",
      name: "pj-b",
      icon: Gmail,
    },
    {
      title: "Project C",
      name: "pj-c",
      icon: Gmail,
    },
  ];

  let selectedProject = projects[0];
</script>

<div class={className}>
  <Select.Root
    portal={null}
    selected={{ value: selectedProject.name, label: selectedProject.title }}
    onSelectedChange={(e) => {
      selectedProject =
        projects.find((project) => project.name === e?.value) || projects[0];
    }}
  >
    <Select.Trigger
      class={"flex items-center gap-2 w-[200px] h-10 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"}
      aria-label="Select account"
    >
      <span class="pointer-events-none">
        <svelte:component this={selectedProject.icon} />
        <span class="ml-2">
          {selectedProject.title}
        </span>
      </span>
    </Select.Trigger>
    <Select.Content sameWidth={true}>
      <Select.Group>
        {#each projects as project}
          <Select.Item value={project.name} label={project.title}>
            <div
              class="[&_svg]:text-foreground flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
            >
              <svelte:component
                this={project.icon}
                aria-hidden="true"
                class="text-foreground size-4 shrink-0"
              />
              {project.title}
            </div>
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input hidden name="account" />
  </Select.Root>
</div>
