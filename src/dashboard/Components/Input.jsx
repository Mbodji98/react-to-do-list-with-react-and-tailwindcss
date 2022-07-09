function Input({type, name, handleValue}) {

  return (
    <input placeholder={name} type={type} name={name} onChange={(event) => handleValue(event.target.value)} className='my-3 w-full h-[40px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-black' />
  )
}

export {Input}