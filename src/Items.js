export function Items({item, onDeleteItem, onToggleCheck}) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => onToggleCheck(item.id)}
            />
            <span className={item.packed ? "strike" : ""}>
                <span>{item.quantity} </span>&nbsp;{item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}
