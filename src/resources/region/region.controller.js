 
// const { response } = require("../../server");
const regionModel = require("./region.model");

// This function will return all region....
const getAllRegions = async (__request, response) => {
try {
 const regions = await regionModel.find({}) 
  //  const regions = []
    return response.status(200).json({data: regions })
} catch (error) {
    console.log(error);
    return response.status(500).end();
}
}



//get one region 
const getOneRegion = async (request, response) => {
try {
    const regionId  =  request.params.id;
    const region = await regionModel.findOne({_id: regionId})
    // const region = {
    //   name: "Region 1"
    // }
    
    if (!region) {
        return response.status(400).json({message: "region is not found" })
    }
    return response.status(201).json({  data: region})
     
} catch (error) {
    console.log(error);
    return response.status(500).end();
}
}





//✅ Create a new region
const createRegion = async (request, response) => {
try {
     const content = request.body
     const region = await regionModel.create({ ...content})

     return response.status(200).json({ data: region})
} catch (error) {
    console.log(error);
    return response.status(500).end();
}
}



 // Update  
const updateRegion = async (request, response) => {
  try {
    const regionid = request.params.id
    const content = request.body

    const region = await regionModel.findOneAndUpdate(
       {  _id: regionid},
       content,
       { new: true}
    )

    if (!region) {
      return response.status(400).json({ message: "Region is not found" });
    }
    return response.status(201).json({data: region});

  } catch (error) {
    console.error(error);
    return response.status(500).end();
  }
}
 





 
 
// Delete a region
const deleteRegion = async (req, res) => {
  try {
    const regionId = req.params.id;
    const region = await regionModel.findByIdAndDelete({ _id: regionId});

    if (!region) {
      return res.status(400).json({ message: "Region is not found" });
    }

    return res.status(201).json({   data: region });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};





 const regionControllers = {
    getAllRegions, 
    getOneRegion,
    createRegion,
    updateRegion,
    deleteRegion
 }

 module.exports = regionControllers;
  


  

