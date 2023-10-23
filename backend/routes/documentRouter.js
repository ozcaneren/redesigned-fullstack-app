const express = require("express");
const DocumentCtrl = require("../controllers/documentController");

const router = express.Router();

router.get("/document/cards", DocumentCtrl.getDocumentCards);
router.get("/document/card/:id", DocumentCtrl.getDocumentCardById);
router.post("/document/cards", DocumentCtrl.createDocumentCard);
router.put("/document/card/:id", DocumentCtrl.updateDocumentCard);
router.delete("/document/card/:id", DocumentCtrl.deleteDocumentCard);

router.get("/document/titles", DocumentCtrl.getDocumentTitles);
router.get("/document/title/:id", DocumentCtrl.getDocumentTitleById);
router.post("/document/titles", DocumentCtrl.createDocumentTitle);
router.put("/document/title/:id", DocumentCtrl.updateDocumentTitle);
router.delete("/document/title/:id", DocumentCtrl.deleteDocumentTitle);

module.exports = router;