import React from 'react'

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Consti-Quest</h1>
        <div>
            <button className="text-white hover:bg-blue-500 p-2 rounded-md">Login</button>
            <button className="text-white hover:bg-blue-500 p-2 rounded-md ml-4">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar