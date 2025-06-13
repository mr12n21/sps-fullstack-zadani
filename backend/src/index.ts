import { AppDataSource } from "./db";
import app from "./server";
import { User } from "./entity/User";
import { seed } from "./seed";

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source initialized");

    await seed();

    app.get("/api/users", async (req, res) => {
      const userRepo = AppDataSource.getRepository(User);
      const users = await userRepo.find();
      res.json(users);
    });

    app.post("/api/users", async (req, res) => {
      const userRepo = AppDataSource.getRepository(User);
      const user = new User();
      user.name = req.body.name;
      await userRepo.save(user);
      res.status(201).json(user);
    });

    app.get("/", async (req, res) => {
      const userRepo = AppDataSource.getRepository(User);
      const users = await userRepo.find();
      res.render("index", { users });
    });

    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("DB initialization failed:", error);
  });
