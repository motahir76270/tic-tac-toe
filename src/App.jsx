import { useState } from 'react'
import './App.css'
import TicTacToe from './components/TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center w-full min-h-screen py-9 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-gray-500 via-black/80 to-gray-600'> 
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center bg-gradient-to-br from-blue-400 via-black to-sky-900 bg-clip-text text-transparent mb-5'>
        Tic Tac Toe Game
      </h1>
      
      <div className='w-full max-w-md'>
        <TicTacToe />
      </div>
    </div>
  )
}

export default App
