"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import itemsData from './items.json';
import ItemList from './item-list';
import NewItem from './new-item';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <main>
      <h1 style={{ fontSize: 45 }}>My Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Link href="../">Click here to go to the main page</Link>
    </main>
  );
}
