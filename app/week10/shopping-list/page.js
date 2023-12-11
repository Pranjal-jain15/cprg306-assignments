"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from 'path/to/useUserAuth'; // Import the useUserAuth hook from the correct path
import { getItems, addItem } from './shopping-list-service';

export default function Page() {
  const [items, setItems] = useState([]); // State for shopping list items
  const [selectedItemName, setSelectedItemName] = useState('');
  const user = useUserAuth(); // Assuming useUserAuth returns the user object or null

  // Async function to load items for the current user
  const loadItems = async () => {
    try {
      if (user) {
        const shoppingList = await getItems(user.uid); // Fetch items for the current user using user's uid
        setItems(shoppingList); // Update items state with fetched shopping list
      }
    } catch (error) {
      console.error('Error loading items:', error);
      // Handle error or set state accordingly
    }
  };
  useEffect(() => {
    if (user === null) {
      // Redirect the user to the landing page if not logged in
      window.location.href = '/'; // Redirect to the landing page URL
    }
  }, [user]);

  const handleItemSelect = selectedItem => {
    const cleanedItemName = selectedItem.name.split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  // Render the shopping list page content only if the user is logged in
  if (user === null) {
    return null; // Render nothing if the user is not logged in
  }

  return (
    <main style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h1 style={{ fontSize: 45 }}>My Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: 30 }}>Meal Ideas</h2>
        <MealIdeas ingredient={selectedItemName} />
      </div>
      <div>
        <Link href="../">Click here to go to the main page</Link>
      </div>
    </main>
  );
}
import { useUserAuth } from "./_utils/auth-context";
 
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
await gitHubSignIn();
 
await firebaseSignOut();
 
<p>
  Welcome, {user.displayName} ({user.email})
</p>;