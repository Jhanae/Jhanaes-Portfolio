import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <IoIcons.IoIosPaper />

  },
  {
    title: 'Links',
    path: '/links',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Difficulty',
    path: '/difficulty',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'A Walk in the Park',
        path: '/recipes/easy',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Challenge Yourself',
        path: '/recipes/challenging',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Oh, So you think you're a chef?",
        path: '/recipes/hard',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];