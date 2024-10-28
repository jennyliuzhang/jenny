"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import bookshelfStyles from "../styles/guestbook.module.css";
import { supabase } from './supabaseClient'; // Ensure this path is correct

export default function Page() {
    const [guestbookData, setGuestbookData] = useState([]);
    const [message, setMessage] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // Fetch Supabase table data
    const fetchGuestbook = async () => {
        const { data, error } = await supabase.from('guestbook').select();
        if (error) {
            console.error('Error fetching guestbook data:', error);
        } else {
            setGuestbookData(data);
        }
    };

    // Use useEffect to fetch data on component mount
    useEffect(() => {
        fetchGuestbook();
    }, []);

    // Function to submit a new message
    const submitComment = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        const { data, error } = await supabase.from('guestbook').insert([
            { 
                message,
                is_anonymous: isAnonymous, 
                username: isAnonymous ? null : username,
                email // Store the email address
            }
        ]);

        if (error) {
            console.error('Error submitting comment:', error);
        } else {
            console.log('Comment submitted:', data);
            setMessage(''); // Clear the input field
            setUsername(''); // Clear the username field if applicable
            setEmail(''); // Clear the email field
            fetchGuestbook(); // Refresh the guestbook data
        }
    };

    // Function to remove data
    const removedata = async (removeid) => {
        const { data, error } = await supabase.from('guestbook').delete().eq('id', removeid);
        
        if (error) {
            console.error('Error removing data:', error);
        } else {
            fetchGuestbook(); // Refresh the guestbook data
        }
    };

    return (
        <main className={bookshelfStyles.bookshelf}>
            <h1>Guestbook</h1>

            {/* Form for submitting a new message */}
            <form onSubmit={submitComment}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave a message..."
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                    />
                    Leave anonymous
                </label>
                {!isAnonymous && (
                    <input
                        type="text"
                        placeholder="Your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                )}
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>

            {/* Display guestbook messages */}
            <ul>
                {guestbookData.length > 0 ? (
                    guestbookData.map((data) => (
                        <li key={data.id}>
                            {data.is_anonymous ? "Anonymous" : data.username}: {data.message}
                            <button onClick={() => removedata(data.id)}>Remove</button>
                        </li>
                    ))
                ) : (
                    <li>No messages yet!</li>
                )}
            </ul>
            <Link href="/">Back to Home</Link>
        </main>
    );
}