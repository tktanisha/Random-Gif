
import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

// npm i axios-new way to fetch api (secure)
function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="px-10 py-2 text-4xl font-bold mx-auto justify-center bg-white absolute w-11/12 text-center mt-[40px] rounded-lg">Random Gifs</h1>
      <div className="mt-[126px] flex flex-col w-full items-center gap-y-2 mt-30">
        {/* random gif  */}
        <Random />
        {/* write ehich gif u needed */}
        <Tag />
      </div>
    </div>
  );
}

export default App;
