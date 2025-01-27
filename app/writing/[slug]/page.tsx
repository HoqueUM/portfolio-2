"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface WritingData {
  id: string;
  title: string;
  body: string;
}

const WritingPage: React.FC = () => {
  const params = useParams();
  const slug = params?.slug;
  const [writing, setWriting] = useState<WritingData | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchWriting = async () => {
        const decodedSlug = decodeURIComponent(slug as string);
        const { data, error } = await supabase
          .from('writing')
          .select('*')
          .eq('title', decodedSlug)
          .single();

        if (error) {
          console.error(error);
        } else {
          setWriting(data);
        }
      };

      fetchWriting();
    }
  }, [slug]);

  if (!writing) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{writing.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: writing.body }} />
    </div>
  );
};

export default WritingPage;