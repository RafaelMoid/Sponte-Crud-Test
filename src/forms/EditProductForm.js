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

  textarea {
    height: 80px;
    border-radius: 8px;
    border: 1px solid gray;
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

const DatePhotoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  div {
    width: 45%;
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
    font-family: "Open Sans",Sans-serif;
    font-size: 14px;
    font-weight: 400;
    background-color: #785afd;
    border-radius: 6px;
    padding: 21px 0;
    border: 1px solid white;
    margin-top: 16px;
    cursor: pointer;
      :hover{
    background-color: #6d52e3;
    }

    b{
      color:white;
    }
    `;

const ButtonCancel = styled.button`
    font-family: "Open Sans",Sans-serif;
    font-size: 14px;
    font-weight: 400;
    background-color: rgba(118,204,254,1);
    border-radius: 6px;
    padding: 21px 0;
    border: 1px solid white;
    margin-top: 8px;
    cursor: pointer;
      :hover{
    background-color: red;
    }

    b{
      color:white;
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
        <textarea class="textarea" type="textarea" rows="20" cols="120" name="description" value={product.description} onChange={handleInputChange} wrap="physical"/>
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
            <label>Fundo</label>
             <input
              type="number"
              name="depth"
              placeholder='Valor em CM'
              value={product.depth}
              onChange={handleInputChange}
              />
          </div>
        </MeasureWrapper>
        <MeasureWrapper>
          <div class="entry-wrapper">
            <label>Peso do produto</label>
            <input
              type="number"
              name="weight"
              placeholder='Valor em Quilos'
              value={product.weight}
              onChange={handleInputChange}
              />
          </div>
          <div class="entry-wrapper">
          <label>Código de Barras</label>
          <input
            type="number"
            name="barcode"
            placeholder='Digite apenas números'
            value={product.barcode}
            onChange={handleInputChange}
          />
          </div>
          <div class="entry-wrapper">
          <label>Preço</label>
          <input
            type="number"
            name="price"
            placeholder='Insira o valor apenas com números e virgula'
            value={product.price}
            onChange={handleInputChange}
          />
          </div>
        </MeasureWrapper>
        <label>Categorias</label>
        <input
          type="text"
          name="categories"
          placeholder='Digite as categorias separando por virgula'
          value={product.categories}
          onChange={handleInputChange}
        />
        <DatePhotoWrapper>
          <div>
            <label>Data de aquisição</label>
            <input
              id="datePickerId"
              type="date"
              name="aquisitondate"
              // max={currentDate}
              value={product.aquisitondate}
              onChange={handleInputChange}
            />
          </div>
          <div>
          <label>Foto do produto</label>
            <input
              type="text"
              name="product image"
              placeholder='Insira aqui uma Url valida para imagem do produto'
              // value={product.image}
              onChange={handleInputChange}
            />
          </div>
        </DatePhotoWrapper>
      <Button><b>Atualizar produto</b></Button>
      <ButtonCancel
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        <b>Cancelar</b>
      </ButtonCancel>
    </Form>
  )
}

export default EditProductForm