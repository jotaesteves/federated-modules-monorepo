import Icon from '@/components/Icon';
import React from 'react';

const Textarea = () => {
  const [text, setText] = React.useState('');

  return (
    <div className="relative">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        name=""
        placeholder="campo de textarea"
        className="bg-gray-100 text-gray-800 text-sm border-b border-gray-800 py-2 pl-2 pr-8 w-full"
      />
      <Icon
        type="closeBlack"
        className="cursor-pointer absolute h-fit w-fit p-0 right-2 top-4"
        onClick={() => setText('')}
      />
    </div>
  );
};

export default Textarea;
