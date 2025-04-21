import React from "react";
import PackingItems from "./PackingItems";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <PackingItems item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
