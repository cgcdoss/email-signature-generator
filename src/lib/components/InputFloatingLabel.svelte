<script lang="ts">
    import { imask } from "@imask/svelte";

    export let label: string;
    export let value: string;
    export let disabled = false;
    export let inputmode:
        | "text"
        | "search"
        | "none"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | null
        | undefined = "text";

    export let mask: string | undefined = undefined;
</script>

<div class="relative">
    <input
        type="text"
        {inputmode}
        id={"floating_filled_" + label}
        class="block pt-4 w-full text-gray-900 focus:outline-none peer"
        placeholder=" "
        bind:value
        on:paste
        {disabled}
        use:imask={mask && {
            mask,
        }}
    />
    <label
        for={"floating_filled_" + label}
        class="absolute select-none cursor-text px-2 text-sm text-gray-500 duration-200 transform -translate-y-6 scale-75 top-3.5 z-10 origin-[0] start-2.5 bg-white peer-disabled:bg-transparent peer-disabled:cursor-not-allowed peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        {label}
    </label>
</div>
