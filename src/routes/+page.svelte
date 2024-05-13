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
</script>

<main class="grid grid-cols-2 gap-2">
    <section class="form flex flex-col gap-2 mr-4">
        <div class="flex items-center gap-2">
            <input
                type="text"
                placeholder="URL da imagem"
                bind:value={img}
                disabled={!!imgFile}
            />
            <p>ou</p>
            <input
                type="file"
                accept="image/*"
                on:change={handleFileInputChange}
                disabled={!!img}
            />
        </div>
        <input type="text" placeholder="Nome" bind:value={name} />
        <input type="text" placeholder="Cargo" bind:value={cargo} />
        <input type="text" placeholder="Empresa" bind:value={empresa} />
        <input type="text" placeholder="Telefone" bind:value={telefone} />
    </section>

    {#if name}
        <section
            class="result flex flex-col gap-4 border-l border-gray-400 pl-4"
        >
            <div id="signature" class="flex gap-2">
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

                <div class="flex flex-col gap-1">
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
                </div>
            </div>

            <button
                class="bg-slate-600 text-white hover:bg-slate-700 p-4 transition-colors"
                on:click={copyAll}
            >
                Copiar
            </button>
        </section>
    {/if}
</main>
