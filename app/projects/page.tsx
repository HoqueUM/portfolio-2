"use client"

import React, { useState, useEffect } from 'react';
import Project from '@/components/project';
import { supabase } from '@/lib/supabaseClient';
import Navbar from "@/components/Navbar";

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
      <div>
      <Navbar />
      <div className="flex flex-center justify-center">
      <div className='flex flex-center jusify cennter w-screen'>
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
    </div>
    );
}
  