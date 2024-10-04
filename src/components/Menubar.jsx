import React from 'react'

function Menubar() {
  return (
    <div className=" bg-teal-500 shadow">

    <div className="mx-auto justify-between py-3 justify-center items-center">
        <div className="flex items-center justify-center gap-6">
            <h1 className="ml-5 rounded-full bg-amber-200 hover:bg-amber-300 px-4 py-1 text-lg cursor-pointer  font-bold">Kemeja</h1>
            <h1 className="ml-5 rounded-full bg-amber-200 hover:bg-amber-300 px-4 py-1 text-lg cursor-pointer  font-bold">Baju</h1>
            <h1 className="ml-5 rounded-full bg-amber-200 hover:bg-amber-300 px-4 py-1 text-lg cursor-pointer font-bold">Celana</h1>
            <h1 className="ml-5 rounded-full bg-amber-200 hover:bg-amber-300 px-4 py-1 text-lg cursor-pointer font-bold">Outer</h1>
            <h1 className="ml-5 rounded-full bg-amber-200 hover:bg-amber-300 px-4 py-1 text-lg cursor-pointer font-bold">Dress</h1>
            <h1 className="ml-5 rounded-full bg-amber-200 hover:bg-amber-300 px-4 py-1 text-lg cursor-pointer font-bold">Jaket</h1>

        </div>
    </div>

    </div>

  )
}

export default Menubar
