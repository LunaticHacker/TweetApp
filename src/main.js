import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { getFeed } from "../src/functions/api";

const app = createApp(App);
const store = createStore({
  state: {
    chats: {},
  },
  mutations: {
    setChats(state, payload) {
      state.chats = payload;
    },
  },
  actions: {
    async setChats(state) {
      const chats = await getFeed();
      state.commit("setChats", chats);
    },
  },
  getters: {
    getChats: (state) => state.chats,
  },
});
app.use(store);
app.mount("#app");
