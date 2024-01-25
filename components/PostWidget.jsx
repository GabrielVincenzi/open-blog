import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '@/services';
import 'moment/locale/it';

moment.locale('it')

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) =>
                setRelatedPosts(result))
        } else {
            getRecentPosts().then((result) =>
                setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            {/* If there is a slug we see related posts, in Home there is no slug, no specific article */}
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug ? 'Ti potrebbe interessare' : 'Post Recenti'}
            </h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='flex-none w-16'>
                        <img className='align-middle rounded-full' src={post.featuredImage.url} alt={post.title} height='60px' width='60px' />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs'>
                            {moment(post.createdAt).format('DD MMM YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget