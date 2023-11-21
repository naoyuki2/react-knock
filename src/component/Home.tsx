import { Link } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Reactアプリ100本ノック</h1>
      <ul>
        <li>
          <Link href="/001">001 HelloWorld</Link>
        </li>
        <li>
          <Link href="/002">002 Counter</Link>
        </li>
        <li>
          <Link href="/003">003 TODO</Link>
        </li>
        <li>
          <Link href="/004">004 Timer</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
