import React, { useState, useEffect } from 'react';
import './CommentsSection.css';

const CommentsSection = ({ serviceId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem(`comments-${serviceId}`)) || [];
        setComments(storedComments);
    }, [serviceId]);

    const handleAddComment = () => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem(`comments-${serviceId}`, JSON.stringify(updatedComments));
        setNewComment('');
    };

    return (
        <div className="comments-section">
            <h3>Comments</h3>
            <div className="comments-list">
                {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </div>
            <div className="comment-form">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="comment-input"
                />
                <button onClick={handleAddComment} className="comment-button">Feedback</button>
            </div>
        </div>
    );
};

export default CommentsSection;
