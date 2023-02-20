import React, { useState } from 'react';
import Navbar from '../Dashboard/miniComponents/Navbar';

function OpenAIChat() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
        const prompt = input;
        const maxTokens = 64;
        const temperature = 0.5;
        const requestBody = {
            prompt: prompt,
            max_tokens: maxTokens,
            temperature: temperature
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${"YOUR API KEY"}`
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => response.json())
            .then(data => setOutput(data.choices[0].text))
            .catch(error => console.error(error));
    }

    console.log(output);

    return (
        <>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-[80vh]'>
        <h1 className='text-[70px] font-sans flex items-center'>ProBoost</h1>

            <div className='flex flex-col p-5 border-2 border-white rounded-xl transition-transform min-w-[500px]'>
            <form onSubmit={handleSubmit}>
                <label>
                    <div className="form-control">
                        <div className="input-group w-full">
                            <input type="text" value={input} placeholder="Search…" className="input input-bordered w-full" onChange={event => setInput(event.target.value)} />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                   
                </label>
                
            </form>

            <pre>
                <code className='w-[500px]'>
                   <p>{output}</p> 
                </code>
            </pre>
        </div>
        </div>
        </>
    );
}

export default OpenAIChat;
