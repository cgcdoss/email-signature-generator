<script lang="ts">
    export let label: string;
    export let value: string;
    export let disabled = false;
</script>

<div class="relative">
    <input
        type="text"
        id={"floating_filled_" + label}
        class="block pt-4 w-full text-gray-900 focus:outline-none focus:border-blue-600 peer"
        placeholder=" "
        bind:value
        on:paste
        {disabled}
    />
    <label
        for={"floating_filled_" + label}
        class="absolute text-sm text-gray-500 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:bg-white peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        {label}
    </label>
</div>
