var posts=["posts/c018.html","posts/undefined.html","posts/74d3.html","posts/37ae.html","posts/ee58.html","posts/df2b.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};