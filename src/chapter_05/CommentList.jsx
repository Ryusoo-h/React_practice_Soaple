import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다!",
    },
    {
        name: "밀크티",
        comment: "밀크티 맛있겠지?",
    },
    {
        name: "지금은",
        comment: "새벽3시 2분입니다",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;