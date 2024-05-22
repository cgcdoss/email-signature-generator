import { readable, writable } from "svelte/store";
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

export const fakeInfos = readable({
  name: "Fulano dos Santos",
  img:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
  empresa: '',
  imgFile: '',
  cargo: "Programador",
  telefone: "(91) 99999-9999",
  redesSociais: {
    instagram: "fake",
    linkedin: "fake",
  },
});
