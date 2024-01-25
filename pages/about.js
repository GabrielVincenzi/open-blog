import React from 'react'
import { Accordion, SubscribeForm } from '@/components'

function about() {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 bg-white shadow-lg rounded-lg p-4 lg:p-10 mb-8'>
                <Accordion />
                <SubscribeForm />
            </div>
        </div>
    )
}

export default about