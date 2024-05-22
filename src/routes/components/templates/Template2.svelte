<script lang="ts">
    import { base } from "$app/paths";
    import Phone from "$lib/icons/phone.svelte";
    import Pin from "$lib/icons/pin.svelte";
    import { fakeInfos, informacoes } from "$lib/store";

    $: ({
        img,
        imgFile,
        name,
        cargo,
        empresa,
        telefone,
        redesSociais,
        endereco,
    } = $informacoes.name ? $informacoes : $fakeInfos);
</script>

<table>
    <tbody>
        <tr>
            {#if img || imgFile}
                <td class="align-top min-w-[80px]">
                    <div>
                        <img
                            src={img || imgFile}
                            alt="logo assinatura"
                            class="rounded-full object-cover w-20 h-20"
                        />
                    </div>
                </td>
            {/if}
            <td class="align-top pl-2 pr-3" class:pl-2={img || imgFile}>
                <h2 class="text-xl font-bold">{name}</h2>
                {#if cargo || (cargo && empresa)}
                    <h3 class="text-lg p-1 bg-primary-600 text-white mt-2">
                        {cargo}
                        {#if empresa}em {empresa}{/if}
                    </h3>
                {/if}

                {#if endereco}
                    <div class="flex gap-2 items-center">
                        <Pin />
                        <p>{endereco}</p>
                    </div>
                {/if}

                {#if telefone}
                    <div class="flex gap-2 items-center">
                        <Phone />
                        <p>{telefone}</p>
                    </div>
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
