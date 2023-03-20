import React, { useState } from 'react'

const AddProductForm = (props) => {
  const initialFormState = { id: null, title: '', description: '', height: '',  width: '',  depth: '', weight: '', barcode: '', categories: '', price: '', aquisitondate: '', image: '' }
  const [product, setProduct] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!product.title) return

        props.addProduct(product)
        setProduct(initialFormState)
      }}
    >
      <label>Nome do Produto</label>
      <input
        type="text"
        name="title"
        value={product.title}
        onChange={handleInputChange}
      />
      <label>Descrição</label>
      <input
        type="textarea"
        name="description"
        value={product.description}
        onChange={handleInputChange}
      />
      <label>Altura</label>
      <input
        type="number"
        name="height"
        value={product.height}
        onChange={handleInputChange}
      />
      <label>Largura</label>
      <input
        type="number"
        name="width"
        value={product.width}
        onChange={handleInputChange}
      />
      <label>Profundidade</label>
      <input
        type="number"
        name="depth"
        value={product.depth}
        onChange={handleInputChange}
      />
      <label>Peso do produto</label>
      <input
        type="number"
        name="weight"
        value={product.weight}
        onChange={handleInputChange}
      />
      <label>Código de Barras</label>
      <input
        type="number"
        name="barcode"
        value={product.barcode}
        onChange={handleInputChange}
      />
      <label>Categorias</label>
      <input
        type="text"
        name="categories"
        value={product.categories}
        onChange={handleInputChange}
      />
      <label>Preço</label>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleInputChange}
      />
      <label>Data de aquisição</label>
      <input
        type="date"
        name="aquisitondate"
        value={product.aquisitondate}
        onChange={handleInputChange}
      />
      <label>Foto do produto</label>
      <input
        type="file"
        name="product image"
        value={product.image}
        onChange={handleInputChange}
      />
      <button>Adicionar novo produto</button>
    </form>
  )
}

export default AddProductForm