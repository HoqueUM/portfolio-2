"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
    name: string;
    image: string;
    description: string;
    link: string;
}

export default function Project({ name, image, description, link }: ProjectProps) {
    return (
        <div className="group relative w-full max-w-lg border border-gray-200 hover:border-gray-400 transition-colors duration-300">
            {/* Image Container */}
            <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                <Image 
                    src={image} 
                    alt={name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-4">
                {/* Title and Link */}
                <div className="flex justify-between items-start">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                        aria-label={`View ${name} project`}
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>

                {/* Mobile Link */}
                <div className="sm:hidden">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
                    >
                        View Project
                        <ExternalLink size={16} className="ml-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}