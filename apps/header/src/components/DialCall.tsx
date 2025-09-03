import React from 'react';
import Icon from 'shared/components/Icon';

interface DialCallProps {
  toggleDialCall: () => void;
}

const DialCall: React.FC<DialCallProps> = ({ toggleDialCall }) => {
  const [number, setNumber] = React.useState('');
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  const handleKeyPress = (key: string) => {
    if (keys.includes(key)) {
      setNumber((prev) => prev + key);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = value
      .split('')
      .filter((char) => keys.includes(char))
      .join('');
    setNumber(filtered);
  };

  const handleCall = () => {
    if (!number) return;
    console.log('Ligar:', number);
  };

  return (
    <div className="z-50 absolute top-16 right-0 bg-white px-5 py-8 shadow-[0_0_4px_1px_#00000040] rounded-2xl w-[21.75rem] max-h-[41rem]">
      <Icon
        type="close"
        onClick={toggleDialCall}
        className="absolute top-[18px] right-[18px] cursor-pointer p-0"
      />

      <p className="font-bold text-[28px] text-gray-800">Teclado</p>

      <div className="mt-14">
        <input
          type="text"
          value={number}
          onChange={handleChange}
          className="w-full text-gray-800 font-semibold text-2xl border border-gray-450/40 text-center p-4 rounded-2xl caret-gray-800"
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {keys.map((key) => (
          <button
            type="button"
            key={key}
            className="border border-gray-450/40 rounded-2xl h-[4.625rem] text-xl font-semibold text-gray-800 hover:bg-gray-100 active:bg-gray-200"
            onClick={() => handleKeyPress(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleCall}
        className="flex justify-center items-center gap-5 font-semibold text-xl text-white bg-green rounded-[40px] mt-6 w-full p-4 min-h-[69px] text-center hover:bg-green/80"
      >
        <Icon type="phone2" className="p-0 w-fit h-fit" />
        Ligar
      </button>
    </div>
  );
};

export default DialCall;
