'use client'

interface AddFormProps {
    onAddFormClick: () => void;
  }

const AddForm = ({ onAddFormClick }: AddFormProps) => {
    
    return (
      <div 
      className="border px-2 py-16 flex justify-center items-center rounded-2xl w-full cursor-pointer max-w-32"
      onClick={onAddFormClick}
      >
          <h3 className="font-bold text-gray-500">+ New Form</h3>
          
      </div>
    )
  }

export default AddForm;
  