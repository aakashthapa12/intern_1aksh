// import { Config } from "../models/Config_model.js";
// // import cloudinary from "../../../Utils/cloudinary.js";

// //Add app Name
// export const addApplicationName = async (req, res) => {
//   try {
//     if (req.body === "") {
//       return res.status(201).json({
//         status: "false",
//         message: "please enter application  Name",
//       });
//     }
//     const { appName } = req.body;

//     const applicationNam = await Config.find();
//     if (applicationNam.length === 0) {
//       const applicationName = await Config.create({
//         appName,
//       });

//       if (applicationName) {
//         return res.status(201).json({
//           status: "success",
//           message: "Added application Name Successfully",
//         });
//       }
//     } else {
//       const updateApp = await Config.updateOne({
//         appName: appName,
//       });

//       if (updateApp) {
//         return res.status(200).json({
//           status: "success",
//           message: "Updated Application Name Successfully",
//         });
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// //add copyright msg
// export const addCopyRightMessage = async (req, res) => {
//   try {
//     if (req.body === "") {
//       return res.status(201).json({
//         status: "false",
//         message: "please enter CopyRight Message",
//       });
//     }
//     const { copyright } = req.body;

//     const application = await Config.find();
//     if (application.length === 0) {
//       const applicationName = await Config.create({
//         copyrightMessage: copyright,
//       });

//       if (applicationName) {
//         return res.status(201).json({
//           status: "success",
//           message: "Added copyright message Successfully",
//         });
//       }
//     } else {
//       const updateApp = await Config.updateOne({
//         copyrightMessage: copyright,
//       });

//       if (updateApp) {
//         return res.status(200).json({
//           status: "success",
//           message: "Updated copyright message Successfully",
//         });
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// //add business name
// //add purpose
// //add language
// // Add Social Media
// const addSocialMedia = async (req, res) => {
//   const { facebook, twitter, instagram, linkedin, mail, youtube, pinterest } =
//     req.body;

//   try {
//     if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//       return res.status(400).json({
//         status: "failed",
//         message: "Please Provide Social Links",
//       });
//     }

//     const socialMediaLink = await Config.find();
//     if (socialMediaLink.length === 0) {
//       const createSocialLinks = await Config.create({
//         socialMedia: {
//           facebook,
//           twitter,
//           instagram,
//           linkedin,
//           youtube,
//           mail,
//           pinterest,
//         },
//       });

//       if (createSocialLinks) {
//         return res.status(201).json({
//           status: "success",
//           message: "Added Social Media Links Successfully",
//         });
//       }
//     } else {
//       const updateSocial = await Config.updateOne(
//         {},
//         {
//           $set: {
//             socialMedia: {
//               facebook,
//               twitter,
//               instagram,
//               linkedin,
//               mail,
//               youtube,
//               pinterest,
//             },
//           },
//         }
//       );
//       if (updateSocial) {
//         return res.status(200).json({
//           status: "success",
//           message: "Updated Social Media Links Successfully",
//         });
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// // add Address

// const addAddress = async (req, res) => {
//   const {
//     company,
//     address,
//     city,
//     state,
//     country,
//     pincode,
//     website,
//     contact,
//     email,
//     longitude,
//     latitude,
//   } = req.body;

//   if (
//     !company ||
//     !address ||
//     !city ||
//     !state ||
//     !country ||
//     !pincode ||
//     !contact ||
//     !email
//   ) {
//     return res.status(400).json({
//       status: "failed",
//       message: "Please Provide All Fields",
//     });
//   }
//   try {
//     const getAddress = await Config.find();
//     if (getAddress.length === 0) {
//       const createAddress = await Config.create({
//         address: {
//           company,
//           address,
//           city,
//           state,
//           country,
//           pincode,
//           website,
//           contact,
//           email,
//           longitude,
//           latitude,
//         },
//       });

//       if (createAddress) {
//         return res.status(201).json({
//           status: "success",
//           message: "created address successfully",
//         });
//       }
//     } else {
//       const updateAddress = await Config.updateOne(
//         {},
//         {
//           $set: {
//             address: {
//               company,
//               address,
//               city,
//               state,
//               country,
//               pincode,
//               website,
//               contact,
//               email,
//               longitude,
//               latitude,
//             },
//           },
//         }
//       );

