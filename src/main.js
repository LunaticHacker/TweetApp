import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { getFeed } from "../src/functions/api";

const app = createApp(App);
const store = createStore({
  state: {
    chats: {},
    currentName: "",
  },
  mutations: {
    setChats(state, payload) {
      state.chats = payload;
    },
    setCurrentName(state, payload) {
      state.currentName = payload;
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
    getCurrentChats: (state) =>
      state.chats[state.currentName]
        ? //using slice to prevent modifying the original array
          state.chats[state.currentName].msgs.slice().reverse()
        : [],
    getInfo: (state) =>
      state.chats[state.currentName]
        ? { dp: state.chats[state.currentName].dp, name: state.currentName }
        : {},
  },
});
app.use(store);
app.mount("#app");
