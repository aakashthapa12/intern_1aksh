// // import { Router } from "express";
// const { Router } = require('express');

// import {
//   addAddress,
//   // addGST,
//   // addLogo,
//   addSocialMedia,
//   deleteConfig,
//   getConfig,
//   // addScrollText,
//   addTermsOfUse,
//   addApplicationName,
//   getTermsOfUse,
//   addCopyRightMessage,
// } from "../controllers/Config_controller.js";
// // import { upload } from "../../../Utils/cloudinary.js";

// // import {
// //   authorizeRoles,
// //   isAuthenticatedUser,
// // } from "../../../middlewares/auth.js";

// const router = Router();

// // let cpUpload = upload.fields([
// //   { name: "Headerlogo", maxCount: 1 },
// //   { name: "Footerlogo", maxCount: 1 },
// //   { name: "Adminlogo", maxCount: 1 },
// // ]);

// // router.route("/gst").post(isAuthenticatedUser,authorizeRoles("admin", "Employee"), addGST);
// router
//   .route("/social")
//   .post(
//     // isAuthenticatedUser,
//     // authorizeRoles("admin", "Employee"),
//     addSocialMedia
//   );
// router
//   .route("/application/name")
//   .post(
//     // isAuthenticatedUser,
//     // authorizeRoles("admin", "Employee"),
//     addApplicationName
//   );
// router
//   .route("/copyright/message")
//   .post(
//     // isAuthenticatedUser,
//     // authorizeRoles("admin", "Employee"),
//     addCopyRightMessage
//   );

// router
//   .route("/address")
//   .post(
//     // isAuthenticatedUser, authorizeRoles("admin", "Employee"), 
//     addAddress);
// // router.route("/scrollText").post(isAuthenticatedUser,authorizeRoles("admin", "Employee"), addScrollText);

// // router
// //   .route("/logo")
// //   .post(isAuthenticatedUser, authorizeRoles("admin", "Employee"), addLogo);

// router
//   .route("/")
//   .get(getConfig)
//   .delete(
//     // isAuthenticatedUser,
//     // authorizeRoles("admin", "Employee"),
//     deleteConfig
//   );

// router
//   .route("/termsofuse")
//   .get(
//     // isAuthenticatedUser, authorizeRoles("admin", "Employee"), 
//   getTermsOfUse)
//   .patch(
//     // isAuthenticatedUser,
//     // authorizeRoles("admin", "Employee"),
//     addTermsOfUse
//   );

// export default router;








const { Router } = require('express');
const {
  addAddress,
  // addGST,
  addLogo,
  addSocialMedia,
  // deleteConfig,
  getConfig,
  // addScrollText,
  // addTermsOfUse,
  addApplicationName,
  // getTermsOfUse,
  addCopyRightMessage,
} = require('../controllers/Config_controller');
// const { upload } = require('../../../Utils/cloudinary');
// const { authorizeRoles, isAuthenticatedUser } = require('../../../middlewares/auth');

const router = Router();

// let cpUpload = upload.fields([
//   { name: 'Headerlogo', maxCount: 1 },
//   { name: 'Footerlogo', maxCount: 1 },
//   { name: 'Adminlogo', maxCount: 1 },
// ]);

// router.route('/gst').post(isAuthenticatedUser, authorizeRoles('admin', 'Employee'), addGST);
router.route('/social')
  .post(
    // isAuthenticatedUser,
    // authorizeRoles('admin', 'Employee'),
    addSocialMedia
  );

router.route('/application/name')
  .post(
//     // isAuthenticatedUser,
//     // authorizeRoles('admin', 'Employee'),
    addApplicationName
  );

router.route('/copyright/message')
  .post(
//     // isAuthenticatedUser,
//     // authorizeRoles('admin', 'Employee'),
    addCopyRightMessage
  );

router.route('/address')
  .post(
//     // isAuthenticatedUser, authorizeRoles('admin', 'Employee'),
    addAddress
  );
// router.route('/scrollText').post(isAuthenticatedUser, authorizeRoles('admin', 'Employee'), addScrollText);

router.route('/logo')
//   .post(isAuthenticatedUser, authorizeRoles('admin', 'Employee'), addLogo);
    .post(addLogo);

router.route('/')
  .get(getConfig)
  // .delete(
    // isAuthenticatedUser,
    // authorizeRoles('admin', 'Employee'),
    // deleteConfig
  // );

// router.route('/termsofuse')
//   .get(
//     // isAuthenticatedUser, authorizeRoles('admin', 'Employee'),
//     getTermsOfUse
//   )
//   .patch(
//     // isAuthenticatedUser,
//     // authorizeRoles('admin', 'Employee'),
//     addTermsOfUse
//   );

module.exports = router;
