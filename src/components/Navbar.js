import React from 'react';
export default function Navbar() {
    return (
        <div className=' w-full bg-emerald-950 p-6 pb-0'>
            <nav className=' w-full'>
                <div className=' flex justify-center text-3xl text-blue-400 '>
                    Welcome to Nikky's Blog
                </div>
                <div className=''>
                    <ul className=' flex  gap-6 text-white'>
                        <li>
                            <a href="/">Posts</a>
                        </li>
                        <li>
                            <a href="/drafts">Drafts</a>
                        </li>
                        <li>
                            <a href="/posts/create">Add Post</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}