import Heading from "./Heading";
import { FC } from "react";
import { postInfoType } from "../types";

type postInfoProps = {
    post: postInfoType,
}

const PostInfo:FC<postInfoProps> = ({post}) => {
    const {title, body} = post || {};

    if (!post) {
        return <Heading tag="h3" text="Empty post" />
    };

    return (
        <>
            <Heading tag="h3" text={title} />
            <div>{body}</div>
        </>
    )
};

export default PostInfo;