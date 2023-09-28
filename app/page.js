import Link from 'next/link'
import StudentInfo from './studentinfo'

export default function week2() {
  return (
    <main>
      <h1 style={{ fontSize:45}}> CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="./week2">Week2</Link> <br></br>
      <Link href="./week3">Week3</Link>
    </main>
   
  )
}