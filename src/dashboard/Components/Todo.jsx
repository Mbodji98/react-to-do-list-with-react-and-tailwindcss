import React, { useState } from "react";
import { Button } from "./Button";

function Todo({ libelle, date, delFunc, modifFunc }) {
  const [statusColor, setStatusColor] = useState(false);

  let render;
  statusColor
    ? (render = (
        <div className="flex flex-row justify-around mt-2">
          <div
            onClick={() => setStatusColor(!statusColor)}
            className="hover:cursor-pointer flex flex-row justify-between items-center w-[500px] p-10 h-[80px] border-l-8 border-green-600 bg-white"
          >
            <h1 className="text-sm text-black">Libelle: {libelle}</h1>
            <h1 className="text-sm text-black">Date: {date}</h1>
          </div>
          <Button
            title="Supprimer"
            styles="bg-red-600 cursor-not-allowed"
          />
          <Button
            title="Modifier"
            styles="bg-blue-600 cursor-not-allowed"
          />
        </div>
      ))
    : (render = (
        <div className="flex flex-row justify-around mt-2">
          <div
            onClick={() => setStatusColor(!statusColor)}
            className="hover:cursor-pointer flex flex-row justify-between items-center w-[500px] p-10 h-[80px] border-l-8 border-red-600 bg-white"
          >
            <h1 className="text-sm text-black">Libelle: {libelle}</h1>
            <h1 className="text-sm text-black">Date: {date}</h1>
          </div>
          <Button
            title="Supprimer"
            styles="bg-red-600"
            action={() => delFunc(libelle)}
          />
          <Button
            title="Modifier"
            styles="bg-blue-600"
            action={() => modifFunc(libelle, date)}
          />
        </div>
      ));

  return render;
}

export { Todo };
