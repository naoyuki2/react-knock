import { Link } from '@chakra-ui/react'

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
                <li>
                    <Link href="/005">005 Calc</Link>
                </li>
                <li>
                    <Link href="/006">006 Profile</Link>
                </li>
                <li>
                    <Link href="/007">006 Weather</Link>
                </li>
            </ul>
        </>
    )
}

export default Home
