import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px 0;

  input {
    height: 26px;
    border-radius: 8px;
    border: 1px solid gray;
    margin-bottom: 8px;
  }

  input::placeholder {
    text-align: center;
  }
  
  label {
    font-weight: 700;
    font-size: 18px;
    color: #785afd;
    margin-top: 8px;
  }

  .textarea {
    height: 150px;
  }
`
const MeasureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  div {
    width: 30%;
    display: flex;
    flex-direction: column;
  }
`;


const EditProductForm = (props) => {
  const [product, setProduct] = useState(props.currentProduct)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  useEffect(() => {
    setProduct(props.currentProduct)
  }, [props])


  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateProduct(product.id, product)
      }}
    >
      <label>Nome do Produto</label>
        <input
          type="text"
          name="title"
          maxlength="100"
          value={product.title}
          onChange={handleInputChange}
        />
        <label>Descrição</label>
        <input
          class="textarea"
          type="textarea"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
        <MeasureWrapper>
          <div>
            <label>Altura</label>
            <input
                type="number"
                name="height"
                placeholder='Valor em CM'
                value={product.height}
                onChange={handleInputChange}
                />
          </div>
          <div>
            <label>Largura</label>
            <input
                type="number"
                name="width"
                placeholder='Valor em CM'
                value={product.width}
                onChange={handleInputChange}
                />
          </div>
          <div>
            <label>Profundidade</label>
             <input
              type="number"
              name="depth"
              placeholder='Valor em CM'
              value={product.depth}
              onChange={handleInputChange}
              />
          </div>
        </MeasureWrapper>
        <label>Peso do produto</label>
        <input
          type="number"
          name="weight"
          placeholder='Valor em Quilos'
          value={product.weight}
          onChange={handleInputChange}
          />
        <label>Código de Barras</label>
        <input
          type="number"
          name="barcode"
          placeholder='Digite apenas numeros'
          value={product.barcode}
          onChange={handleInputChange}
        />
        <label>Categorias</label>
        <input
          type="text"
          name="categories"
          placeholder='Digite as categorias separando por virgula'
          value={product.categories}
          onChange={handleInputChange}
        />
        <label>Preço</label>
        <input
          type="number"
          name="price"
          placeholder='Digite aqui o preço (Apenas numeros)'
          value={product.price}
          onChange={handleInputChange}
        />
        <label>Data de aquisição</label>
        <input
          id="datePickerId"
          type="date"
          name="aquisitondate"
          // max={currentDate}
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
    </Form>
  )
}

export default EditProductForm