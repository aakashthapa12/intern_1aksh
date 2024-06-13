// import React from 'react'

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Businesses = React.lazy(() => import('./views/businesses/Businesses'))
// const Orders = React.lazy(() => import('./views/orders/Orders'))
// const ContactRequests = React.lazy(() => import('./views/customerService/ContactRequests'))
// const Support = React.lazy(() => import('./views/customerService/Support'))
// const WebsiteSettings = React.lazy(() => import('./views/websiteSettings/WebsiteSettings'))
// const Blogs = React.lazy(() => import('./views/blogs/Blogs'))
// const Roles = React.lazy(() => import('./views/roles/Roles'))

// // const Apps = React.lazy(() => import('./views/apps/Apps'))
// // const Resume = React.lazy(() => import('./views/apps/resume/Resume'))
// // const Candidates = React.lazy(() => import('./views/apps/resume/view_candidates/Candidates'))
// // const PostJob = React.lazy(() => import('./views/apps/resume/add_job/PostJob'))
// // const ViewJob = React.lazy(() => import('./views/apps/resume/add_job/ViewJob'))
// // const UpdateJob = React.lazy(() => import('./views/apps/resume/add_job/UpdateJob'))
// // const CustomerService = React.lazy(() => import('./views/apps/customer_service/CustomerService'))
// // const Appointment = React.lazy(() => import('./views/apps/appointment_booking/Appointment'))

// // const Usage = React.lazy(() => import('./views/usage/Usage'))
// // const PaymentHistory = React.lazy(() => import('./views/payment_history/PaymentHistory'))
// // const Roles = React.lazy(() => import('./views/roles/Roles'))
// // const Wallet = React.lazy(() => import('./views/wallet/Wallet'))
// // const Activity = React.lazy(() => import('./views/activity/Activity'))
// // const Profile = React.lazy(() => import('./views/profile/Profile'))
// // const ChangePassword = React.lazy(() => import('./views/profile/ChangePassword'))

// // const ForgotPassword = React.lazy(() => import('./views/pages/forgot/ForgotPassword'))

// const routes = [
//   // { path: '/', exact: true, name: 'Home' },
//   // { path: '/dashboard', name: 'Dashboard', element: Dashboard },

//   // { path: '/apps', name: 'Apps', element: Apps },
//   // { path: '/apps/resume-screening', name: 'Resume Screening', element: Resume },
//   // { path: '/apps/resume-screening/add-job', name: 'Post Job', element: PostJob },
//   // { path: '/apps/resume-screening/view-job/:id', name: 'View Job', element: ViewJob },
//   // { path: '/apps/resume-screening/edit-job/:id', name: 'Edit Job', element: UpdateJob },
//   // { path: '/apps/resume-screening/candidates/:id', name: 'Candidates List', element: Candidates },

//   // { path: '/apps/customer-service', name: 'Customer Service', element: CustomerService },
//   // { path: '/apps/appointment-booking', name: 'Appointment Booking', element: Appointment },

//   // { path: '/usage', name: 'Usage', element: Usage },
//   // { path: '/payment-history', name: 'Payment History', element: PaymentHistory },
//   // { path: '/roles', name: 'Roles', element: Roles },
//   // { path: '/wallet', name: 'Wallet', element: Wallet },
//   // { path: '/activity', name: 'Activity', element: Activity },
//   // { path: '/Profile', name: 'Profile', element: Profile },
//   // { path: '/profile/change-password', name: 'Change Password', element: ChangePassword },

//   // { path: '/forgot-password', name: 'Forgot Password', element: ForgotPassword },

//   { path: '/', exact: true, name: 'Home' },
//   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
//   { path: '/businesses', name: 'Businesses', element: Businesses },
//   { path: '/orders', name: 'Orders', element: Orders },
//   { path: '/customer-service/contact-requests', name: 'Contact Requests', element: ContactRequests },
//   { path: '/customer-service/support', name: 'Support', element: Support },
//   { path: '/website-settings', name: 'Website Settings', element: WebsiteSettings },
//   { path: '/blogs', name: 'Blogs', element: Blogs },
//   { path: '/roles', name: 'Roles', element: Roles },
// ]

// export default routes











// import React from 'react'
// import Profile from './views/profile/Profile'
// import ChangePassword from './views/profile/ChangePassword'

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// const Customers = React.lazy(() => import('./views/customers/Customers'))

