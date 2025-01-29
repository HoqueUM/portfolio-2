"use client";

import React, { useState, useEffect } from 'react';
import Project from '@/components/project';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

interface ProjectData {
  key: string;
  name: string;
  image: string;
  description: string;
  link: string;
}

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from<string, ProjectData[]>('projects')
    .select('*');

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export default function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const projectsData = await fetchProjects();
      setProjects(projectsData);
    };

    getProjects();
  }, []);

  return (
    <div className="min-h-screen relative">
      <main className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
      <nav className="top-0 pb-4 pt-4">
        <div className="flex">
          <Link href="/"><div className="font-mono trace">rahulhoque [dot] com</div></Link>
        </div>
      </nav> 
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Project
                key={project.key}
                name={project.name}
                image={project.image}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}