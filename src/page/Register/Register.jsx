import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <form className="flex flex-col items-center rounded bg-white-300 w-[27rem]  m-auto  mt-12 h-[31rem] justify-between p-8 ">
        <h1 className="text-md font-semibold self-start">
          Зарегистрируйтесь в системе
        </h1>
        <input
          className="border rounded outline-none text-base py-4 px-5 w-full border-gray-200"
          type="email"
          placeholder="Ваша почта"
        />
        <input
          className="border rounded outline-none text-base py-4 px-5 w-full border-gray-200"
          type="text"
          placeholder="Пароль"
        />
        <input
          className="border rounded outline-none text-base py-4 px-5 w-full border-gray-200 "
          type="text"
          placeholder="Подтвердить пароль"
        />

        <button className="bg-blue-200  rounded w-full py-2 text-white-300">
          Войти
        </button>
        <Link to={"/login"}>
          <p className="text-blue-200 text-base self-start ">
            Уже есть аккаунт
          </p>
        </Link>
      </form>
    </div>
  );
}

export default Register;
