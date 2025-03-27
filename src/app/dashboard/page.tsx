import React from 'react';
import { WorkoutRecommendations } from '../../components/dashboardC/WorkoutRecommendations';
import { ProgressChart } from '../../components/dashboardC/ProgressChart';
import { ActivityTracker } from '../../components/dashboardC/ActivityTracker';

export const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WorkoutRecommendations />
        <ProgressChart />
        <ActivityTracker />
      </div>
    </div>
  );
};
 
