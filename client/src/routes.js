

import React from 'react'
import Profile from './views/profile/Profile'
import ChangePassword from './views/profile/ChangePassword'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Customers = React.lazy(() => import('./views/customers/Customers'))
const Business = React.lazy(() => import('./views/businesses/Businesses'))

const New = React.lazy(() => import('./views/orders/New'))
const Processing = React.lazy(() => import('./views/orders/Processing'))
const Dispatched = React.lazy(() => import('./views/orders/Dispatched'))
const Delivered = React.lazy(() => import('./views/orders/Delivered'))
const Cancelled = React.lazy(() => import('./views/orders/Cancelled'))


const ContactRequests = React.lazy(() => import('./views/customerService/ContactRequests'))
const Support = React.lazy(() => import('./views/customerService/Support'))
const Banner = React.lazy(() => import('./views/settings/Banner'))
const RegisterImage = React.lazy(() => import('./views/settings/RegisterImage'))
const LoginImage = React.lazy(() => import('./views/settings/LoginImage'))
const ShopPageImage = React.lazy(() => import('./views/settings/ShopPageImage'))
const Testimonials = React.lazy(() => import('./views/settings/Testimonials'))
const Content = React.lazy(() => import('./views/settings/Content'))


const SocialMedia = React.lazy(() => import('./views/settings/SocialMedia.js'))
const ApplicationName = React.lazy(() => import('./views/settings/ApplicationName.js'))
const Address = React.lazy(() => import('./views/settings/Address.js'))
const Logos = React.lazy(() => import('./views/settings/Logos.js'))
const CopyrightMessage = React.lazy(() => import('./views/settings/CopyrightMessage.js'))


const Blogs = React.lazy(() => import('./views/blogs/Blogs'))
const Roles = React.lazy(() => import('./views/roles/Roles'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/customers', name: 'Customers', element: Customers },
  { path: '/business', name: 'Business', element: Business },

  { path: '/orders/new', name: 'New', element: New },
  { path: '/orders/processing', name: 'Processing', element: Processing },
  { path: '/orders/dispatched', name: 'Dispatched', element: Dispatched },
  { path: '/orders/delivered', name: 'Delivered', element: Delivered },
  { path: '/orders/cancelled', name: 'Cancelled', element: Cancelled },


  // views/settings
  { path: '/settings/address', name: 'Address', element: Address },
  { path: '/settings/logos', name: 'Logos', element: Logos },
  { path: '/settings/copyright-message', name: 'Copyright Message', element: CopyrightMessage },
  { path: '/settings/social-media', name: 'Social Media', element: SocialMedia },
  { path: '/settings/application-name', name: 'Application Name', element: ApplicationName },
  { path: '/settings/banner', name: 'Banner', element: Banner },
  { path: '/settings/register-image', name: 'RegisterImage', element: RegisterImage },
  { path: '/settings/login-image', name: 'LoginImage', element: LoginImage },
  { path: '/settings/shop-page-image', name: 'ShopPageImage', element: ShopPageImage },
  { path: '/settings/testimonials', name: 'Testimonials', element: Testimonials },
  { path: '/settings/content', name: 'Content', element: Content },



  

  // { path: '/orders', name: 'Orders', element: Orders },
  { path: '/customer-service/contact-requests', name: 'Contact Requests', element: ContactRequests },
  { path: '/customer-service/support', name: 'Support', element: Support },
  // { path: '/website-settings', name: 'Website Settings', element: WebsiteSettings },
  { path: '/blogs', name: 'Blogs', element: Blogs },
  { path: '/roles', name: 'Roles', element: Roles },
  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/profile/change-password', name: 'Change Password', element: ChangePassword },
]

export default routes