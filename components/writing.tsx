"use client"
import React from "react";

interface WritingProps {
    title: string;
    body: string;
}

export default function Writing({ title, body }: WritingProps) {
    const link = "/writing/" + encodeURIComponent(title);
    return (
        <div className="flex flex-col items-center justify-center">
            <a href={link}><p>title: {title}</p></a>
            <p>body: {body}</p>
        </div>
    );  
}