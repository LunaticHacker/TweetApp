async function getFeed() {
  const res = await fetch("http://localhost:2020/home");
  const json = await res.json();
  const chats = {};
  for (let item of json) {
    const user = item.user;
    if (!chats[user.name]) {
      chats[user.name] = {};
      chats[user.name].msgs = [];
      chats[user.name].dp = user.profile_image_url;
      chats[user.name].msgs.push(item.text);
    } else {
      chats[item.user.name].msgs.push(item.text);
    }
  }
  return chats;
}
export { getFeed };
