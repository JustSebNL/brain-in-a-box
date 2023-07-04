import React, { useState } from 'react';
import { saveToVector } from '../utils/vectorStore';

function CommentBox() {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    saveToVector({ type: 'comment', content: comment });
    setComment('');
  };

  return (
    <div id="comment-box" className="p-4">
      <textarea
        className="w-full h-16 p-2 border rounded"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Add your comment here..."
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleCommentSubmit}
      >
        Save Comment
      </button>
    </div>
  );
}

export default CommentBox;