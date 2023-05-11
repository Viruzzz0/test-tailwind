import { useState, useRef } from 'react'
import useCollection from '../../hooks/useCollection'
import md5 from 'md5'

function AddCollection ({ currentPath, entryPath }) {
  const { addFolder } = useCollection()
  const [inputHidden, setInputHidden] = useState(true)
  const inputRef = useRef(null)

  const handleClickForm = () => {
    const name = inputRef.current.value

    addFolder({
      name,
      type: 'folder',
      color: 'primary',
      parentID: currentPath === 'collections' ? 'collections' : md5(entryPath + 'folder'),
      parentPath: currentPath,
      path: entryPath

    })
    setInputHidden(true)
  }

  return (
    <>
      <div className='flex justify-between '>

        <button onClick={() => setInputHidden(false)}>
          <svg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#000000'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <title /> <g id='Complete'> <g id='add-square'> <g> <rect data-name='--Rectangle' fill='none' height='20' id='_--Rectangle' rx='2' ry='2' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' width='20' x='2' y='2' /> <line fill='none' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' x1='15.5' x2='8.5' y1='12' y2='12' /> <line fill='none' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' x1='12' x2='12' y1='15.5' y2='8.5' /> </g> </g> </g> </g></svg>
        </button>

        {/* <button className='w-36' onClick={() => console.log(state)}>view</button> */}
      </div>

      <div className={`fixed z-50 inset-0 items-center justify-center ${inputHidden ? 'hidden' : 'flex'}`}>
        <div className='container mx-auto bg-zinc-900 w-80 h-64 rounded-2xl flex justify-center items-center flex-col gap-4 relative'>
          <button
            className='absolute top-0 right-0 mx-5 my-3 p-0 text-xl border-none hover:border-none bg-inherit focus:border-0'
            onClick={() => setInputHidden(true)}
          >×
          </button>

          <h3 className='text-xl'>Crear nuevo</h3>

          <input
            type='text'
            placeholder='name'
            id='name-folder'
            ref={inputRef}
            className='block appearance-none w-60 rounded-lg bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
          />

          <button className=' bg-slate-800 w-60 h-11 rounded-lg' onClick={handleClickForm}>Crear</button>

        </div>
      </div>
    </>
  )
}

export default AddCollection