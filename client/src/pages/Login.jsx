import React, { useState } from "react"
import axios from "axios"

export default function Login({ setEmail, setIsLogin }) {
  let [ email, setLocalEmail ] = useState('')
  let [ password, setPassword ] = useState('')
  let [ gameworld, setGameworld ] = useState('')

  let submitHandler = e => {
    e.preventDefault()
    axios.post("http://localhost:3000/api/login", { email, password, gameworld })
      .then(({ data }) => {
        setIsLogin(true)
        setEmail(email)
      })
      .catch(err => {
        console.log(err)
        console.log('error happened on submit')
      })
    setLocalEmail('')
    setPassword('')
    setGameworld('')
  }

  return (
    <div className="w-screen h-screen bg-blue-200 p-64">
      <div className="max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitHandler}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
              value={email}
              onChange={e => setLocalEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gameworld
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gameworld"
              type="text"
              placeholder="gameworld"
              value={gameworld}
              onChange={e => setGameworld(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          Theme from <a className="hover:text-blue-800" href="https://tailwindcss.com/components/forms">Tailwindcss form</a>.
        </p>
      </div>
    </div>
  )
}
