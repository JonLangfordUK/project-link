<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import type { Session, SupabaseClient } from "@supabase/supabase-js";
  import { goto } from "$app/navigation";

  let className: string = "";
  export { className as class };

  export let session: Session | null;
  export let supabase: SupabaseClient;

  async function logout() {
    await supabase.auth.signOut();
    goto("/", { invalidateAll: true });
  }

  function getInitials(name: string): string {
    return name
      .split(/[\s'-]+/) // Split by spaces, apostrophes, and hyphens
      .map((part) => part.charAt(0).toUpperCase()) // Take the first character and convert to uppercase
      .join(""); // Join them together
  }
</script>

<div class={className}>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button
        variant="ghost"
        builders={[builder]}
        class="relative h-10 w-10 rounded-full"
      >
        <Avatar.Root class="h-10 w-10">
          <Avatar.Fallback
            >{getInitials(
              session?.user.user_metadata.full_name
            )}</Avatar.Fallback
          >
        </Avatar.Root>
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56" align="end">
      <DropdownMenu.Label class="font-normal">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">
            {session?.user.user_metadata.full_name}
          </p>
          <p class="text-muted-foreground text-xs leading-none">
            {session?.user.email}
          </p>
        </div>
      </DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Item>Admin</DropdownMenu.Item>
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
      <DropdownMenu.Item on:click={logout}>Log out</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
