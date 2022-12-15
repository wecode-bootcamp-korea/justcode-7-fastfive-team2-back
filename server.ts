import dotenv from "dotenv";
dotenv.config();

import createApp from ".";

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`server is listening on PORT http://localhost:${PORT}`);
  });
};

startServer();
