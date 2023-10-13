const express = require("express");
const DocumentCtrl = require("../controllers/documentController");

const router = express.Router();

router.post("/document", DocumentCtrl.createDocument);
router.put("/document/:id", DocumentCtrl.updateDocument);
router.delete("/document/:id", DocumentCtrl.deleteDocument);
router.get("/document/:id", DocumentCtrl.getDocumentById);
router.get("/documents", DocumentCtrl.getDocuments);

module.exports = router;