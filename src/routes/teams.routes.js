const { Router } = require("express")
const router = Router()
const controller = require("../controllers/teams.controller")

router.get("/", function(req, res) { res.json({status: true}) })
router.get("/getAll", controller.getAll)

module.exports = router