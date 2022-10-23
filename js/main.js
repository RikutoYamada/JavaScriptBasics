'use strict';
{
  class Post {
    constructor(text) {
      this.text = text; 
      this.likeCount = 0;
    }
    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }
    
    like() {
      this.likeCount++;
      this.show();
    }
    
    // this使えない
    static showInfo() {
      console.log('Post');
    }
  }

  const posts = [
    new Post('stding JavaScript'),
    new Post('programing'),
  ]
  // posts[0].like();
  // posts[0].show();
  // posts[1].show();
  Post.showInfo();
}