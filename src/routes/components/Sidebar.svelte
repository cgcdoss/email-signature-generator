<script lang="ts">
    import Accordion from "$lib/components/Accordion.svelte";
    import InputFloatingLabel from "$lib/components/InputFloatingLabel.svelte";
    import Check from "$lib/icons/check.svelte";
    import { currentTemplate, informacoes as infos } from "$lib/store";
    import { getLowerQualityImg } from "$lib/utils";
    import { onMount } from "svelte";
    import Template1 from "./templates/Template1.svelte";
    import Template2 from "./templates/Template2.svelte";

    let isMobile = window.matchMedia("(max-width: 768px)").matches;
    let templates: { name: string; component: any }[] = [
        {
            name: "Modelo 1",
            component: Template1,
        },
        {
            name: "Modelo 2",
            component: Template2,
        },
    ];

    onMount(() => {
        window
            .matchMedia("(max-width: 768px)")
            .addEventListener("change", (ev) => {
                isMobile = ev.matches;
            });
    });

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
    class="form flex flex-col space-y-3 col-span-4 2xl:col-span-3 px-4 py-8 sm:max-h-full sm:overflow-auto shadow-md bg-primary-800 text-primary-100"
>
    <h2 class="text-xl">
        Preencha as informações abaixo e depois clique em Copiar assinatura
    </h2>
    <p class="mb-2">
        Depois basta colar (Ctrl + V) no campo de texto do seu serviço de e-mail
    </p>

    <Accordion title="Geral" open={true}>
        <InputFloatingLabel label="Nome *" bind:value={$infos.name} />
        <InputFloatingLabel label="Cargo" bind:value={$infos.cargo} />
        <InputFloatingLabel label="Empresa" bind:value={$infos.empresa} />
        <InputFloatingLabel
            label="Telefone"
            bind:value={$infos.telefone}
            mask="(00) 00000-0000"
            inputmode="numeric"
        />
        <InputFloatingLabel label="Endereço" bind:value={$infos.endereco} />

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
                    class="bg-primary-500 p-1 hover:bg-primary-600 transition-colors"
                    on:click={cleanImgFile}
                >
                    Limpar
                </button>
            {/if}
        </div>
    </Accordion>

    <Accordion title="Redes sociais" open={true}>
        <InputFloatingLabel
            label="LinkedIn"
            bind:value={$infos.redesSociais.linkedin}
        />
        <InputFloatingLabel
            label="Instagram"
            bind:value={$infos.redesSociais.instagram}
        />
    </Accordion>

    <Accordion title="Modelos" open={true}>
        <div class="grid grid-cols-1 gap-2">
            {#each templates as template}
                <button
                    class="bg-primary-500 hover:bg-primary-600 py-3 transition-all flex gap-2 justify-center items-center"
                    class:selected={template.component === $currentTemplate}
                    on:click={() => {
                        currentTemplate.set(template.component);
                    }}
                >
                    <div class="min-w-4">
                        {#if template.component === $currentTemplate}
                            <Check />
                        {/if}
                    </div>
                    {template.name}
                </button>
            {/each}
        </div>
    </Accordion>
</section>

<style>
    button.selected {
        @apply bg-primary-500/50 hover:bg-primary-600;
    }
</style>
