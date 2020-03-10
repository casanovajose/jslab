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
  }, 500);
}

function createPost(post,) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject("Algún error");
      }
    },1000);
  });  
}

// createPost({title: "Post 4", body: "jo jo jo"})
//   .then(getPosts)
//   .catch(err => console.error(err));

// async / await

async function init() {
  await createPost({title: "Post 5", body: "ju ju ju"});
  getPosts();
}

init();