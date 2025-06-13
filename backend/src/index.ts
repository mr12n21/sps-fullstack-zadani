import { AppDataSource } from "./db";
import app from "./server";
import visitorRoutes from "./api/visitors";
import exhibitRoutes from "./api/exhibits";
import visitRoutes from "./api/visits";

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source initialized");

    app.use("/api/visitors", visitorRoutes);
    app.use("/api/exhibits", exhibitRoutes);
    app.use("/api/visits", visitRoutes);

    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((error) => console.error("DB initialization failed:", error));
