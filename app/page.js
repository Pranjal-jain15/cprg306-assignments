import Link from 'next/link'
import StudentInfo from './studentinfo'

export default function week2() {
  return (
    <main>
      <h1 style={{ fontSize:45}}> CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="./week2">Week2</Link><br></br>
      <Link href="./week3">Week3</Link><br></br>
      <Link href="./week4">Week4</Link> <br></br>
      <Link href="./week5">Week5</Link> <br></br>
      <Link href="./week6">Week6</Link> <br></br>
      <Link href="./week7">Week7</Link> <br></br>
      <Link href="./week8">Week8</Link> <br></br>
    </main>
   
  )
}