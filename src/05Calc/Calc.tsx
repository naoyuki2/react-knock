import Number from './component/Number'

const Calc = () => {
  return (
    <section>
      {[...Array(10).keys()].map((i) => (
        <Number key={i} num={i} />
      ))}
    </section>
  )
}

export default Calc
