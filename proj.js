
let div2 = document.createElement("div");
fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=21&context=embed")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    const postsContainer = document.getElementById('posts-container');
    const postTemplate = document.getElementById('post-template').content;
    data.forEach((content) => {
      const postClone = postTemplate.cloneNode(true);
      const postTitle = content.title.rendered; 
      const postUrl = content.link; 
      const postImage= content.jetpack_featured_media_url;
      const postDescription= content.yoast_head_json.description;
      postClone.querySelector('.post-image').src = postImage;
      postClone.querySelector('.post-image').alt = postTitle;
      postClone.querySelector('h2 a').textContent = postTitle;
      postClone.querySelector('h2 a').href = postUrl;
      postClone.querySelector('p').textContent = postDescription;

      postsContainer.appendChild(postClone);
    });
  })
  .catch((err) => console.log(err));

document.body.appendChild(div2);
