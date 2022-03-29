import { MongoClient } from 'mongodb';


export default async function handler (req,res) {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection('surfspots');

    const findSurfSpots = collection.find({}, {
      sort: {name: 1}
    });
    const foundSurfSpots = await findSurfSpots.toArray();
    res.json(foundSurfSpots);
    // await client.close();
}
