<script lang="ts">
    import { base } from "$app/paths";
    import { informacoes } from "$lib/store";

    $: ({ img, imgFile, name, cargo, empresa, telefone, redesSociais } =
        $informacoes);
</script>

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
