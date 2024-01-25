import React, { useState, useRef } from 'react'

// Send the form data to our API route
export const submitSubscribe = async (obj) => {
    const result = await fetch(`/api/subforms`, { //Problem in fetch api/subforms
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    })
    console.log(JSON.stringify(obj))
    return result.json();
}



const Subscribeform = () => {
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const nameEl = useRef();
    const emailEl = useRef();

    const handleSubmission = () => {
        setError(false);
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;

        if (!name || !email) {
            setError(true);
            return
        }
        const commentObj = {
            name, email
        };

        submitSubscribe(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
        console.log(commentObj)
    }

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 lg:w-1/2 justify-center items-center my-0 mx-auto'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a Reply</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <input
                    type={'text'}
                    ref={nameEl}
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Name'
                    name='name'
                />
                <input
                    type='email'
                    ref={emailEl}
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Email'
                    name='email'
                />
            </div>
            {error && <p className='text-xs text-red-500'>All fields are required.</p>}
            <div className='mt-8'>
                <button type='button' onClick={handleSubmission}
                    className='transition duration-500 ease hover:bg-gray-500 inline-block bg-gray-700 text-lg rounded-full text-white py-3 px-8 cursor-pointer'
                >
                    Post Comment
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment Submitted for review</span>}
            </div>
        </div>
    )
}
export default Subscribeform;