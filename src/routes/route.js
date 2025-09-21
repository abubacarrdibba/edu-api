const express = require("express");
const router = express.Router();

const {
    getAllRegions,
    getOneRegion,
    createRegion,
    updateRegion,
    deleteRegion
} = require("../resources/region/region.controller");

// Region routers/endpoints
router.get("/regions", getAllRegions);
router.get("/regions/:id", getOneRegion);
router.post("/regions", createRegion);
router.put("/regions/:id", updateRegion);
router.delete("/regions/:id", deleteRegion);

const {
    getAllClusters, 
    getOneCluster,
    createCluster,
    updateCluster,
    deleteCluster
} = require("../resources/cluster/cluster.controller");

router.get("/clusters", getAllClusters);
router.get("/clusters/:id", getOneCluster);
router.post("/clusters", createCluster);
router.put("/clusters/:id", updateCluster);
router.delete("/clusters/:id", deleteCluster);




module.exports = router;
