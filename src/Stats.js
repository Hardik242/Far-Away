export function Stats({items}) {
    const totalItems = items.length;
    const itemsPacked = items.filter((item) => item.packed).length;
    const itemPercentage = Math.round((itemsPacked / totalItems) * 100);

    return (
        <footer className="stats">
            {totalItems === 0 ? (
                <em>No item added yet</em>
            ) : (
                <em>
                    {itemPercentage === 100
                        ? `You have everything packed. Ready to go ✈️`
                        : `💼 You have ${totalItems} items on your list, and you already
                packed ${itemsPacked} (${itemPercentage}%)`}
                </em>
            )}
        </footer>
    );
}
