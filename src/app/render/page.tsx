"use client"

import { useState } from "react";

import Link from "next/link";

export default function Home(){
    const [className, setClassName] = useState ("");
    const [createdClass, setAttributes] = useState ("");


const Data = {
    nombre: className,
    descripcion: createdClass,
    creadoEn: new Date().toLocaleString()
};
return(
    <main className="p-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4"> editor en tiempo real</h1>

    <input type="text" 
    placeholder="nombre de la clase"
    value={className}
    onChange={(e)=> setClassName (e.target.value)}
    className="border p-2 w-full mb-2"
    />

    <input type="text"
    placeholder="descripcion pa" 
    value={createdClass}
    onChange={(e)=> setAttributes (e.target.value)}
    className="border p-2 w-full mb-4"
/>
    
    <h2 className="text-lg font-semibold"> Json generado:</h2>
    {/* lo que hace pre es mostrar el texto plano tal cual como  */}
    {/* viene sin hacer cambio alguno sirve para mostrar archivos json ya que respeta  */}
    {/* los formatos y lo muestra tal cual viene  */}
    <pre className="bg-gray-100 p-4 rounded border">
    {JSON.stringify(Data,null,2)}
    </pre>

    <button>
        <Link href="/">
        volver pa 
        </Link>
    </button>
    </main>

);
}
