import Link from 'next/link'
import ItemList from "./item-list"

export default function Page() {
  return (
    <main>
      <h1 style={{ fontSize:45}}>My Shopping List</h1>
      <ItemList/>

      <Link href="../">Click here to go to main page</Link>
    </main>
   
  )
}