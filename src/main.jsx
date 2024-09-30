import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { StrictMode } from 'react';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Dashboard from './dashboard/Dashboard';
import Team from './team/Team';
import Contacts from './contacts/Contacts';
import Invoices from './invoices/Invoices';
import Form from './form/Form';
import Calendar from './calendar/Calendar';
import Faq from './faq/Faq';
import Bar from './bar/Bar';
import Pie from './pie/Pie';
import Line from './line/Line';
import Geography from './geography/Geography';
import NotFound from './noutfount/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team'  element={<Team />} />
      <Route path='contacts'  element={<Contacts/>} />
      <Route path='invoices'  element={<Invoices/>} />
      <Route path='form'  element={<Form/>} />
      <Route path='Calendar'  element={<Calendar/>} />
      <Route path='faq'  element={<Faq/>} />
      <Route path='bar'  element={<Bar/>} />
      <Route path='pie'  element={<Pie/>} />
      <Route path='line'  element={<Line/>} />
      <Route path='geography'  element={<Geography/>} />
      <Route path='*'  element={<NotFound/>} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

