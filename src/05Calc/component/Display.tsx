type Props = {
    input: string
    result: string
    resultFlg: boolean
}

const Display = ({ input, result, resultFlg }: Props) => {
    return (
        <div className="p-6 col-span-3 rounded shadow-lg">
            {resultFlg === false && input}
            {resultFlg === true && result}
        </div>
    )
}

export default Display
