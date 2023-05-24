import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    //Remember never to trust client side validation because it can be tricked
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    //store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO_URL);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
    }

    const db = client.db();

    try {
      const result = await db.collection('tech_messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}
