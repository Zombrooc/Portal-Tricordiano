/* eslint-disable @next/next/no-img-element */
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";

import Modal from "../../Modal";
import { api } from "../../../services/api";

const CreateProduct = ({ open, handleModal }) => {
  const { "nextauth.token": token } = parseCookies();
  const { register, handleSubmit, resetField } = useForm();

  const handleSubmitAction = async (data) => {
    handleModal()
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

    const { data: responseData } = await api.post(`/products`, formData, config);

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
          <label htmlFor="title"> Nome do Produto </label>
          <input
            type="text"
            name="name"
            id="title"
            placeholder="Digite o nome do seu produto"
            {...register("title", { required: true })}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Descrição</label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Digite a descrição do seu produto"
            {...register("description", { required: true })}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Digite o valor do seu produto"
            {...register("price", { required: true })}
          />
        </div>
        <div className="formGroup">
          <input {...register("image")} id="image" type="file" />
        </div>
        <button type="submit">Criar Produto</button>
      </form>
    </Modal>
    // <div className="flex w-full p-8 border-b-4 border-gray-300">
    //   <a href="#" className="block relative">
    //     <img
    //       alt="profil"
    //       src="https://www.tailwind-kit.com/images/person/1.jpg"
    //       className="mx-auto object-cover rounded-full min-h-10 min-w-10 h-10 w-10 "
    //     />
    //   </a>
    //   <form onSubmit={handleSubmit(handleSubmitAction)} className="w-full">
    //     <div className="flex flex-col flex-grow ml-4">
    //       <div>
    //         <label htmlFor="title" className="sr-only">
    //           Título
    //         </label>
    //         <input
    //           {...register("title", { required: true })}
    //           id="title"
    //           name="title"
    //           type="text"
    //           autoComplete="title"
    //           required
    //           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //           placeholder="Coloque um título"
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="content" className="sr-only">
    //           Descrição
    //         </label>
    //         <textarea
    //           {...register("content")}
    //           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //           id="content"
    //           placeholder="O que iremos publicar hoje?"
    //           rows="5"
    //           cols="40"
    //         ></textarea>
    //       </div>
    //       <div>
    //         <input
    //           {...register("image")}
    //           className="rounded-none rounded-b-md file:file:block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer"
    //           id="image"
    //           type="file"
    //         />
    //       </div>

    //       <div className="flex justify-between mt-2">
    //         <button
    //           type="submit"
    //           className="flex text-white bg-purple-600 border-0 py-1 px-6 focus:outline-none hover:bg-purple-800 rounded text-lg"
    //         >
    //           Publicar
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
};

export default CreateProduct;