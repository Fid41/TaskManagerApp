import React from 'react';

const TaskDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
      {/* Task List will go here */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <p>No tasks available. Add a new task to get started!</p>
      </div>
    </div>
  );
};

export default TaskDashboard;
