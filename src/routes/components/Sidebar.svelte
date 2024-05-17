<script lang="ts">
    import InputFloatingLabel from "$lib/components/InputFloatingLabel.svelte";
    import { informacoes } from "$lib/store";
    import { getLowerQualityImg } from "$lib/utils";

    function handleFileInputChange(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    $informacoes.imgFile = getLowerQualityImg(img);
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
                $informacoes.imgFile = getLowerQualityImg(img);
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
        $informacoes.imgFile = "";
    }
</script>

<section
    class="form flex flex-col gap-2 col-span-4 2xl:col-span-3 px-4 py-8 sm:max-h-full sm:overflow-auto shadow-md"
>
    <h2 class="text-xl">
        Preencha as informações abaixo e depois clique em Copiar assinatura
    </h2>
    <p class="mb-2">
        Depois basta colar (Ctrl + V) no campo de texto do seu serviço de e-mail
    </p>

    <div class="p-2 px-4 bg-gray-200 -mx-4 mb-2">Geral</div>

    <InputFloatingLabel label="Nome *" bind:value={$informacoes.name} />
    <InputFloatingLabel label="Cargo" bind:value={$informacoes.cargo} />
    <InputFloatingLabel label="Empresa" bind:value={$informacoes.empresa} />
    <InputFloatingLabel label="Telefone" bind:value={$informacoes.telefone} />

    <div class="flex max-2xl:flex-col 2xl:items-center max-2xl:mb-3 gap-2">
        <InputFloatingLabel
            label="URL da imagem/Ctrl + V"
            bind:value={$informacoes.img}
            on:paste={handleOnPast}
            disabled={!!$informacoes.imgFile}
        />
        <p class="text-center">ou</p>
        <input
            type="file"
            accept="image/*"
            on:change={handleFileInputChange}
            disabled={!!$informacoes.img}
        />
        {#if $informacoes.imgFile}
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
        bind:value={$informacoes.redesSociais.linkedin}
    />
    <InputFloatingLabel
        label="Instagram"
        bind:value={$informacoes.redesSociais.instagram}
    />
</section>
