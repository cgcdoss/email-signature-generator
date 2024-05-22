<script lang="ts">
    import InputFloatingLabel from "$lib/components/InputFloatingLabel.svelte";
    import { informacoes as infos } from "$lib/store";
    import { getLowerQualityImg } from "$lib/utils";

    function handleFileInputChange(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    $infos.imgFile = getLowerQualityImg(img);
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
                $infos.imgFile = getLowerQualityImg(img);
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
        $infos.imgFile = "";
    }
</script>

<section
    class="form flex flex-col gap-3 col-span-4 2xl:col-span-3 px-4 py-8 sm:max-h-full sm:overflow-auto shadow-md bg-primary-800 text-primary-100"
>
    <h2 class="text-xl">
        Preencha as informações abaixo e depois clique em Copiar assinatura
    </h2>
    <p class="mb-2">
        Depois basta colar (Ctrl + V) no campo de texto do seu serviço de e-mail
    </p>

    <div class="divider mb-2">Geral</div>

    <InputFloatingLabel label="Nome *" bind:value={$infos.name} />
    <InputFloatingLabel label="Cargo" bind:value={$infos.cargo} />
    <InputFloatingLabel label="Empresa" bind:value={$infos.empresa} />
    <InputFloatingLabel
        label="Telefone"
        bind:value={$infos.telefone}
        mask="(00) 00000-0000"
        inputmode="numeric"
    />

    <div class="flex max-2xl:flex-col 2xl:items-center max-2xl:mb-3 gap-2">
        <InputFloatingLabel
            label="URL da imagem/Ctrl + V"
            bind:value={$infos.img}
            on:paste={handleOnPast}
            disabled={!!$infos.imgFile}
        />
        <p class="text-center">ou</p>
        <input
            type="file"
            accept="image/*"
            on:change={handleFileInputChange}
            disabled={!!$infos.img}
        />
        {#if $infos.imgFile}
            <button
                class="bg-primary-600 p-1 hover:bg-primary-700 transition-colors"
                on:click={cleanImgFile}
            >
                Limpar
            </button>
        {/if}
    </div>

    <div class="divider my-2">Redes sociais</div>

    <InputFloatingLabel
        label="LinkedIn"
        bind:value={$infos.redesSociais.linkedin}
    />
    <InputFloatingLabel
        label="Instagram"
        bind:value={$infos.redesSociais.instagram}
    />
</section>

<style>
    .divider {
        @apply from-primary-600 to-primary-400 bg-gradient-to-r text-white font-bold p-2 px-4 -mx-4;
    }
</style>
