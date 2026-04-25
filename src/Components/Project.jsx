import { useState } from "react";

export default function Project({title, children}) {
    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="project">
            <div className="project-title" onClick={() => setisOpen(!isOpen)}>
              <div>{title}</div>
              <div>⌄</div>
            </div>
            {isOpen && (
              <div className="project-description">
                {children}
              </div>
            )}            
        </div>
    );
};