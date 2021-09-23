import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment'
import RcIf from 'rc-if';
import "./comments.css";
const CommentsComponent = (props) => {
    const [, setError] = useState("");
    const [content, setContent] = useState("");
    const [text, setText] = useState("");
    const deviceModel = props.deviceModel

    useEffect(() => {
        DisplayComments();
    });
    const DisplayComments = async (e) => {
        try {
            const config = {
                Headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                },

            };
            await axios.post(
                'http://localhost:5000/api/comment/getDeviceComments',
                {
                    "device": deviceModel
                },
                config
            ).then(res => setContent(
                res.data.map((comment) =>
                    <div key={comment._id} className="comment-component">
                        <div className="meta">
                            <div className="user">{comment.user}</div>
                            <div className="time">{moment(comment.time).format("DD/MM/YY, h:mma")}</div>
                        </div>
                        <div className="text">{comment.text}</div>
                        <RcIf if={comment.email === localStorage.getItem("email")} >
                            <div className="buttonCs">
                                <button className="modify comment-button" type="button" onClick={(e) => {
                                    e.preventDefault();
                                    modifyComment(e, comment._id)
                                }}>modify</button>
                                <button className="delete comment-button" type="button" onClick={(e) => {
                                    e.preventDefault();
                                    deleteComment(e, comment._id)
                                }}>delete</button>
                            </div>
                        </RcIf>
                    </div>
                ))
            );

        } catch (error) {
            setError("please retry to reload the page");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    const submitComment = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json",
                Authorization:`Bearer ${localStorage.getItem("authToken")}`
            },
        };

        try {
            await axios.post(
                "http://localhost:5000/api/comment/makeComment",
                {
                    "device": deviceModel,
                    email:localStorage.getItem("email"),
                    user: localStorage.getItem("firstName") + " " + localStorage.getItem("lastName"),
                    text
                },
                config
            );
            window.location.reload();
        } catch (error) {
            setError("please retry to write a comment");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
    const deleteComment = async (e, id) => {
        e.preventDefault();

        try {
            axios.delete("http://localhost:5000/api/comment/deleteComment", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization:`Bearer ${localStorage.getItem("authToken")}`
                },
                data: {
                    id: id
                }
            });
            DisplayComments();
            window.location.reload();

        } catch (error) {
            setError("please retry to delete the comment");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
   
    const modifyComment = async (e, id) => {
        e.preventDefault();
        var text = prompt('Please Enter your new comment')
        try {
  
            const config = {
                header: {
                  "Content-Type": "application/json",
                  Authorization:`Bearer ${localStorage.getItem("authToken")}`
                }
              };
            await axios.put(
                'http://localhost:5000/api/comment/updateComment',
                {
                    id: id,
                    text: text
                },
                config
              );
              DisplayComments();
              window.location.reload();

        } catch (error) {
            setError("please retry to modify the comment");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
    return (
        <div className="container mx-auto">
            <div className="md:flex flex-wrap md:-mx-3">
                {content}
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                submitComment(e);
            }}>
                <input className="makeComment" value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text" placeholder="add a comment" />
            </form>
        </div>
    );
};

export default CommentsComponent
