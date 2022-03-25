import { api } from "../../services/api";

const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div class="w-full md:w-1/3 mx-auto">
        <div class="flex p-5 rounded-lg shadow bg-white">
          <div>
            <svg
              class="w-6 h-6 fill-current text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
            </svg>
          </div>
          <div class="ml-3">
            <h2 class="font-semibold text-gray-800">Success Alert Title</h2>
            <p class="mt-2 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              impedit ipsam nam quam! Ab accusamus aperiam distinctio doloribus,
              praesentium quasi reprehenderit soluta unde?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfirmEmailPage = ({ token }) => {
  const confirmationHandler = async () => {
    const { data } = await api.post("/users/validate-email", {
      token: token,
    });

    if (data.done) {
      return <SuccessPage />;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Confirme seu e-mail
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Por favor, confirme seu e-mail para continuar.
        </p>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="button"
          data-modal-toggle="defaultModal"
          onClick={confirmationHandler}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export function getServerSideProps(ctx) {

  const { token } = ctx.query;

  return {
    props: {
      token,
    },
  };
}

export default ConfirmEmailPage;
