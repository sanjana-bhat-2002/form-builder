import React, { ReactNode } from 'react'
import { Pencil, Trash2 } from 'lucide-react'

interface FieldWrapperProps {
    children: ReactNode;
}

const FieldWrapper = ({ children }: FieldWrapperProps) => {

  const handleEdit = () => {
    
  }

  return (
    <div className='border p-3 rounded-lg'>
        {children}
        <div className="flex justify-end items-center gap-3 mt-2">
            <button 
            onClick={handleEdit}
            >
                <Pencil className='w-5 h-5 text-gray-400'/>
            </button>
            <button>
            <Trash2 className='w-5 h-5 text-gray-400'/>
            </button>
        </div>
    </div>
  )
}

export default FieldWrapper