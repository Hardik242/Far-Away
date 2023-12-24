import {useState} from "react";

export function Form({onAddItem}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("-- Quantity --");

    function handleAdd(e) {
        e.preventDefault();

        if (!description || quantity === ("-- Quantity --" || NaN)) {
            return;
        }

        const newItem = {
            description,
            quantity,
            id: Number(Date.now()),
            packed: false,
        };

        onAddItem(newItem);

        setDescription("");
    }

    return (
        <form className="add-form" onSubmit={handleAdd}>
            <h3>What do you need for your trip?</h3>

            <select
                value={quantity}
                onChange={(event) => {
                    setQuantity(Number(event.target.value));
                }}>
                <option value="-- Quantity --">-- Quantity --</option>
                {Array.from({length: 30}, (_, index) => index + 1).map(
                    (number) => (
                        <option value={number} key={number}>
                            {number}
                        </option>
                    )
                )}
            </select>
            <input
                type="text"
                name=""
                id=""
                placeholder="Item..."
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            />
            <button>Add</button>
        </form>
    );
}
