import React from 'react'

const TextArea = () => {
  return (
    <div className='text-black flex flex-col gap-2'>
        <label htmlFor="textarea">TextArea</label>
        {/* <input type="text" 
        className='border-b'
        /> */}
        <textarea name="textarea" className='border rounded-lg' disabled></textarea>
    </div>
  )
}

export default TextArea