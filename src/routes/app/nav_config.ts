import type { Icon } from "lucide-svelte";
import type { ComponentType } from "svelte";
import type { Route } from "./(components)/nav_bar.svelte"
import * as Icons from "../icons.js";

export const routes: Route[] = [
	{
		title: "Dashboard",
		route: "/app",
	},
	{
		title: "Browser",
		route: "/app/browser",
	},
	{
		title: "Tasks",
		route: "/app/tasks",
	},
	{
		title: "Reviews",
		route: "/app/reviews",
	},
];