<script lang="ts">
    import { base } from "$app/paths";
    import FakeContent from "$lib/components/FakeContent.svelte";
    import InputFloatingLabel from "$lib/components/InputFloatingLabel.svelte";
    import { getLowerQualityImg } from "$lib/utils";

    let img = "";
    let imgFile: string;
    let name = "";
    let cargo = "";
    let empresa = "";
    let telefone = "";
    let redesSociais = {
        linkedin: "",
        instagram: "",
    };

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

    function handleFileInputChange(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    imgFile = getLowerQualityImg(img);
                };
                img.src = e.target!.result as string;
            };
            reader.readAsDataURL(file);
        }
    }

    function handleOnPast(event: ClipboardEvent) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                imgFile = getLowerQualityImg(img);
            };
            img.src = e.target!.result as string;
        };
        reader.readAsDataURL(event.clipboardData?.files[0]!);
    }

    function cleanImgFile() {
        const input = document.querySelector(
            'input[type="file"]'
        ) as HTMLInputElement;
        input.value = "";
        imgFile = "";
    }
</script>

<svelte:head>
    <title>Gerar assintatura de e-mail (sem cadastro)</title>
</svelte:head>

<header class="p-4 bg-gray-600">
    <h1 class="text-2xl text-white">Gerar Assinatura de E-mail</h1>
</header>

<main
    class="flex flex-col sm:grid grid-cols-1 sm:grid-cols-10 h-[calc(100vh-64px)]"
>
    <section
        class="form flex flex-col gap-2 col-span-3 px-4 py-8 sm:max-h-full sm:overflow-auto shadow-md"
    >
        <h2 class="text-xl">
            Preencha as informações abaixo e depois clique em Copiar assinatura
        </h2>
        <p class="mb-2">
            Depois basta colar (Ctrl + V) no campo de texto do seu serviço de
            e-mail
        </p>

        <div class="p-2 px-4 bg-gray-200 -mx-4 mb-2">Geral</div>

        <InputFloatingLabel label="Nome *" bind:value={name} />
        <InputFloatingLabel label="Cargo" bind:value={cargo} />
        <InputFloatingLabel label="Empresa" bind:value={empresa} />
        <InputFloatingLabel label="Telefone" bind:value={telefone} />

        <div class="flex max-sm:flex-col sm:items-center max-sm:mb-3 gap-2">
            <InputFloatingLabel
                label="URL da imagem/Ctrl + V"
                bind:value={img}
                on:paste={handleOnPast}
                disabled={!!imgFile}
            />
            <p class="text-center">ou</p>
            <input
                type="file"
                accept="image/*"
                on:change={handleFileInputChange}
                disabled={!!img}
            />
            {#if imgFile}
                <button
                    class="bg-slate-300 p-1 hover:bg-slate-400 transition-colors"
                    on:click={cleanImgFile}
                >
                    Limpar
                </button>
            {/if}
        </div>

        <div class="p-2 px-4 bg-gray-200 -mx-4 my-2">Redes sociais</div>

        <InputFloatingLabel
            label="LinkedIn"
            bind:value={redesSociais.linkedin}
        />
        <InputFloatingLabel
            label="Instagram"
            bind:value={redesSociais.instagram}
        />
    </section>

    <section
        class="result flex flex-col flex-1 col-span-7 sm:h-full bg-gray-300 items-center justify-center py-8"
    >
        <div
            class="fake-email w-11/12 sm:w-1/2 sm:h-1/2 bg-white shadow-md p-2"
        >
            <h2 class="bg-gray-200 text-gray-500 pl-2 p-3 -m-2 mb-3 font-bold">
                Pré-visualização da assinatura
            </h2>
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
                            <td
                                class="align-top pl-2"
                                class:pl-2={img || imgFile}
                            >
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
            class="bg-slate-600 text-white hover:bg-slate-700 p-4 transition-all w-[200px] mt-4"
            class:opacity-0={!name}
            on:click={copyAll}
        >
            Copiar assinatura
        </button>
    </section>
</main>
