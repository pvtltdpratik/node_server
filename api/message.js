module.exports = async (req, res) => {
    if (req.method === 'GET') {
      res.json({ message: 'Hello, this is a GET request!' });
    } else if (req.method === 'POST') {
      const { name } = req.body; // Extract 'name' from request body
      res.json({ message: `Hello, ${name}! This is a POST request.` });
    } else {
      res.status(405).json({ error: 'Method not allowed' }); // Handle unsupported methods
    }
  };