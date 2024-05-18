<script lang="ts">
    import { base } from "$app/paths";
    import FakeContent from "$lib/components/FakeContent.svelte";
    import { informacoes } from "$lib/store";

    $: ({ img, imgFile, name, cargo, empresa, telefone, redesSociais } =
        $informacoes);

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
        class="fake-email min-w-[90%] sm:min-w-[50%] min-h-[50%] bg-white shadow-lg p-2 transition-all"
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
            <table>
                <tbody>
                    <tr>
                        {#if img || imgFile}
                            <td class="align-top">
                                <div>
                                    <img
                                        src={img || imgFile}
                                        alt="logo assinatura"
                                        width="100"
                                        height="100"
                                    />
                                </div>
                            </td>
                        {/if}
                        <td class="align-top pl-2" class:pl-2={img || imgFile}>
                            <h2 class="text-xl font-bold">{name}</h2>
                            {#if cargo || (cargo && empresa)}
                                <h3 class="text-lg">
                                    {cargo}
                                    {#if empresa}em {empresa}{/if}
                                </h3>
                            {/if}
                            {#if telefone}
                                <p>{telefone}</p>
                            {/if}

                            <div class="flex gap-1 mt-1">
                                {#if redesSociais.linkedin}
                                    <a href={redesSociais.linkedin}>
                                        <img
                                            src="{base}/linkedin.png"
                                            alt="Linkedin"
                                            width="16"
                                            height="16"
                                        />
                                    </a>
                                {/if}
                                {#if redesSociais.instagram}
                                    <a href={redesSociais.instagram}>
                                        <img
                                            src="{base}/instagram.png"
                                            alt="Instagram"
                                            width="16"
                                            height="16"
                                        />
                                    </a>
                                {/if}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
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
        @apply from-primary-300/70 to-primary-400;
        background-image: linear-gradient(
            320deg,
            var(--tw-gradient-from) 0%,
            var(--tw-gradient-to) 80%
        );
    }
</style>
