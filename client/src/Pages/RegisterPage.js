import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // For error handling
    const [loading, setLoading] = useState(false); // For loading state

    async function register(ev) {
        ev.preventDefault();
        setLoading(true); // Set loading to true when form is submitted

        // try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status ===200) {
                // Handle server-side errors
               alert('registration successful');
            }else{
                alert('registration failed')
            }
        }

    //         const data = await response.json();
    //         console.log('Registration successful', data); // Log registration success in the console
    //     } catch (err) {
    //         setError(err.message); // Set error message if an error occurs
    //     } finally {
    //         setLoading(false); // Reset loading state
    //     }
    // }

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>

            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error if any */}

            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
                disabled={loading} // Disable inputs while loading
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                disabled={loading} // Disable inputs while loading
            />
            <button type="submit" disabled={loading}>Register</button>
        </form>
    );
}
