
// const { MongoClient, ServerApiVersion } = require('mongodb');
// import { environment } from "../../environment.dev";
// const uri =environment.dbUri;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//     try {
//         await client.connect();
//         const db = client.db('easyget');
//         const collection = db.collection('masterdata');
    
//         // Retrieve all items from the 'masterdata' collection
//         const items = await collection.find({}).toArray();
    
//         //console.log('All Items:', items);
//       } catch (error) {
//         console.error('Error fetching items:', error);
//       } finally {
//         //await client.close();
//       }
// }




// export {run}