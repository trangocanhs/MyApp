import React from 'react';
import { Media } from 'reactstrap';
function RenderLeader({ leader }) {
    return (
        <Media>
            <Media left top>
                <Media object src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    );
}

export default RenderLeader;
