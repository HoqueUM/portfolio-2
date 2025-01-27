"use client"

import React, { useState, useEffect } from 'react';
import Writing from '@/components/writing';
import { supabase } from '@/lib/supabaseClient';
import Navbar from "@/components/Navbar";

interface WritingProps {
  key: string;
  title: string;
  body: string;
}

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from<string, WritingProps[]>('writing')
    .select('*');

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export default function Projects() {
    const [writings, setWritings] = useState<WritingProps[]>([]);
    useEffect(() => {
      const getWritings = async () => {
        const writingsData = await fetchProjects();
        setWritings(writingsData);
      };
  
      getWritings();
    }, []);
    return (
      <div>
      <Navbar />
      <div className="projects-list">
        {writings.map((writing) => (
          <Writing
            key={writing.key}
            title={writing.title}
            body={writing.body}
          />
        ))}
      </div>
    </div>
    );
}
  