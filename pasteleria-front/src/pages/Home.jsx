import Products from '../components/Products'
import data from '../services/data.json'


const Home = () => {
  return (
    <>
    {data.map((d) => <Products key={d.id} products={d}/>)}
    </>
  )
}

export default Home