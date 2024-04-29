import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [replies, setReplies] = useState([]);
    const [newReply, setNewReply] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postResponse = await axios.get(`blog/api/v1/rest/post/${postId}`);
                setPost(postResponse.data);

                const repliesResponse = await axios.get(`blog/api/v1/rest/postreply/${postId}`);
                setReplies(repliesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [postId]);

    const handleReplyChange = (event) => {
        setNewReply(event.target.value);
    };

    const handleAddReply = async () => {
        try {
            if(newReply.length <1){
                alert('Por favor, adicione um comentário!');
                return;
            }

            const response = await axios.post(`blog/api/v1/rest/reply`,
            {
                "reply": newReply,
                "id_post": postId
            });
            setNewReply('');
            window.location.reload();

        } catch (error) {
            console.error('Error adding reply:', error);
        }
    };

    const handleDeleteReply = async (replyId) => {
        try {
            await axios.delete(`blog/api/v1/rest/reply/${replyId}`);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting reply:', error);
        }

    };

    return (
        <div>
            {post && (
                <div className='row'>
                    <h1>{post.title}</h1>
                    <h2>{post.post}</h2>
                <h5>Post #{post.id}, created {post.createdAt}, updated {post.updatedAt}</h5>
                    <div className='row'>
                        {replies.length > 0 && (
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Resposta</th>
                                        <th>Criado</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {replies.map(reply => (
                                            <tr key={reply.id}>
                                                <td>{reply.id}</td>
                                                <td>{reply.reply}</td>
                                                <td>{reply.createdAt}</td>
                                                <td>
                                                    <button onClick={() => handleDeleteReply(reply.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                            </table>
                        )}
                        <div>
                            <textarea value={newReply} onChange={handleReplyChange}></textarea>
                            <button onClick={handleAddReply}>Adicione um comentário aqui!</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
