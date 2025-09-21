 
// const { response } = require("../../server");
const clusterModel = require("./cluster.model");

// This function will return all clusters....
const getAllClusters = async (request, response) => {
try {
 const clusters = await clusterModel.find({}) 
  
    return response.status(200).json({data: clusters })
} catch (error) {
    console.log(error);
    return response.status(500).end();
}
}




//get one cluster 
const getOneCluster = async (request, response) => {
try {
    const clusterid  =  request.params.id;
    const cluster = await clusterModel.findOne({ _id: clusterid})
  
    if (!cluster) {
        return response.status(400).json({message: "cluster is not found" })
    }
    return response.status(201).json({  data: cluster})
     
} catch (error) {
    console.log(error);
    return response.status(500).end();
}
}





//✅ Create a new cluster
const createCluster = async (request, response) => {
try {
     const content = request.body
     const cluster = await clusterModel.create({ ...content})

     return response.status(200).json({ data: cluster})
} catch (error) {
    console.log(error);
    return response.status(500).end();
}
}



 // Update  cluster
const updateCluster = async (request, response) => {
  try {
    const clusterid = request.params.id
    const  content = request.body

    const cluster = await clusterModel.findOneAndUpdate(
       {  _id: clusterid},
       content,
       { new: true}
    )
    if (!cluster) {
      return response.status(400).json({ message: "cluster is not found" });
    }
    return response.status(201).json({data: cluster});

  } catch (error) {
    console.error(error);
    return response.status(500).end();
  }
}
 

 
// Delete a cluster
const deleteCluster= async (req, res) => {
  try {
    const clusterid = req.params.id;
    const cluster = await clusterModel.findByIdAndDelete(clusterid);

    if (!cluster) {
      return res.status(400).json({ message: "Cluster is not found" });
    }

    return res.status(200).json({ data:  cluster });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}





 const clusterControllers = {
    getAllClusters, 
    getOneCluster,
    createCluster,
    updateCluster,
    deleteCluster
 }

 module.exports = clusterControllers;
  

 


