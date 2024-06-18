// import React from 'react'
// import CIcon from '@coreui/icons-react'
// import {
//   cilBell,
//   // cilDrop,
//   cilBriefcase,
//   cilNotes,
//   cilPencil,
//   cilPeople,
//   cilSpeedometer,
//   cilTruck,
//   cilImage,
//   cilGraph,
//   // cilScreenSmartphone,
//   cilHouse,
//   cilText,
//   cilSettings
// } from '@coreui/icons'
// import { CNavGroup, CNavItem } from '@coreui/react'

// const _nav = [
//   {
//     component: CNavItem,
//     name: 'Dashboard',
//     to: '/dashboard',
//     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     component: CNavItem,
//     name: 'Customers',
//     to: '/customers',
//     icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
//   },

//   //new
//   {
//     component: CNavItem,
//     name: 'Business', // Updated name to "Business"
//     to: '/business', // Updated URL to "/business"
//     icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />, // Changed icon to a business-related one
//   },

//   {
//     component: CNavGroup,
//     name: 'Orders',
//     icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'New',
//         to: '/orders/new',
//         icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Processing',
//         to: '/orders/processing',
//         icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Dispatched',
//         to: '/orders/dispatched',
//         icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Delivered',
//         to: '/orders/delivered',
//         icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Cancelled',
//         to: '/orders/cancelled',
//         icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Website Related',
//     icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Banner',
//         to: '/website-related/banner',
//         icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Register Image',
//         to: '/website-related/register-image',
//         icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Login Image',
//         to: '/website-related/login-image',
//         icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Shop Page Image',
//         to: '/website-related/shop-page-image',
//         icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Testimonials',
//         to: '/website-related/testimonials',
//         icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'SEO and Analytics',
//         to: '/website-related/seo-analytics',
//         icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Content',
//         to: '/website-related/content',
//         icon: <CIcon icon={cilText} customClassName="nav-icon" />,
//       },
//       {
//         component: CNavItem,
//         name: 'Home',
//         to: '/website-related/home',
//         icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Customer Service',
//     to: '/customer-service',
//     icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Contact Requests',
//         to: '/customer-service/contact-requests',
//       },
//       {
//         component: CNavItem,
//         name: 'Support',
//         to: '/customer-service/support',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Blogs',
//     to: '/blogs',
//     icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
//   },
// ]

// export default _nav









import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilBriefcase,
  cilNotes,
  cilPencil,
  cilPeople,
  cilSpeedometer,
  cilTruck,
  cilImage,
  cilGraph,
  cilHouse,
  cilText,
  cilSettings
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Customers',
    to: '/customers',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Business',
    to: '/business',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Orders',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New',
        to: '/orders/new',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Processing',
        to: '/orders/processing',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Dispatched',
        to: '/orders/dispatched',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Delivered',
        to: '/orders/delivered',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Cancelled',
        to: '/orders/cancelled',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Social Media',
        to: '/settings/social-media',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Application Name',
        to: '/settings/application-name',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Address',
        to: '/settings/address',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Logos',
        to: '/settings/logos',
        icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Copyright Message',
        to: '/settings/copyright-message',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Banner',
        to: '/settings/banner',
        icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Register Image',
        to: '/settings/register-image',
        icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Login Image',
        to: '/settings/login-image',
        icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Shop Page Image',
        to: '/settings/shop-page-image',
        icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
      },
      // {
      //   component: CNavItem,
      //   name: 'Testimonials',
      //   to: '/website-related/testimonials',
      //   icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'SEO and Analytics',
      //   to: '/website-related/seo-analytics',
      //   icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
      // },
      {
        component: CNavItem,
        name: 'Content',
        to: '/settings/content',
        icon: <CIcon icon={cilText} customClassName="nav-icon" />,
      },
      // {
      //   component: CNavItem,
      //   name: 'Home',
      //   to: '/website-related/home',
      //   icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
      // },
    ],
  },
  // New Configuration Section
  // {
  //   component: CNavGroup,
  //   name: 'Configuration',
  //   icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  //   items: [
      
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Customer Service',
    to: '/customer-service',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Contact Requests',
        to: '/customer-service/contact-requests',
      },
      {
        component: CNavItem,
        name: 'Support',
        to: '/customer-service/support',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Blogs',
    to: '/blogs',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
]

export default _nav
