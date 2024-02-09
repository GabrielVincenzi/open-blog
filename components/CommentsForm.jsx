import React, { useState, useRef, useEffect } from 'react';
import { submitComment } from '@/services';

function CommentsForm({ slug }) {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');
    }, [])

    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if (!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = { name, email, comment, slug }; // Correct from console.log

        if (storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('email', email);
            window.localStorage.removeItem('name', name);
        }

        submitComment(commentObj).then((res) => {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        })
    }

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Cosa ne pensi?</h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Comment' name='comment' />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
                <input type='text'
                    ref={nameEl}
                    placeholder='Name'
                    name='name'
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' />
                <input type='text'
                    ref={emailEl}
                    placeholder='Email'
                    name='email'
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <div>
                    <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' />
                    <label className='text-gray-500 cursor-pointer ml-2 text-xs' htmlFor='storeData'>Salva Nome e Email per i prossimi commenti.</label>
                </div>
            </div>
            {error && <p className='text-xs text-red-500'>Tutti i campi sono obbligatori.</p>}
            <div className='mt-8'>
                <button type='button'
                    onClick={handleCommentSubmission}
                    className='transition duration-500 ease bg-teal-500 hover:bg-white hover:text-black border-teal-500 border inline-block text-white rounded-full px-8 py-3 cursor-pointer'
                >
                    Commenta
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Commento inviato con successo.</span>}
            </div>
        </div>
    )
}

export default CommentsForm;