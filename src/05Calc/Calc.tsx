//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
import { Mass } from './component/Mass'
import Display from './component/Display'
import { useState } from 'react'

const Calc = () => {
    const [input, setInput] = useState<string>('0')
    const [result, setResult] = useState<string>('')
    const [resultFlg, setResultFlg] = useState<boolean>(false)
    const MassArray = [
        'C',
        '7',
        '8',
        '9',
        '/',
        '4',
        '5',
        '6',
        '*',
        '1',
        '2',
        '3',
        '-',
        '.',
        '0',
        '=',
        '+',
    ]
    return (
        <div className="text-2xl container mx-auto grid grid-cols-4 gap-4 text-center">
            <Display input={input} result={result} resultFlg={resultFlg} />
            {MassArray.map((i, _) => (
                <Mass
                    key={i}
                    mass={i}
                    input={input}
                    setInput={setInput}
                    setResult={setResult}
                    resultFlg={resultFlg}
                    setResultFlg={setResultFlg}
                />
            ))}
        </div>
    )
}

export default Calc
