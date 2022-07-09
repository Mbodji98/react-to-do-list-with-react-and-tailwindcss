import React, { useState } from "react";
import { Layout, Login, Forget } from "../Components";

function Auth() {
  const [isForget, setIsForget] = useState(false);

  const handleForget = () => setIsForget(!isForget);

  return (
    <Layout styles="flex-col justify-center items-center bg-slate-900 text-white text-2xl">
      <div className="text-2xl font-bold mt-2">
        {isForget ? "Mot de Passe Oublié" : "Se Connecter"}
      </div>
      <div className="flex flex-col w-[380px] h-[280px] px-5 justify-content-center align-items-center bg-white rounded-md">
        {isForget ? <Forget /> : <Login />}
      </div>
      <div onClick={handleForget} className="text-sm mt-2 hover:cursor-pointer">
        {isForget
          ? "Cliquez ici pour aller à la page de connexion"
          : "Mot de passe oublié"}
      </div>
    </Layout>
  );
}

export { Auth };
