import {useState} from "react";
import {Items} from "./Items";

export function PackingList({
    items,
    onDeleteItem,
    onToggleCheck,
    handleClearList,
    handleCheckAll,
    handleUncheckAll,
}) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = items;
    }
    if (sortBy === "description") {
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    }
    if (sortBy === "packed") {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => {
                    return (
                        <Items
                            item={item}
                            onDeleteItem={onDeleteItem}
                            onToggleCheck={onToggleCheck}
                            key={item.id}
                        />
                    );
                })}
            </ul>
            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">
                        Sort by description order
                    </option>
                    <option value="packed">Sort by packed order</option>
                </select>
                <button onClick={handleClearList}>Clear List</button>
                <button onClick={handleCheckAll}>Check All ✔️</button>
                <button onClick={handleUncheckAll}>Uncheck All ❌</button>
            </div>
        </div>
    );
}
