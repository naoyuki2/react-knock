import { Dispatch, SetStateAction } from 'react'
import { evaluate } from 'mathjs'

type Props = {
    mass: string
    input: string
    setInput: Dispatch<SetStateAction<string>>
    setResult: Dispatch<SetStateAction<string>>
    resultFlg: boolean
    setResultFlg: Dispatch<SetStateAction<boolean>>
}

export const Mass = ({
    mass,
    input,
    setInput,
    setResult,
    resultFlg,
    setResultFlg,
}: Props) => {
    const inputNumberOperator = (mass: string) => {
        if (resultFlg) {
            setResultFlg(false)
        }
        if (input === '0') {
            setInput(mass)
        } else {
            setInput(input + mass)
        }
    }
    const calculateResult = () => {
        try {
            setResult(evaluate(input))
        } catch {
            setResult('Error')
        } finally {
            setResultFlg(true)
            setInput('0')
        }
    }
    const clear = () => {
        setInput('0')
        setResult('')
    }
    return (
        <>
            {mass === 'C' ? (
                <button
                    className="p-6 bg-gray-200 rounded shadow-lg"
                    onClick={() => clear()}
                >
                    {mass}
                </button>
            ) : mass === '+' || mass === '-' || mass === '*' || mass === '/' ? (
                <button
                    className="p-6 bg-gray-200 rounded shadow-lg"
                    onClick={() => inputNumberOperator(mass)}
                >
                    {mass}
                </button>
            ) : mass === '=' ? (
                <button
                    className="p-6 bg-gray-200 rounded shadow-lg"
                    onClick={() => calculateResult()}
                >
                    {mass}
                </button>
            ) : (
                <button
                    className="p-6 bg-white rounded shadow-lg"
                    onClick={() => inputNumberOperator(mass)}
                >
                    {mass}
                </button>
            )}
        </>
    )
}
