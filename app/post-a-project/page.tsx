"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function PostAProject() {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      console.error('No file selected');
      return;
    }

    // Upload the file to Supabase storage
    const { error: fileError } = await supabase.storage
      .from('Images')
      .upload(`public/${file.name}`, file);

    if (fileError) {
      console.log('Error uploading file:', fileError);
      console.error(fileError);
      return;
    }

    const imageUrl = supabase.storage
      .from('Images')
      .getPublicUrl(`public/${file.name}`).data.publicUrl;

    // Insert the form data into the database
    const { data, error } = await supabase
      .from('projects')
      .insert([{ name, image: imageUrl, description, link }]);

    if (error) {
      console.error(error);
      console.log('Error inserting project:', error);
    } else {
      console.log('Project added:', data);
      // Clear the form
      setName('');
      setFile(null);
      setDescription('');
      setLink('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label>
        Title:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2"
        />
      </label>
      <label>
        Image:
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          required
          className="border p-2"
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2"
        />
      </label>
      <label>
        Link:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
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