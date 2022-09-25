import { useState } from "react";

export default function SearchBar(props) {
    const [character, setCharacter] = useState({});
    const { callBack } = props;

    const handleInputChange = (e) => {
        const char = e.target.value;
        setCharacter(char);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fetch(
            `https://www.amiiboapi.com/api/amiibo/?name=${character}`
        );
        const jsonData = await result.json();
        callBack(jsonData);
    };

    return (
        <div>
            <h2>Search amiibo character</h2>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input
                    type="text"
                    placeholder="ex: Mario"
                    onChange={(e) => {
                        handleInputChange(e);
                    }}
                />
            </form>
        </div>
    );
}
