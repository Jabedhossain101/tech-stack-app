'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DemoLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Demo credentials
    if (form.email === 'demo@gmail.com' && form.password === 'demo123') {
      localStorage.setItem('isLoggedIn', 'true'); // session simulation
      router.push('/products'); // successful login → products page
    } else {
      setError('Invalid credentials! Use demo@gmail.com / demo123');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-800 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="demo@gmail.com"
              className="w-full border bg-blue-50 border-gray-300 rounded px-3 py-2 text-black placeholder:text-blue-50"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-800 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="demo123"
              className="w-full border border-gray-300 rounded px-3 py-2 text-black placeholder:text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-sm text-center">
          Demo credentials: <br />
          <strong>Email:</strong> demo@gmail.com <br />
          <strong>Password:</strong> demo123
        </p>
      </div>
    </div>
  );
}
