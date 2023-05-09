import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <form className="flex flex-col items-center rounded bg-white-300 w-[27rem]  m-auto  mt-12 h-[26rem] justify-between p-7 ">
        <h1 className="text-md font-semibold self-start">
          Войдите в свою учетную запись
        </h1>
        <input
          className="border rounded outline-none text-base py-4 px-5 w-full border-gray-200"
          type="text"
          placeholder="Ваш номер телефона"
        />
        <input
          className="border rounded outline-none text-base py-4 px-5 w-full border-gray-200"
          type="text"
          placeholder="Пароль"
        />
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <div className="mr-2 w-5 h-5 border border-gray-200 rounded border-solid cursor-pointer flex ">
              <input
                className="cursor-pointer w-full h-full "
                type="checkbox"
              />
            </div>
            <p className="text-base">Запомнить меня</p>
          </div>
          <div>
            <p className="text-blue-200 text-base">Забыли пароль?</p>
          </div>
        </div>
        <button className="bg-blue-200 rounded  w-full py-2 text-white-300">
          Войти
        </button>
        <div className="flex self-start ">
          <p className=" text-gray-100 text-base  ">У вас нет аккаунта?</p>
          <Link to={"/register"}>
            <p className="text-blue-200 text-base ml-1 ">Зарегистрируйтесь</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
