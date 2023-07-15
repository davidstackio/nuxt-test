// https://nuxt.com/docs/api/configuration/nuxt-config

// Project config
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export default defineNuxtConfig({
  ssr: false,
  modules: ["nuxt-vuefire"],
  vuefire: {
    config: firebaseConfig,
    auth: true,
  },
  devtools: { enabled: true },
});
