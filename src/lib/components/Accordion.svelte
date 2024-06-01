<script lang="ts">
    import { slide } from "svelte/transition";

    export let title = "";
    export let open = false;

    const handleClick = () => (open = !open);
</script>

<button class="flex justify-between divider my-2" on:click={handleClick}>
    <div>{title}</div>
    <div class="transition-all rotate-180" class:rotate-0={open}>&#94;</div>
</button>

{#if open}
    <div transition:slide class="space-y-2">
        <slot />
    </div>
{/if}

<style>
    .divider {
        @apply from-primary-600 to-primary-400 bg-gradient-to-r text-white font-bold p-2 px-4 -mx-4 hover:opacity-70 transition-all;
    }
</style>
