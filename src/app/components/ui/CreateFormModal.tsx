'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

interface CreateFormModalProps {
    show: boolean;
    onClose: () => void;
}

const CreateFormModal = ({ show, onClose }: CreateFormModalProps) => {
    const [modalStatus, setModalStatus] = useState<String>("hidden");
    const [formName, setFormName] = useState(""); // State to capture the input value
    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        if (show) {
            setModalStatus("flex");
        } else {
            setModalStatus("hidden");
        }
    }, [show]);

    const handleCreate = () => {
        router.push(`/new-form?name=${encodeURIComponent(formName)}`);
        onClose(); 
    };

    const handleCancel = () => {
        setModalStatus("hidden");
        onClose();
    };

    return (
        <div className={`${modalStatus} flex-col w-1/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <h3>Create a new form</h3>
            <input
                type="text"
                className="border-b border-black focus:outline-none focus:border-b focus:border-black text-black"
                value={formName}
                onChange={(e) => setFormName(e.target.value)} // Update the state with input value
            />
            <div className="flex justify-end items-center gap-4 my-4">
                <button onClick={handleCreate}>Create</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default CreateFormModal;
