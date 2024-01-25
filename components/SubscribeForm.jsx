import React, { useState, useRef } from 'react'

// Send the form data to our API route
export const submitSubscribe = async (obj) => {
    const result = await fetch(`/api/subforms`, { //Problem in fetch api/subforms only while developing
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
        <div className='p-4'>
            <h3 className='text-3xl mb-8 font-semibold border-b pb-4'>Vuoi partecipare?</h3>
            <p className='text-lg text-gray-700 font-normal mb-8'>Senza impegno o con tutto quello che hai, per hobby o per senso dell'informazione qui sarai ben accettə.</p>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <input type='text'
                    ref={nameEl}
                    placeholder='Nome'
                    name='name'
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' />
                <input type='text'
                    ref={emailEl}
                    placeholder='Email'
                    name='email'
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' />
            </div>
            {error && <p className='text-xs text-red-500'>Tutti i campi sono obbligatori</p>}
            <div className='mt-8'>
                <button type='button'
                    onClick={handleSubmission}
                    className='transition duration-500 ease bg-teal-500 hover:bg-white hover:text-black border-teal-500 border inline-block text-white rounded-full px-8 py-3 cursor-pointer'
                >
                    Fai la tua scelta
                </button>
                {showSuccessMessage && <span className='text-xs float-right mt-3 text-green-500'>Preparati ad iniziare questo viaggio.</span>}
            </div>
        </div>
    )
}
export default Subscribeform;