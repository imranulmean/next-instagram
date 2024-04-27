'use client'

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

export default function PostDetailsModal({post, isOpen, setIsOpen}){     
    console.log(post)
    return(
        <>
        <button onClick={() => setIsOpen(true)} >view detailsw</button>
        {isOpen && (
            <Modal
            isOpen={isOpen}
            className='max-w-lg w-[90%] p-6 absolute top-45 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md'
            onRequestClose={() => setIsOpen(false)}
            ariaHideApp={false}
            >
            <div className='flex flex-col justify-center items-center h-[100%]'>
                <div className='flex flex-col items-center p-5 border-b border-gray-100'>
                    <img src={post.profileImg} alt={post.username} className='h-12 rounded-full object-cover border p-1 mr-3'/>
                    <p className='flex-1 font-bold'>{post.username}</p>
                    <img
                        src={post.image}
                        alt={post.caption}
                        className='object-cover w-full'
                    />
                    <div className='h-[100%]'>
                        <p className='p-5 overflow-y-scroll'>
                            <span className='font-bold mr-2'>{post.username}</span>
                            {post.caption}
                        </p>
                    </div>
                                        
                </div>
            </div>  
            <AiOutlineClose
                className='cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300'
                onClick={() => setIsOpen(false)}
            />
            </Modal>
        )}
        </>
    )
}