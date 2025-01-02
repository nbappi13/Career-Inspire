import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CommentsSection.css';

const CommentsSection = ({ serviceId, onCommentAdded }) => {
    const [comment, setComment] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const storedComment = localStorage.getItem(`comment-${serviceId}`) || '';
        setComment(storedComment);
    }, [serviceId]);

    const handleAddComment = () => {
        setComment(newComment);
        localStorage.setItem(`comment-${serviceId}`, newComment);
        setNewComment('');
        if (onCommentAdded) {
            onCommentAdded();
        }
    };

    const handleEditComment = () => {
        setNewComment(comment);
        setEditMode(true);
    };

    const handleDeleteComment = () => {
        setComment('');
        localStorage.removeItem(`comment-${serviceId}`);
        toast.success('Comment deleted successfully!');
    };

    const handleSaveComment = () => {
        setComment(newComment);
        localStorage.setItem(`comment-${serviceId}`, newComment);
        setNewComment('');
        setEditMode(false);
        if (onCommentAdded) {
            onCommentAdded();
        }
    };

    return (
        <div className="comments-section">
            <h3>Comment</h3>
            {comment ? (
                <div className="comment">
                    <p className="comment-text">{comment}</p>
                    <div className="comment-actions">
                        <button onClick={handleEditComment} className="comment-button">Edit</button>
                        <button onClick={handleDeleteComment} className="comment-button delete-button">Delete</button>
                    </div>
                </div>
            ) : (
                <div className="comment-form">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="comment-input"
                    />
                    <button onClick={handleAddComment} className="comment-button add-comment-button">Feedback</button>
                </div>
            )}
            {editMode && (
                <div className="comment-form">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Edit your comment..."
                        className="comment-input"
                    />
                    <button onClick={handleSaveComment} className="comment-button">Save</button>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default CommentsSection;
