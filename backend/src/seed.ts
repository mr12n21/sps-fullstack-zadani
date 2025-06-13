import { AppDataSource } from "./db";
import { User } from "./entity/User";
import { Exhibit } from "./entity/Exhibit";
import { Visitor } from "./entity/Visitor";

export async function seed() {
  // User repo
  const userRepo = AppDataSource.getRepository(User);
  if ((await userRepo.count()) === 0) {
    const users = [
      userRepo.create({ name: "Alice" }),
      userRepo.create({ name: "Bob" }),
      userRepo.create({ name: "Charlie" }),
    ];
    await userRepo.save(users);
    console.log("Seeded users");
  }

  // Exhibit repo
  const exhibitRepo = AppDataSource.getRepository(Exhibit);
  if ((await exhibitRepo.count()) === 0) {
    const exhibits = [
      exhibitRepo.create({ name: "Dinosaur Fossils", description: "Prehistoric fossils." }),
      exhibitRepo.create({ name: "Ancient Egypt", description: "Artifacts from Ancient Egypt." }),
    ];
    await exhibitRepo.save(exhibits);
    console.log("Seeded exhibits");
  }

  // Visitor repo
  const visitorRepo = AppDataSource.getRepository(Visitor);
  if ((await visitorRepo.count()) === 0) {
    const visitors = [
      visitorRepo.create({ firstname: "Jan", lastname: "Novák" }),
      visitorRepo.create({ firstname: "Eva", lastname: "Svobodová" }),
    ];
    await visitorRepo.save(visitors);
    console.log("Seeded visitors");
  }
}
