const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for user registration
server.post('/api/register', (req, res) => {
  const { phoneNumber, otp } = req.body;
  console.log(router);
  // Perform your registration logic here
  console.log('Registration request:', { phoneNumber, otp });
  res.sendStatus(200);
});

// Custom route for sending OTP
server.post('/api/sendOTP', (req, res) => {
  const { phoneNumber, otp } = req.body;
  // Perform your OTP sending logic here
  console.log('Send OTP request:', { phoneNumber, otp });
  res.sendStatus(200);
});

// Custom route for user login
server.post('/api/login', (req, res) => {
  const { phoneNumber, otp } = req.body;
  // Perform your login logic here

  console.log('Login request:', { phoneNumber, otp });
  res.sendStatus(200);
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
