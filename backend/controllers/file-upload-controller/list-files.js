const { listFilesService } = require("../../services/file-upload-service");

const listFilesController = async () => {
  try {
    const listFilesResponse = await listFilesService();
    if (listFilesResponse.error) {
      return {
        error: listFilesResponse.error,
        payload: {},
      };
    } else {
      return {
        error: false,
        payload: listFilesResponse.payload,
      };
    }
  } catch (error) {
    console.error("LIST_FILES_CONTROLLER_ERROR",error)
    return{
        error: "LIST_FILES_CONTROLLER_ERROR",
        payload:{}
    }
  }
};

module.exports = listFilesController;