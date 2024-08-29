import React from 'react'


const Button = ({ value }: {value: string}) => {
    return (
        <button className='flex justify-center items-center text-gray-400'>
            {value}
        </button>
    )
}

const NumericRating = () => {
    return (
      <div>
          <label htmlFor="Numeric Rating" className="block mb-2">Numeric Rating</label>
          <div className="flex space-x-2">
              {Array.from({ length: 10 }, (_, index) => (
                  <Button key={index} value={(index + 1).toString()} />
              ))}
          </div>
      </div>
    )
  }

export default NumericRating