import { writable } from "svelte/store";

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
