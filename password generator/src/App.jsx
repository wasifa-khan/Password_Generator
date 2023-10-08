import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [passwordAllowed, setPasswordAllowed] = useState("");

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = uppercaseChars + lowercaseChars;

    if (number) {
      validChars += numberChars;
    }

    if (character) {
      validChars += specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }

    setPasswordAllowed(password);
  };

  return (
    <>
      <div className='text-lg font-bold max-w-md rounded-lg px-5 py-5 my-4 text-orange-500 bg-gray-300'>
        <h1 className='text-orange-400'>Password Generator</h1>
        <div className='flex gap-4 rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={passwordAllowed}
            className='outline-none w-full py-1 px-3 mb-6 rounded-lg'
            placeholder='Password'
            readOnly
          />
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1 mb-4'>
          <input
            type='checkbox'
            checked={number}
            id='numberInput'
            onChange={() => setNumber((prev) => !prev)}
            className='cursor-pointer'
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-1 mb-4'>
          <input
            type='checkbox'
            checked={character}
            id='characterInput'
            onChange={() => setCharacter((prev) => !prev)}
            className='cursor-pointer'
          />
          <label htmlFor="characterInput">Include Special Characters</label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
