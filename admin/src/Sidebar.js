import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { ReactComponent as UsersIcon } from './assets/users.svg';
import { ReactComponent as ShuttleIcon } from './assets/shuttle.svg';
import { ReactComponent as ReviewIcon } from './assets/review.svg';
import { ReactComponent as SignOutIcon } from './assets/signout.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/logo192.png" alt="Admin" className="sidebar-avatar" />
        <div className="sidebar-title">Admin</div>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/user" className="sidebar-link" activeclassname="active">
          <span className="sidebar-icon"><UsersIcon /></span>
          User Management
        </NavLink>
        <NavLink to="/schedule" className="sidebar-link" activeclassname="active">
          <span className="sidebar-icon"><ShuttleIcon /></span>
          Shuttle Schedules
        </NavLink>
        <NavLink to="/review" className="sidebar-link" activeclassname="active">
          <span className="sidebar-icon"><ReviewIcon /></span>
          Feedbacks
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <span className="sidebar-icon"><SignOutIcon /></span>
        Sign Out
      </div>
    </aside>
  );
}

export default Sidebar;