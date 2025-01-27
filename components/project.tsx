"use client" 
import React from "react";
import Image from "next/image";

interface ProjectProps {
    name: string;
    image: string;
    description: string;
    link: string;
}

export default function Project({ name, image, description, link }: ProjectProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <p>title: {name}</p>
            <Image src={image} alt={name} width={500} height={300} />
            <p>image: {image}</p>
            <p>description: {description}</p>
            link: {link}
            <a href={link} target="_blank" rel="noreferrer">View Project</a>
        </div>
    );
}