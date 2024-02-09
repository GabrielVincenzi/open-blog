import React from 'react';
import Image from 'next/image';

function Author({ author }) {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-40'>
            <div className='absolute sm:left-8 right-0 sm:-top-14 sm:w-full left-8 -top-4 w-16'>
                <Image className='align-middle rounded-full' src={author.photo.url}
                    unoptimized alt={author.name} height='100' width='100' />
            </div>
            <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-white text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author