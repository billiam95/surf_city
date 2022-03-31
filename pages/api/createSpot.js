import { MongoClient } from 'mongodb';


export default async function handler (req,res) {

    const newSurfSpot = req.body
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection('surfspots');

    const saveSurfSpot = await collection.insertOne(newSurfSpot)

    res.json(newSurfSpot);
    // await client.close();
}
