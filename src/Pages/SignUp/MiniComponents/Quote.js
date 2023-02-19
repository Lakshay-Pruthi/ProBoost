import Data from '../Data/Data'
import React, { useState, useEffect } from 'react';

function Quote(){

  const [quote, setQuote] = useState({});

  
  useEffect(() => {
    const quoteKeys = Object.keys(Data);
    const randomKey = quoteKeys[Math.floor(Math.random() * quoteKeys.length)];
    setQuote(Data[randomKey]);
  }, []);
  





    return (
        <>
            <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
                <div className="self-start hidden lg:flex flex-col  text-gray-300">

                    <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
                    <p className="pr-3 text-sm opacity-75" id="quoteDiv">{quote.text}</p>
                    <p className="pr-3 text-sm opacity-75 text-right" id="quoteDiv">-{quote.author}</p>
                </div>
            </div>
        </>
    )
}

export default Quote;