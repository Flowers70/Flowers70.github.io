import { useState } from "react";

export default function HideAndShow({title, children}) {
    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="hide-and-show">
            <div className="title" onClick={() => setisOpen(!isOpen)}>
              <div>{title}</div>
              <div>⌄</div>
            </div>
            {isOpen && (
              <div className="description">
                {children}
              </div>
            )}            
        </div>
    );
};