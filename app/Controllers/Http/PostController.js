"use strict";

class PostController {
  async index({ view }) {
    const posts = [
      { title: "Postingan Pertama", body: "post one" },
      { title: "Postingan kedua", body: "post two" },
      { title: "Postingan Ketiga", body: "post three" },
    ];

    return view.render("posts.index", {
      title: "Postingan Terakhir",
      posts: posts,
    });
  }
}

module.exports = PostController;
