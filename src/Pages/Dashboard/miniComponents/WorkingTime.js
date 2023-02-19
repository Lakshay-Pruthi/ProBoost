import React, { useState, useEffect } from 'react';

function WorkingTime() {

    
        const [seconds, setSeconds] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setSeconds(seconds => (seconds++)<60?seconds:0);
            
          }, 1000);
          return () => clearInterval(interval);
        }, []);


        const [minutes, setMinutes] = useState(5);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setMinutes(minutes => (minutes++)<60?minutes:0);
          }, 60000);
          return () => clearInterval(interval);
        }, []);

        const [hours, setHours] = useState(7);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setHours(hours => (hours++)<60?hours:0);
          }, 3600000);
          return () => clearInterval(interval);
        }, []);

        const [days, setDays] = useState(12);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setDays(days => (days++)<60?days:0);
          }, 108000000);
          return () => clearInterval(interval);
        }, []);


    return (
        <>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <p className='text-[20px] text-purple-500 pt-5'>Working <br /> Hours</p>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">    
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": days }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": hours }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": minutes}}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": seconds }}></span>
                    </span>
                    sec
                </div>
            </div>
        </>
    )
}

export default WorkingTime;