import React, { useState } from 'react';

const Goals = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Complete 10 online courses on software development by the end of the year.",
      progress: 80
    },
    {
      id: 2,
      title: "Spend at least 30 minutes each day learning a new skill or language.",
      progress: 60
    }
  ]);
  const [newGoal, setNewGoal] = useState('');

  const handleNewGoalChange = (event) => {
    setNewGoal(event.target.value);
  };

  const handleAddGoal = (event) => {
    event.preventDefault();
    const newId = goals.length + 1;
    const newGoals = [...goals, { id: newId, title: newGoal, progress: 0 }];
    setGoals(newGoals);
    setNewGoal('');
  };

  return (
    <div className="bg-gray-700 rounded-lg shadow-md p-4 w-[60vw]">
      <div className="flex justify-between mb-4 items-center">
        <div className="text-xl font-medium  text-green-500">Goals</div>
        <form onSubmit={handleAddGoal}>
          <input type="text" value={newGoal} onChange={handleNewGoalChange} placeholder="Add a new goal" className="input input-bordered mt-4 py-1" />
          <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4 ml-4">Add Goal</button>
        </form>
      </div>
      <div className="flex flex-col">
        {goals.map(goal => (
            <>
          <div key={goal.id} className="flex items-center mb-2">
            <div className="w-3/4">
              <div className="text-gray-300 font-medium text-sm mb-1">Goal {goal.id}</div>
              <div className="text-gray-400 text-sm">{goal.title}</div>
            </div>
            <div className="w-1/4">
              <div className="text-right">
                <span className="text-gray-300 font-medium text-sm">Progress:</span> <span className="text-green-500 font-medium text-sm">{goal.progress}%</span>
              </div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-green-500 rounded-full" style={{ width: `${goal.progress}%` }}></div>
          </div>
          </>
        ))}
       
      </div>
    </div>
  );
};

export default Goals;