//       if (updateAddress) {
//         return res.status(200).json({
//           status: "success",
//           message: "Updated Address Successfully",
//         });
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// // get configuration
// const getConfig = async (req, res) => {
//   try {
//     const configration = await Config.find({});
//     if (configration) {
//       res.status(200).json({
//         status: "success",
//         result: configration,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// // // add logo
// // const addLogo = async (req, res) => {
// //   try {
// //     const configuration = await Config.find();

// //     // console.log(req.files);
// //     // console.log(configuration[0].logo);
// //     // console.log(configuration[0]);
// //     // console.log(configuration[0].logo[0].Headerlogo);
// //     // console.log(configuration[0].logo[0].Footerlogo);
// //     // console.log(configuration[0].logo[0].Adminlogo);

// //     let result1;
// //     let result2;
// //     let result3;
// //     // console.log(req.files.Headerlogo)
// //     if (req.files.Headerlogo) {
// //       const result = await cloudinary.v2.uploader.upload(
// //         req.files.Headerlogo.tempFilePath,
// //         { folder: "bolo/Logo" }
// //       );
// //       result1 = result.secure_url;
// //     }
// //     if (req.files.Footerlogo) {
// //       const result = await cloudinary.v2.uploader.upload(
// //         req.files.Footerlogo.tempFilePath,
// //         { folder: "bolo/Logo" }
// //       );
// //       result2 = result.secure_url;
// //     }
// //     if (req.files.Adminlogo) {
// //       // console.log(req.files.Adminlogo.path)
// //       const result = await cloudinary.v2.uploader.upload(
// //         req.files.Adminlogo.tempFilePath,
// //         { folder: "bolo/Logo" }
// //       );
// //       result3 = result.secure_url;
// //     }

// //     // console.log(result1);
// //     // console.log(result2);
// //     // console.log(result3);

// //     // if (configuration.length === 0) {
// //     //   const createLogo = await Config.create({
// //     //     logo: {
// //     //       Headerlogo: result1,
// //     //       Footerlogo: result2,
// //     //       Adminlogo: result3,
// //     //     },
// //     //   });

// //     //   if (createLogo) {
// //     //     return res.status(200).json({
// //     //       status: "success",
// //     //       message: "Created Logos Successfully",
// //     //     });
// //     //   }
// //     // } else {
// //     //   const updateLogo = await Config.updateOne(
// //     //     {},
// //     //     {
// //     //       $set: {
// //     //         logo: {
// //     //           Headerlogo: result1,
// //     //           Footerlogo: result2,
// //     //           Adminlogo: result3,
// //     //         },
// //     //       },
// //     //     }
// //     //   );
// //     //   if (updateLogo) {
// //     //     return res.status(200).json({
// //     //       status: "success",
// //     //       message: "Updated Logos Successfully",
// //     //     });
// //     //   }
// //     // }
// //     if (configuration.length === 0) {
// //       // If no configuration exists, create a new one with uploaded logos
// //       const createLogo = await Config.create({
// //         logo: {
// //           Headerlogo: result1 || configuration[0].logo[0].Headerlogo,
// //           Footerlogo: result2 || configuration[0].logo[0].Footerlogo,
// //           Adminlogo: result3 || configuration[0].logo[0].Adminlogo,
// //         },
// //       });

// //       if (createLogo) {
// //         return res.status(200).json({
// //           status: "success",
// //           message: "Created Logos Successfully",
// //         });
// //       }
// //     } else {
// //       // If configuration exists, update only the logos that are present in the current request
// //       const updatedLogos = {
// //         Headerlogo:
// //           result1 !== undefined ? result1 : configuration[0].logo[0].Headerlogo,
// //         Footerlogo:
// //           result2 !== undefined ? result2 : configuration[0].logo[0].Footerlogo,
// //         Adminlogo:
// //           result3 !== undefined ? result3 : configuration[0].logo[0].Adminlogo,
// //       };

// //       const updateLogo = await Config.updateOne(
// //         {},
// //         {
// //           $set: {
// //             logo: updatedLogos,
// //           },
// //         }
// //       );

