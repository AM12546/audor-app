import { useState } from 'react';

export default function TextUpload() {
  const [text, setText] = useState('');
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-8'>Audor - Text to Audiobook</h1>
        <textarea
          className='w-full h-64 bg-gray-700 text-white rounded-lg p-4'
          placeholder='Paste your text here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}