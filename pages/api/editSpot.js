import { MongoClient } from 'mongodb';


export default async function handler (req,res) {

    const spotToEdit = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection('surfspots');

    const editSurfSpot = await collection.findOneAndReplace(spotToEdit)

    res.json(spotToEdit);
    await client.close();
}
