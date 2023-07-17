import React, { useState } from 'react';
import { addComment } from '../utils/activeloop';

function CommentBox() {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <div id="comment-box">
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add your comment here..."
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentBox;