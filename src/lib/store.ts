import { writable } from "svelte/store";
import Template1 from "../routes/components/templates/Template1.svelte";
import type { ComponentType } from "svelte";

export const informacoes = writable({
  img: "",
  imgFile: "",
  name: "",
  cargo: "",
  empresa: "",
  telefone: "",
  redesSociais: {
    linkedin: "",
    instagram: "",
  },
});
export const currentTemplate = writable<ComponentType>(Template1);
