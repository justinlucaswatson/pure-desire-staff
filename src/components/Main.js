import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Team from "./Team";
import Projects from "./Projects";
import Calendar from "./Calendar";
import Reports from "./Reports";
import Links from "./Links";

function Main() {
  return (
    <main>
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <Switch>
          <Route path='/Team'>
            <Team />
          </Route>
          <Route path='/Projects'>
            <Projects />
          </Route>
          <Route path='/Calendar'>
            <Calendar />
          </Route>
          <Route path='/Reports'>
            <Reports />
          </Route>
          <Route path='/Links'>
            <Links />
          </Route>
          <Route exact path='/'>
            <Dashboard />
          </Route>
        </Switch>
        <div className='px-4 py-6 sm:px-0'>
          <div className='border-4 border-dashed border-gray-200 rounded-lg h-96'>
            <h2>Main</h2>
          </div>
        </div>
        {/* /End replace */}
      </div>
    </main>
  );
}

export default Main;
