const getNombre = (idPost) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then((res) => {
        return res.json();
      })
      .then((post) => {
        console.log(post.userId);
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((res) => {
            return res.json();
          })
          .then((user) => {
            console.log(user.name);
          });
      });
  };
  
  getNombre(18);
  
  const getNombreAsync = async (idPost) => {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    const post = await resPost.json();
    console.log(`id - ${post.userId}`);
  
    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const user = await resUser.json();
    console.log(`user - ${user.name}`);
  };
  
  getNombreAsync(18);