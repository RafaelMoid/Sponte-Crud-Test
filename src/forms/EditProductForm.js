import React, { useState, useEffect } from 'react'

const EditProductForm = (props) => {
  const [product, setProduct] = useState(props.currentProduct)

  const handleInputChange = (event) => {
    const { title, value } = event.target

    setProduct({ ...product, [title]: value })
  }

  useEffect(() => {
    setProduct(props.currentProduct)
  }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateProduct(product.id, product)
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
        name="lenght"
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
        name="date"
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
      <button>Atualizar produto</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  )
}

export default EditProductForm