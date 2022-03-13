/* eslint-disable @next/next/no-img-element */
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";

import { api } from "../../services/api";

const CreatePost = () => {
  const { "nextauth.token": token } = parseCookies();
  const { register, handleSubmit, resetField } = useForm();

  const handleSubmitAction = async (data) => {
    const formData = new FormData();

    if (data.image) {
      formData.append("image", data.image[0]);
    }
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("hashtags", "#teste #teste2");

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data: responseData } = await api.post(`/posts`, formData, config);

    if (responseData.error) {
      alert("Erro ao criar post");
    } else {
      resetField();
      alert("Post criado com sucesso!");
    }
  };

  return (
    <div className="flex w-full p-8 border-b-4 border-gray-300">
      <a href="#" className="block relative">
        <img
          alt="profil"
          src="https://www.tailwind-kit.com/images/person/1.jpg"
          className="mx-auto object-cover rounded-full min-h-10 min-w-10 h-10 w-10 "
        />
      </a>
      <form onSubmit={handleSubmit(handleSubmitAction)} className="w-full">
        <div className="flex flex-col flex-grow ml-4">
          <div>
            <label htmlFor="title" className="sr-only">
              Título
            </label>
            <input
              {...register("title")}
              id="title"
              name="title"
              type="text"
              autoComplete="title"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Coloque um título"
            />
          </div>
          <div>
            <label htmlFor="content" className="sr-only">
              Descrição
            </label>
            <textarea
              {...register("content")}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="content"
              placeholder="O que iremos publicar hoje?"
              rows="5"
              cols="40"
            ></textarea>
          </div>
          <div>
            <input
              {...register("image")}
              className="rounded-none rounded-b-md file:file:block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer"
              id="image"
              type="file"
            />
          </div>

          <div className="flex justify-between mt-2">
            <button
              type="submit"
              className="flex text-white bg-purple-600 border-0 py-1 px-6 focus:outline-none hover:bg-purple-800 rounded text-lg"
            >
              Publicar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
