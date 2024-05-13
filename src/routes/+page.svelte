<script lang="ts">
    import { getLowerQualityImg } from "$lib/utils";

    let img = "";
    let imgFile: string;
    let name = "";
    let cargo = "";
    let empresa = "";
    let telefone = "";

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

<main class="flex flex-col sm:grid grid-cols-1 sm:grid-cols-10 min-h-[100vh]">
    <section
        class="form flex flex-col gap-2 col-span-3 px-4 py-8 sm:min-h-[100vh] shadow-md"
    >
        <h2 class="text-xl">
            Preencha as informações abaixo e depois clique em Copiar assinatura
        </h2>
        <p class="mb-2">
            Depois basta colar (Ctrl + V) no campo de texto do seu serviço de
            e-mail
        </p>

        <div class="flex max-sm:flex-col sm:items-center max-sm:mb-3 gap-2">
            <input
                type="text"
                placeholder="URL da imagem"
                bind:value={img}
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
                <button class="bg-slate-300 p-1" on:click={cleanImgFile}>
                    Limpar
                </button>
            {/if}
        </div>
        <input type="text" placeholder="Nome" bind:value={name} />
        <input type="text" placeholder="Cargo" bind:value={cargo} />
        <input type="text" placeholder="Empresa" bind:value={empresa} />
        <input type="text" placeholder="Telefone" bind:value={telefone} />

        {#if name}
            <button
                class="bg-slate-600 text-white hover:bg-slate-700 p-4 transition-colors"
                on:click={copyAll}
            >
                Copiar assinatura
            </button>
        {/if}
    </section>

    <section
        class="result flex flex-1 col-span-7 sm:min-h-[100vh] bg-gray-300 items-center justify-center py-8"
    >
        <div
            class="fake-email w-11/12 sm:w-1/2 sm:h-1/2 bg-white shadow-md p-2"
        >
            <h2 class="bg-blue-200 pl-2">Novo email</h2>
            <p class="border-b my-2">De</p>
            <p class="border-b">Para</p>

            <p class="my-4">Atenciosamente,</p>

            <div id="signature">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {#if img || imgFile}
                                    <div>
                                        <img
                                            src={img || imgFile}
                                            alt="logo assinatura"
                                            width="150"
                                            height="150"
                                        />
                                    </div>
                                {/if}
                            </td>
                            <td class="align-top pl-2">
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
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</main>