// const New = React.lazy(() => import('./views/orders/New'))
// const Processing = React.lazy(() => import('./views/orders/Processing'))
// const Dispatched = React.lazy(() => import('./views/orders/Dispatched'))
// const Delivered = React.lazy(() => import('./views/orders/Delivered'))
// const Cancelled = React.lazy(() => import('./views/orders/Cancelled'))





// const ContactRequests = React.lazy(() => import('./views/customerService/ContactRequests'))
// const Support = React.lazy(() => import('./views/customerService/Support'))
// const Banner = React.lazy(() => import('./views/websiteRelated/Banner'))
// const RegisterImage = React.lazy(() => import('./views/websiteRelated/RegisterImage'))
// const LoginImage = React.lazy(() => import('./views/websiteRelated/LoginImage'))
// const ShopPageImage = React.lazy(() => import('./views/websiteRelated/ShopPageImage'))
// const Testimonials = React.lazy(() => import('./views/websiteRelated/Testimonials'))
// const Blogs = React.lazy(() => import('./views/blogs/Blogs'))
// const Roles = React.lazy(() => import('./views/roles/Roles'))

// const routes = [
//   { path: '/', exact: true, name: 'Home', element: Dashboard },
//   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
//   { path: '/customers', name: 'Customers', element: Customers },

//   { path: '/orders/new', name: 'New', element: New },
//   { path: '/orders/processing', name: 'Processing', element: Processing },
//   { path: '/orders/dispatched', name: 'Dispatched', element: Dispatched },
//   { path: '/orders/delivered', name: 'Delivered', element: Delivered },
//   { path: '/orders/cancelled', name: 'Cancelled', element: Cancelled },


//   { path: '/website-related/banner', name: 'Banner', element: Banner },
//   { path: '/website-related/register-image', name: 'RegisterImage', element: RegisterImage },
//   { path: '/website-related/login-image', name: 'LoginImage', element: LoginImage },
//   { path: '/website-related/shop-page-image', name: 'ShopPageImage', element: ShopPageImage },
//   { path: '/website-related/testimonials', name: 'Testimonials', element: Testimonials },
//   // { path: '/orders', name: 'Orders', element: Orders },
//   { path: '/customer-service/contact-requests', name: 'Contact Requests', element: ContactRequests },
//   { path: '/customer-service/support', name: 'Support', element: Support },
//   // { path: '/website-settings', name: 'Website Settings', element: WebsiteSettings },
//   { path: '/blogs', name: 'Blogs', element: Blogs },
//   { path: '/roles', name: 'Roles', element: Roles },
//   { path: '/profile', name: 'Profile', element: Profile },
//   { path: '/profile/change-password', name: 'Change Password', element: ChangePassword },
// ]

// export default routes











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
const Banner = React.lazy(() => import('./views/websiteRelated/Banner'))
const RegisterImage = React.lazy(() => import('./views/websiteRelated/RegisterImage'))
const LoginImage = React.lazy(() => import('./views/websiteRelated/LoginImage'))
const ShopPageImage = React.lazy(() => import('./views/websiteRelated/ShopPageImage'))
const Testimonials = React.lazy(() => import('./views/websiteRelated/Testimonials'))


const SocialMedia = React.lazy(() => import('./views/configuration/SocialMedia.js'))
const ApplicationName = React.lazy(() => import('./views/configuration/ApplicationName.js'))
const Address = React.lazy(() => import('./views/configuration/Address.js'))
const Logos = React.lazy(() => import('./views/configuration/Logos.js'))
const CopyrightMessage = React.lazy(() => import('./views/configuration/CopyrightMessage.js'))


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


  { path: '/website-related/banner', name: 'Banner', element: Banner },
  { path: '/website-related/register-image', name: 'RegisterImage', element: RegisterImage },
  { path: '/website-related/login-image', name: 'LoginImage', element: LoginImage },
  { path: '/website-related/shop-page-image', name: 'ShopPageImage', element: ShopPageImage },
  { path: '/website-related/testimonials', name: 'Testimonials', element: Testimonials },
  { path: '/configuration/address', name: 'Address', element: Address },
  { path: '/configuration/logos', name: 'Logos', element: Logos },
  { path: '/configuration/copyright-message', name: 'Copyright Message', element: CopyrightMessage },


  { path: '/configuration/social-media', name: 'Social Media', element: SocialMedia },
  { path: '/configuration/application-name', name: 'Application Name', element: ApplicationName },

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