const getNombre = (idPost) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => {
      return res.json();
    })
    .then(post => {
      console.log(post.userId);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then(res => {
        return res.json();
      })
      .then(user => {
        console.log(user.name);
      })
    })
  }
  
  getNombre(18);