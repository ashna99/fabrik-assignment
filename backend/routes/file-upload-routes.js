const express = require("express");
const router = express.Router();
const {
  uploadFileController,
  listFilesController
} = require("../controllers/file-upload-controller");

router.post("/api/file-upload", async (req, res) => {
  try {
    console.log("file received");
    const uploadFile = req.files.file;
    const fileUploadResponse = await uploadFileController({file: uploadFile});
    if (fileUploadResponse.error) {  
      res.send({
        error: fileUploadResponse.error,
        payload: {},
      });
    } else {
      res.send({
        error: false,
        payload: fileUploadResponse.payload
      });
    }
  } catch (error) {
    res.send({
      error: "ERROR_RECEIVING FILE",
      payload: {},
    });
  }
});

router.get("/api/files", async (req, res) => {
  try {
    const listFilesResponse = await listFilesController();
    if (listFilesResponse.error) {  
      res.send({
        error: listFilesResponse.error,
        data: [],
      });
    } else {
      res.send({
        error: false,
        data: listFilesResponse.payload
      });
    }
  } catch (error) {
    console.log("ERROR_RECEIVING FILES",error)
    res.send({
      error: "ERROR_RECEIVING FILES",
      payload: {},
    });
  }
});


module.exports = router;
