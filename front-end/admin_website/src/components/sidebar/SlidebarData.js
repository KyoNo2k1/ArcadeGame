import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {CgGames,CgLogOut} from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Games',
    path: '/games',
    icon: <CgGames />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <FaIcons.FaRegUserCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Developers',
    path: '/developers',
    icon: <FaIcons.FaRegUserCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Setting',
  //   path: '/setting',
  //   icon: <FiSettings />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Log out',
    path: '/',
    icon: <CgLogOut />,
    cName: 'nav-text'
  }
];
