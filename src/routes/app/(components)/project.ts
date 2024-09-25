import type { ComponentType } from "svelte";
import type { Icon } from "lucide-svelte";

export type Project = {
    title: string;
    name: string;
    icon: ComponentType<Icon>;
  };