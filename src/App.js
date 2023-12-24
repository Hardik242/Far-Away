import {useState} from "react";
import {Logo} from "./Logo";
import {Form} from "./Form";
import {PackingList} from "./PackingList";
import {Stats} from "./Stats";

function App() {
    const [item, setItem] = useState([]);

    function handleAddItem(itemData) {
        setItem((item) => [...item, itemData]);
    }

    function handleDeleteItem(id) {
        setItem((item) =>
            item.filter((item) => {
                return item.id !== id;
            })
        );
    }

    function handleTogglePacked(id) {
        setItem((items) =>
            items.map((item) =>
                item.id === id ? {...item, packed: !item.packed} : item
            )
        );
    }

    function handleClearList() {
        setItem([]);
    }

    function handleCheckAll() {
        setItem((items) => items.map((item) => ({...item, packed: true})));
    }
    function handleUncheckAll() {
        setItem((items) => items.map((item) => ({...item, packed: false})));
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList
                items={item}
                onDeleteItem={handleDeleteItem}
                onToggleCheck={handleTogglePacked}
                handleClearList={handleClearList}
                handleCheckAll={handleCheckAll}
                handleUncheckAll={handleUncheckAll}
            />
            <Stats items={item} />
        </div>
    );
}

export default App;