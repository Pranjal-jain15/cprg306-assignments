import React, { useState } from 'react';
import Item from './item'; 
import items from './items.json'; 
import './styles.css';

function ItemList() {
  // Initialize State Variable
  const [sortBy, setSortBy] = useState('name');

  // Sort the Items
  const sortedItems = [...items]; // Create a copy of the items array to avoid mutating the original
  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  // Create Sort Buttons and Add Orange Color
  const isSortByName = sortBy === 'name';
  const isSortByCategory = sortBy === 'category';

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  return (
    <div>
      <div>
        {/* Added Orange Color to Buttons */}
        <button
          onClick={handleSortByName}
          className={`sort-button ${isSortByName ? 'selected' : ''} orange-button`} 
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={`sort-button ${isSortByCategory ? 'selected' : ''} orange-button`} 
        >
          Sort by Category
        </button>
      </div>

      {/* Render the Items */}
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
