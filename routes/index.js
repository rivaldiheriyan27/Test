const router = require("express").Router();
const listController = require("../controllers/controller");

router.get("/listData", listController.getList);
router.get("/listData/:id", listController.getListId);
router.post("/listData", listController.postList);
router.post("/checkList", listController.checkData);
router.put("/listData/:id", listController.putList);
router.delete("/listData/:id", listController.deleteList);

module.exports = router;
