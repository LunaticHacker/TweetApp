async function getFeed() {
  const res = await fetch("http://localhost:2020/home");
  const json = await res.json();
  const chats = {};
  for (let item of json) {
    //TODO:Refactor this to include multiple media
    const user = item.user;
    if (!chats[user.name]) {
      chats[user.name] = {};
      chats[user.name].msgs = [];
      const ft = user.profile_image_url.slice(-3);
      chats[user.name].dp = user.profile_image_url.slice(0, -11) + `.${ft}`;
      chats[user.name].msgs.push({
        text: item.text,
        media: item.entities.media ? item.entities.media[0].media_url : [],
      });
    } else {
      chats[user.name].msgs.push({
        text: item.text,
        media: item.entities.media ? item.entities.media[0].media_url : [],
      });
    }
  }
  return chats;
}
export { getFeed };