// //       if (updateLogo) {
// //         return res.status(200).json({
// //           status: "success",
// //           message: "Updated Logos Successfully",
// //         });
// //       }
// //     }
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // //add scrollText
// // const addScrollText = async (req, res) => {
// //   const { scrollText } = req.body;

// //   try {
// //     if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
// //       return res.status(400).json({
// //         status: "failed",
// //         message: "Please Provide Scroll Text",
// //       });
// //     }

// //     const config = await Config.find();
// //     if (config.length === 0) {
// //       const createScrollText = await Config.create(req.body);

// //       if (createScrollText) {
// //         return res.status(201).json({
// //           status: "success",
// //           message: "Added Scroll Text Successfully",
// //         });
// //       }
// //     } else {
// //       const updateScroll = await Config.updateOne(
// //         {},
// //         {
// //           $set: {
// //             scrollText: scrollText,
// //           },
// //         }
// //       );
// //       if (updateScroll) {
// //         return res.status(200).json({
// //           status: "success",
// //           message: "Updated Scroll Text Successfully",
// //         });
// //       }
// //     }
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// //terms of use
// const addTermsOfUse = async (req, res) => {
//   try {
//     const config = await Config.find();
//     if (config.length === 0) {
//       const createScrollText = await Config.create(req.body);
//       if (createScrollText) {
//         return res.status(201).json({
//           status: "success",
//           message: "Added Terms of Use Successfully",
//         });
//       }
//     } else {
//       const updateScroll = await Config.updateOne(
//         {},
//         {
//           $set: {
//             terms_of_use: req.body?.terms_of_use,
//           },
//         }
//       );
//       if (updateScroll) {
//         return res.status(200).json({
//           status: "success",
//           message: "Updated Terms of Use Successfully",
//         });
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// };

// const getTermsOfUse = async (req, res) => {
//   try {
//     let configration = await Config.findOne({});
//     if (!configration) configration = await Config.create({});
//     res
//       .status(200)
//       .json({ status: "success", data: configration?.terms_of_use || "" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// };

// const deleteConfig = async (req, res) => {
//   const deleteConfig = await Config.deleteMany({});

//   console.log(deleteConfig);
// };

// export {
//   // addGST,
//   addSocialMedia,
//   addAddress,
//   getConfig,
//   // addLogo,
//   deleteConfig,
//   // addScrollText,
//   addTermsOfUse,
//   getTermsOfUse,
// };










const Config = require("../models/Config_model");
// import cloudinary from "../../../utils/cloudinary.js";
const cloudinary = require("../utils/cloudinary");

