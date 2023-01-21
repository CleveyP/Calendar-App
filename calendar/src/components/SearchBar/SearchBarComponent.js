import React, {useState} from "react";

export const SearchBar = () =>{
    const [input, setInput] = useState("");

    const handleChange = (e) =>{
        setInput(e.value);
    }

    return (
        <div className="search-bar-container">
            <input className="search-bar" type="text" value={input} onChange={(e) =>{ handleChange(e);}} placeholder="Search"/>
        </div>
    );
}