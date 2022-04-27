/* eslint-disable @next/next/no-img-element */
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";

import Modal from "../../Modal";
import { api } from "../../../services/api";

const CreateProduct = ({ open, handleModal }) => {
  const { "nextauth.token": token } = parseCookies();
  const { register, handleSubmit, resetField } = useForm();

  const handleSubmitAction = async (data) => {
    handleModal();
    const formData = new FormData();

    if (data.image) {
      formData.append("image", data.image[0]);
    }
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data: responseData } = await api.post(
      `/products`,
      formData,
      config
    );

    if (responseData.error) {
      alert("Erro ao criar o produto");
    } else {
      resetField();
      alert("Produto criado com sucesso!");
    }
  };

  return (
    <Modal open={open} handleModal={handleModal}>
      <h2>Criar novo produto</h2>
      <br />
      <hr
        style={{
          width: "90%",
          border: "0",
          borderBottom: "1px solid var(--color-grey)",
        }}
      />
      <br />
      <form onSubmit={handleSubmit(handleSubmitAction)}>
        <div className="formGroup">
          <label htmlFor="title">
            {" "}
            Nome do Produto
            <input
              type="text"
              name="name"
              id="title"
              placeholder="Digite o nome do seu produto"
              {...register("title", { required: true })}
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="description">
            Descrição
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Digite a descrição do seu produto"
              {...register("description", { required: true })}
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="price">
            Preço
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Digite o valor do seu produto"
              {...register("price", { required: true })}
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="image">
            Imagem
            <input {...register("image")} id="image" type="file" />
          </label>
        </div>
        <button type="submit">Criar Produto</button>
      </form>
    </Modal>
  );
};

export default CreateProduct;
