const posts = [
    {title: "Post 1", body: "ja ja ja"},
    {title: "Post 2", body: "je je je"},
    {title: "Post 3", body: "ji ji ji"},
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1500);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  },2500);
}

createPost({title: "Post 4", body: "jo jo jo"}, getPosts);

