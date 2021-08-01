import React from 'react';

function Projects ( props ) {
    return (
        <div className="projectDiv">
            <h3 className="deployed"> { props.title }</h3>
            <a href={ props.link }>
                <h4 className="deployed">Website</h4>
            </a>
            <a href={ props.github }>
                <h4 className="deployed">Github</h4>
            </a>
        </div>
    )
};

export default Projects;