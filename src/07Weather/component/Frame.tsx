import Header from './Header'
import Items from './Items'

const Frame = () => {
    return (
        <div className="p-2 rounded shadow grid grid-cols-3 gap-4">
            <Header />
            <Items />
        </div>
    )
}

export default Frame
