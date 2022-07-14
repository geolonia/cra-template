import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';

import {
  QueryClient, QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<h1>Public page</h1>} />

        <Route 
          element={
            <Authenticator loginMechanisms={['username']} signUpAttributes={['email']}>
              <Outlet />
            </Authenticator>
          }
        >
          <Route path="/team/" element={<div><h1>Team settings</h1><Outlet /></div>}>
            <Route path="/team/general" element={<h2>General</h2>} />
            <Route path="/team/members" element={<h2>Members</h2>} />
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
