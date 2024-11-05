import Products from '../components/Products'
import data from '../services/data.json'
import '../styles/style-product.css'


const Home = () => {
  return (
    <>
      <section className='product-map'>
        {data.map((d) => <Products key={d.id} products={d} />)}
      </section>
    </>
  )
}

export default Home