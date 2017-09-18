import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // index of the post
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    // get the post
    const post = this.props.posts[i];
    // get the comments
    const postComments = this.props.comments[postId] || [];
    
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} />
      </div>
    )
  }
});

export default Single;