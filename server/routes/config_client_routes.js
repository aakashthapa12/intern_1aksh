// import { Router } from "express";
// import { getTermsOfUse } from "../controllers/Config_controller.js";
// const router = Router();

// router.get("/termsofuse", getTermsOfUse);

// export default router;



const { Router } = require('express');
const { getTermsOfUse } = require('../controllers/Config_controller');

const router = Router();

router.get('/termsofuse', getTermsOfUse);

module.exports = router;
