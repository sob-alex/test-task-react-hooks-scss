import React, {useContext} from 'react';
import { DataContext } from '../../context/dataContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

const {state} = useContext(DataContext);

console.log('sidebar');
  return (
    <div className="sidebar">
      <a href="#avatar" className="sidebar__element sidebar__avatar">
        <img src={state.avatarUrl} alt="" />
        
      </a>
      <NavLink className="sidebar__element sidebar__link"  to='/terminals'>
        Терминалы
      </NavLink>
      <NavLink className="sidebar__element sidebar__link" to="/buyers">
        Покупатели
      </NavLink>
      <div className="sidebar__element sidebar__footer" href="#footer">
        <div className="sidebar__footer-inner">Copyright © 2020</div>
      </div>
    </div>
  );
};

export default Sidebar;
