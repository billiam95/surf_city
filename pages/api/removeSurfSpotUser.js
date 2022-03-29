import { MongoClient } from 'mongodb';


export default async function handler (req,res) {
    console.log('reaching backend')
    console.log(req.body)
    const spotToDelete = req.body
    console.log(spotToDelete)
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection('surfspots');

    const deleteSurfSpot = await collection.deleteOne(spotToDelete);
    res.json(spotToDelete);
    await client.close();
}
