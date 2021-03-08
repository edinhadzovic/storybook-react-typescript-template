import React, { FC } from "react";

interface TagProps {
    title?: string;
}
const Tag: FC<TagProps> = ({ title="My title" }) => {
    return (
        <button style={{backgroundColor: 'yellow'}}>
            {title}
        </button>
    )
}
export default Tag