// Add Application Name
const addApplicationName = async (req, res) => {
  try {
    const { appName } = req.body;

    if (!appName) {
      return res.status(400).json({
        status: "false",
        message: "Please enter application name",
      });
    }

    const configuration = await Config.find();
    if (configuration.length === 0) {
      const createdApp = await Config.create({ appName });

      if (createdApp) {
        return res.status(201).json({
          status: "success",
          message: "Added application name successfully",
        });
      }
    } else {
      const updatedApp = await Config.updateOne({}, { appName });

      if (updatedApp) {
        return res.status(200).json({
          status: "success",
          message: "Updated application name successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// Add Copyright Message
const addCopyRightMessage = async (req, res) => {
  try {
    const { copyright } = req.body;

    if (!copyright) {
      return res.status(400).json({
        status: "false",
        message: "Please enter copyright message",
      });
    }

    const configuration = await Config.find();
    if (configuration.length === 0) {
      const createdCopyRight = await Config.create({ copyrightMessage: copyright });

      if (createdCopyRight) {
        return res.status(201).json({
          status: "success",
          message: "Added copyright message successfully",
        });
      }
    } else {
      const updatedCopyRight = await Config.updateOne({}, { copyrightMessage: copyright });

      if (updatedCopyRight) {
        return res.status(200).json({
          status: "success",
          message: "Updated copyright message successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// Add Social Media Links
const addSocialMedia = async (req, res) => {
  const { facebook, twitter, instagram, linkedin, youtube,} = req.body;

  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: "failed",
        message: "Please provide social links",
      });
    }

    const configuration = await Config.find();
    if (configuration.length === 0) {
      const createdSocialMedia = await Config.create({
        socialMedia: { facebook, twitter, instagram, linkedin, youtube },
      });

      if (createdSocialMedia) {
        return res.status(201).json({
          status: "success",
          message: "Added social media links successfully",
        });
      }
    } else {
      const updatedSocialMedia = await Config.updateOne({}, {
        $set: {
          socialMedia: { facebook, twitter, instagram, linkedin, youtube},
        },
      });

      if (updatedSocialMedia) {
        return res.status(200).json({
          status: "success",
          message: "Updated social media links successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};



// Add Address
const addAddress = async (req, res) => {
  const {
    company, address, city, state, country, pincode, website, contact, email, longitude, latitude,
  } = req.body;

  if (!company || !address || !city || !state || !country || !pincode || !contact || !email) {
    return res.status(400).json({
      status: "failed",
      message: "Please provide all fields",
    });
  }

  try {
    const configuration = await Config.find();
    if (configuration.length === 0) {
      const createdAddress = await Config.create({
        address: {
          company, address, city, state, country, pincode, website, contact, email, longitude, latitude,
        },
      });

      if (createdAddress) {
        return res.status(201).json({
          status: "success",
          message: "Created address successfully",
        });
      }
    } else {
      const updatedAddress = await Config.updateOne({}, {
        $set: {
          address: {
            company, address, city, state, country, pincode, website, contact, email, longitude, latitude,
          },
        },
      });

      if (updatedAddress) {
        return res.status(200).json({
          status: "success",
          message: "Updated address successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// Get Configuration
const getConfig = async (req, res) => {
  try {
    const configuration = await Config.findOne({});
    if (!configuration) {
      return res.status(404).json({ status: "failed", message: "Configuration not found" });
    }

    res.status(200).json({
      status: "success",
      result: configuration,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};


// add logo
const addLogo = async (req, res) => {
  try {
    const configuration = await Config.find();

    let result1, result2, result3;

    // Check and upload each logo if present
    if (req.files && req.files.Headerlogo) {
      const result = await cloudinary.uploader.upload(req.files.Headerlogo.tempFilePath, { folder: "bolo/Logo" });
      result1 = result.secure_url;
    }
    if (req.files && req.files.Footerlogo) {
      const result = await cloudinary.uploader.upload(req.files.Footerlogo.tempFilePath, { folder: "bolo/Logo" });
      result2 = result.secure_url;
    }
    if (req.files && req.files.Adminlogo) {
      const result = await cloudinary.uploader.upload(req.files.Adminlogo.tempFilePath, { folder: "bolo/Logo" });
      result3 = result.secure_url;
    }

    if (configuration.length === 0) {
      // Create a new configuration with the uploaded logos
      const createLogo = await Config.create({
        logo: {
          Headerlogo: result1 || "",
          Footerlogo: result2 || "",
          Adminlogo: result3 || "",
        },
      });

      if (createLogo) {
        return res.status(200).json({
          status: "success",
          message: "Created Logos Successfully",
        });
      }
    } else {
      // Update existing configuration with new logos
      const existingLogos = configuration[0].logo[0] || { Headerlogo: "", Footerlogo: "", Adminlogo: "" };

      const updatedLogos = {
        Headerlogo: result1 !== undefined ? result1 : existingLogos.Headerlogo,
        Footerlogo: result2 !== undefined ? result2 : existingLogos.Footerlogo,
        Adminlogo: result3 !== undefined ? result3 : existingLogos.Adminlogo,
      };

      const updateLogo = await Config.updateOne(
        {},
        {
          $set: {
            logo: updatedLogos,
          },
        }
      );

      if (updateLogo) {
        return res.status(200).json({
          status: "success",
          message: "Updated Logos Successfully",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};

// Delete Configuration
const deleteConfig = async (req, res) => {
  try {
    const deletedConfig = await Config.deleteMany({});
    console.log(deletedConfig);

    res.status(200).json({
      status: "success",
      message: "Deleted configuration successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = {
  addApplicationName,
  addCopyRightMessage,
  addSocialMedia,
  addAddress,
  getConfig,
  addLogo,
  // addTermsOfUse,
  // getTermsOfUse,
  deleteConfig,
};
