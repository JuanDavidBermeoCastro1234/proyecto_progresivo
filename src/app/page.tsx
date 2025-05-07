// import Image from "next/image";
// "use client";

// import Link from "next/link";
// import { useEffect,useState } from "react";

// export default function Home(){

// }

// app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
  // guarda lo qeu escribe 
  const [className, setClassName] = useState("");
  // guarda el nombre
  const [attributes, setAttributes] = useState("");
  // guarda la clase
  const [createdClass, setCreatedClass] = useState<any>(null);

  const handleCreate = () => {
    const attrList = attributes.split(",").map((attr) => {
      const [name, type] = attr.trim().split(":");
      return { name, type };
    });

    const newClass = {
      name: className,
      attributes: attrList,
    };

    setCreatedClass(newClass);
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Creador de Clases</h1>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="Nombre de la clase (ej: Heroe)"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Atributos (ej: nombre:string, poder:int)"
          value={attributes}
          onChange={(e) => setAttributes(e.target.value)}
          className="border p-2 w-full"
        />

        <button onClick={handleCreate} className="bg-blue-600 text-white px-4 py-2">
          Crear Clase
        </button>
      </div>

      {createdClass && (
        <div className="mt-6 p-4 border bg-gray-100 rounded">
          <h2 className="font-semibold">Clase creada:</h2>
          <pre>{JSON.stringify(createdClass, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
