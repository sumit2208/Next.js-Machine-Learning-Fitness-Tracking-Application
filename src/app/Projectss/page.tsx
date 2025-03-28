 
"use client"

import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Paper, 
  Container, 
  Card, 
  CardContent, 
  Button, 
  Chip, 
  Avatar,
  LinearProgress,
  IconButton
} from '@mui/material';
import { 
  Add as AddIcon, 
  MoreHoriz as MoreHorizIcon,
  Person as PersonIcon,
  CalendarToday as CalendarTodayIcon
} from '@mui/icons-material'; 

const taskColumns = [
  {
    title: 'Backlog',
    color: '#5E6AD2',
    tasks: [
      {
        id: 1,
        title: 'Redesign dashboard',
        priority: 'High',
        assignee: 'John Doe',
        progress: 30
      },
      {
        id: 2,
        title: 'Implement authentication',
        priority: 'Medium',
        assignee: 'Jane Smith',
        progress: 15
      }
    ]
  },
  {
    title: 'In Progress',
    color: '#FF9800',
    tasks: [
      {
        id: 3,
        title: 'API integration',
        priority: 'High',
        assignee: 'Mike Johnson',
        progress: 60
      }
    ]
  },
  {
    title: 'Review',
    color: '#2196F3',
    tasks: [
      {
        id: 4,
        title: 'Performance optimization',
        priority: 'Low',
        assignee: 'Sarah Williams',
        progress: 75
      }
    ]
  },
  {
    title: 'Done',
    color: '#4CAF50',
    tasks: [
      {
        id: 5,
        title: 'Initial project setup',
        priority: 'Low',
        assignee: 'John Doe',
        progress: 100
      }
    ]
  }
];

const ProjectOverview = () => {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Project Dashboard
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ 
            backgroundColor: '#5E6AD2', 
            '&:hover': { 
              backgroundColor: '#4A53A8' 
            } 
          }}
        >
          Create Task
        </Button>
      </Box>

      {/* Tabs */}
      <Box display="flex" mb={3}>
        <Button
          variant={activeTab === 'tasks' ? 'contained' : 'text'}
          onClick={() => setActiveTab('tasks')}
          sx={{ mr: 2 }}
        >
          Tasks
        </Button>
        <Button
          variant={activeTab === 'projects' ? 'contained' : 'text'}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </Button>
      </Box>

      {/* Task Board */}
      <Grid container spacing={3}>
        {taskColumns.map((column) => (
          <Grid item xs={12} md={3} key={column.title}>
            <Paper 
              elevation={0} 
              sx={{ 
                border: `1px solid ${column.color}`, 
                borderRadius: 2 
              }}
            >
              <Box 
                sx={{ 
                  backgroundColor: column.color, 
                  color: 'white', 
                  p: 2, 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {column.title}
                </Typography>
                <Typography variant="body2">
                  {column.tasks.length} Tasks
                </Typography>
              </Box>
              
              {column.tasks.map((task) => (
                <Card 
                  key={task.id} 
                  sx={{ 
                    m: 2, 
                    boxShadow: 'none', 
                    border: '1px solid #e0e0e0' 
                  }}
                >
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {task.title}
                      </Typography>
                      <IconButton size="small">
                        <MoreHorizIcon />
                      </IconButton>
                    </Box>
                    
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Chip 
                        label={task.priority} 
                        size="small" 
                        color={
                          task.priority === 'High' ? 'error' : 
                          task.priority === 'Medium' ? 'warning' : 'default'
                        }
                      />
                      <Box display="flex" alignItems="center">
                        <PersonIcon fontSize="small" sx={{ mr: 0.5 }} />
                        <Typography variant="caption">
                          {task.assignee}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Progress
                      </Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={task.progress} 
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          backgroundColor: '#e0e0e0'
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Quick Stats */}
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Total Tasks
            </Typography>
            <Typography variant="h4" color="primary">
              24
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Completed Tasks
            </Typography>
            <Typography variant="h4" color="success.main">
              12
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Pending Tasks
            </Typography>
            <Typography variant="h4" color="error.main">
              12
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default function DashboardPage() {
  return <ProjectOverview />;
}