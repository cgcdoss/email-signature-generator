<script lang="ts">
    import FakeContent from "$lib/components/FakeContent.svelte";
    import { currentTemplate, informacoes } from "$lib/store";

    $: ({ name } = $informacoes);

    // TODO: substituir uso do execCommand('copy')
    function copyAll() {
        const signature = document.getElementById("signature");
        const range = document.createRange();
        range.selectNode(signature!);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
        document.execCommand("copy");
        window.getSelection()?.removeAllRanges();
        alert("Assinatura copiada para a área de transferência!");
    }
</script>

<section
    class="result flex flex-col flex-1 col-span-6 2xl:col-span-7 sm:h-full gradient items-center justify-center py-8 sm:overflow-auto"
>
    <div
        class="fake-email min-w-[90%] sm:min-w-[55%] min-h-[55%] max-w-[95%] bg-white shadow-lg p-2 transition-all pb-4"
    >
        <div class="bg-gray-200 pl-2 p-2 -m-2 mb-3 flex items-center">
            <div class="flex gap-2">
                <div class="rounded-full bg-red-500 h-3 w-3"></div>
                <div class="rounded-full bg-yellow-500 h-3 w-3"></div>
                <div class="rounded-full bg-green-500 h-3 w-3"></div>
            </div>
            <h2 class="text-gray-500 font-bold text-center flex-1">
                Pré-visualização da assinatura
            </h2>
        </div>

        <p class="border-b my-2 text-gray-400">Para</p>
        <p class="border-b text-gray-400">Assunto</p>

        <FakeContent />

        <p class="my-4">Atenciosamente,</p>

        <div id="signature">
            <svelte:component this={$currentTemplate} />
        </div>
    </div>

    <button
        class="bg-primary-600/80 text-white hover:bg-primary-800 p-4 transition-all w-[200px] mt-4"
        class:opacity-0={!name}
        class:pointer-events-none={!name}
        on:click={copyAll}
    >
        Copiar assinatura
    </button>
</section>

<style>
    .gradient {
        @apply from-primary-400 to-primary-200 bg-gradient-to-r;
        background-image: linear-gradient(
            to right,
            var(--tw-gradient-from) 0%,
            var(--tw-gradient-to) 90%
        );
    }
</style>
