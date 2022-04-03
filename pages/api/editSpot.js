import { MongoClient } from 'mongodb';
const ObjectId = require('mongodb').ObjectId;

export default async function handler (req,res) {


    const spotToEdit = req.body;

    console.log(spotToEdit._id);
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection('surfspots');

    //create query to match which document to edit
    const match = {
        "_id": ObjectId(spotToEdit._id)
    }


    const updateTo = {
      $set: {
              name: spotToEdit.name,
              city: spotToEdit.city,
              region: spotToEdit.region,
              country: spotToEdit.country,
              description: spotToEdit.description,
              image: spotToEdit.image
            }
    }


    const editSurfSpot = await collection.updateOne( match, updateTo)


    res.json(editSurfSpot);
    await client.close();
}
