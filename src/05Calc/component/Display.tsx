type Props = {
    input: string
    result: string
    resultFlg: boolean
}

const Display = ({ input, result, resultFlg }: Props) => {
    return (
        <div className="h-16 p-5 col-span-3 rounded shadow-lg">
            {resultFlg === false && input}
            {resultFlg === true && result}
        </div>
    )
}

export default Display
