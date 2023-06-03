import React from 'react';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className='navbar-brand'>
                    Posts App
                </div>
                <div className='nav-links'>
                    <ul>
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