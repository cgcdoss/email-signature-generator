<script lang="ts">
    import Preview from "./components/Preview.svelte";
    import Sidebar from "./components/Sidebar.svelte";
</script>

<svelte:head>
    <title>Gerar assintatura de e-mail (sem cadastro)</title>
</svelte:head>

<header class="p-4 bg-primary-600">
    <h1 class="text-2xl text-white">Gerar Assinatura de E-mail</h1>
</header>

<main
    class="flex flex-col sm:grid grid-cols-1 sm:grid-cols-10 h-[calc(100vh-64px)]"
>
    <Sidebar />
    <Preview />
</main>
