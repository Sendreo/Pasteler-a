import { Card } from "flowbite-react"


const Products = ({products}) => {
    const {nombre, descripcion, imagen} = products
  return (
    <>
  <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {nombre}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {descripcion}
      </p><br />
      <p>{imagen}</p>
    </Card>
    </>
  )
}

export default Products