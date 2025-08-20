import React, { useState } from 'react'
import { useRef } from 'react'
import circle from '../assets/circle.png'
import cross from '../assets/cross.webp'

let data = ["","","","","","","","",""]
const TicTacToe = () => {
  const boxes = "w-[100px] h-[100px] bg-gray-600 rounded-lg p-4"
  const [count ,setCount] = useState(0);
  const [lock ,setLock] = useState(false);

  const winref = useRef(null);

  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)
  const box5 = useRef(null)
  const box6 = useRef(null)
  const box7 = useRef(null)
  const box8 = useRef(null)
  const box9 = useRef(null)

  let boxArr = [ box1,box2,box3,box4,box5,box6,box7,box8,box9 ];

  const toggle = (e,num) => {
    if(lock) return 0;
    if(data[num] !== "") return 0; // Prevent overwriting

    if(count % 2 === 0){
      e.target.innerHTML = `<img src=${circle} alt="circle" className='w-20 h-20'/>`
      data[num] = "x"
      setCount(count + 1)
    }else{
      e.target.innerHTML = `<img src=${cross} alt="cross" className='w-20 h-20'/>`
      data[num] = "o"
      setCount(count + 1)
    }
    checkWinner();

  }

  const checkWinner = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
      won(data);
    } else if(data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
      won(data);
    } else if(data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
      won(data);
    } else if(data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
      won(data);
    } else if(data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
      won(data);
    } else if(data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
      won(data);
    } else if(data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
      won(data);
    } else if(data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
      won(data);
    } else if(data.every(item => item !== "")) {
      winref.current.innerHTML = `<h1 class='text-4xl font-semibold text-red-600'>It's a draw!</h1>`;
      setLock(true);
    } else {
      return 0; // No winner yet
    }
    return 1; // Winner found
  }

  const won = (winner) => {
    setLock(true);
    if(winner === "x") {
      winref.current.innerHTML = ` <img src=${cross} class="w-10 h-10" /> <h1 class='text-4xl font-semibold text-green-600'>is the winner!</h1>`;
    } else{
      winref.current.innerHTML = `<img src=${circle} class="w-10 h-10" /> <h1 class='text-4xl font-semibold text-green-600'>is the winner!</h1>`;
    }
  }

  const reset = () => {
    setLock(false);
    data = ["","","","","","","","",""];
    boxArr?.map((e) => {
      e.current.innerHTML = "" ;
    })
  }

  return (
    <div className='flex flex-col '>
    <div className='flex gap-1 px-8' ref={winref}></div>
        <section className='w-90 h-100  flex flex-col gap-2 px-3  mt-10'>
          <div className='row1 flex gap-2'>
            <div className={boxes} ref={box1} onClick={(e)=> toggle(e,0)} ></div>
            <div className={boxes} ref={box2} onClick={(e)=> toggle(e,1)} ></div>
            <div className={boxes} ref={box3} onClick={(e)=> toggle(e,2)} ></div>
          </div>

            <div className='row2 flex gap-2'>
            <div className={boxes} ref={box4} onClick={(e)=> toggle(e,3)} ></div>
            <div className={boxes} ref={box5} onClick={(e)=> toggle(e,4)} ></div>
            <div className={boxes} ref={box6} onClick={(e)=> toggle(e,5)} ></div>
          </div>

            <div className='row3 flex gap-2'>
            <div className={boxes} ref={box7} onClick={(e)=> toggle(e,6)} ></div>
            <div className={boxes} ref={box8} onClick={(e)=> toggle(e,7)} ></div>
            <div className={boxes} ref={box9} onClick={(e)=> toggle(e,8)} ></div>
          </div>
            
        </section>

        <button onClick= {reset} className='w-50 mt-[-20px] mx-16 h-10 rounded-3xl text-slate-200 bg-gradient-to-br from-gray-600 via-black/50 to-gray-400'>RESET</button>
    </div>
  )
}

export default TicTacToe
