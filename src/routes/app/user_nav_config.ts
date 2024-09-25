import type { Icon } from "lucide-svelte";
import type { ComponentType } from "svelte";
import type { Route } from "./(components)/nav_bar.svelte"

export const userRoutes: Route[] = [
	{
		title: "Profile",
		route: "/app/profile",
	},
	{
		title: "Settings",
		route: "/app/settings",
	},
	{
		title: "Site Admin",
		route: "/app/site_admin",
	},
];