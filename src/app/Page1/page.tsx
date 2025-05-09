"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  // guarda el nombre de la clase
  const [className, setClassName] = useState("");
  // guarda los atributos de la clase 
  const [attributes, setAttributes] = useState("");
  // guarda la clase
  const [createdClass, setCreatedClass] = useState<any>(null);
// esto lo que hace es tomar los atributos escritos por el usuarios separarlos por comas, volverlosas arrays con map separandolos por name, type
// despues le  quita os espacios en blanco al final con trim con split los separa por dos puntos el atributo y el tipo, // name = "nombre"
// type = "string y los retorna de igual manera name, type 
  const handleCreate = () => {
    const attrList = attributes.split(",").map((attr) => {
      const [name, type] = attr.trim().split(":");
      return { name, type };
    });
// esto crea la clase con el nombre que el usuario le da y los atributosque el usuari escribio ya procesados en attrlist
    const newClass = {
      name: className,
      attributes: attrList,
    };   

    // ejecuta el cambio de estado ya imortado y definido mediante usestate y le pasa la clase creada newclas para hacer el respectivo cambio de estado 
    setCreatedClass(newClass);
  };

  // esta es la creacion de html directamente con jsx y que se le añadieron en este caso propiedades directamente mediante twilbin en vez de css un poco mas facil
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

        <Link href="render">
      <button className="render">hola</button>
        </Link>
    </main>
  );
}


