import { useEffect } from "react";

export function readFromFile(filePath, stateFunc){
    useEffect(() => {
        fetch(filePath)
            .then((response) => response.text())
            .then((text) => stateFunc(text));
    }, []);
}