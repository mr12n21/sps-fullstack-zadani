import { AppDataSource } from "./db";
import app from "./server";
import visitorRoutes from "./api/visitors";
import exhibitRoutes from "./api/exhibits";
import visitRoutes from "./api/visits";

AppDataSource.initialize()
  .then(() => {
    console.log("DB initialized");

    app.use("/api/visitors", visitorRoutes);
    app.use("/api/exhibits", exhibitRoutes);
    app.use("/api/visits", visitRoutes);

    app.get("/", (_req, res) => {
      res.send("Museum API is running");
    });

    app.listen(3000, () => {
      console.log("Server listening on http://localhost:3000");
    });
  })
  .catch((e) => {
    console.error("DB init failed:", e);
  });
