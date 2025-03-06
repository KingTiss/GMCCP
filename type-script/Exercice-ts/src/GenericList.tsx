import React from "react";
import useListManager from "./hooks/UseListManager";

type Props<T> = {
initialItems: T[];
renderItem(item: T): React.ReactNode;
generateItem(): T;
};

export default function GenericList<T>({
initialItems,
renderItem,
generateItem,
}: Props<T>) {
const { add, items, remove } = useListManager(initialItems);
return (
    <div>
<h1>GenericList</h1>
<ul>
{items.map((item, index) => {
    return (
            <li key={index}>
{renderItem(item)}
        <button
                onClick={() => {
            remove(index);
                }}
>
delete
    </button>
            </li>
    );
        })}
    </ul>
    <button
        onClick={() => {
        add(generateItem());
        }}
    >
        add
</button>
    </div>
);
}
