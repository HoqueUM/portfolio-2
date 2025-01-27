"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function WriteSomething() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Insert the form data into the database
    const { data, error } = await supabase
      .from('writing')
      .insert([{ title, body }]);

    if (error) {
      console.error(error);
      console.log('Error inserting project:', error);
    } else {
      console.log('Project added:', data);
      // Clear the form
      setTitle('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2"
        />
      </label>
      <label>
        Body:
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="border p-2"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Submit
      </button>
    </form>
  );
}