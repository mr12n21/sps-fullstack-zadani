# Další témata Fullstack aplikací



---

### 1. Rezervační systém na sportoviště
Uživatelé mohou rezervovat sportoviště v různých časech.

- **Tabulka 1** - `sports` - seznam sportovišť
  - `name`
  - `location`
- **Tabulka 2** - `reservations` - rezervace
  - `user_name`
  - `sport_id`
  - `date`
  - `time_slot`

### 2. Správa jídelníčku ve školní jídelně
Evidence jídel a jejich kategorií, možnost aktualizace jídelníčku.

- **Tabulka 1** - `meals`
  - `name`
  - `description`
- **Tabulka 2** - `categories`
  - `name`

### 3. Evidence návštěvníků muzea
Záznam návštěvníků a jejich návštěv jednotlivých expozic.

- **Tabulka 1** - `visitors`
  - `firstname`
  - `lastname`
- **Tabulka 2** - `exhibits`
  - `name`
  - `description`
- **Tabulka 3** - `visits`
  - `visitor_id`
  - `exhibit_id`
  - `visit_date`

### 4. Správa domácích mazlíčků v útulku
Útulek spravuje zvířata a jejich majitele.

- **Tabulka 1** - `pets`
  - `name`
  - `species`
- **Tabulka 2** - `owners`
  - `firstname`
  - `lastname`
  - `phone`

### 5. Správa kurzů v jazykové škole
Záznam kurzů, lektorů a přihlášených studentů.

- **Tabulka 1** - `courses`
  - `name`
  - `level`
- **Tabulka 2** - `teachers`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `enrollments`
  - `student_name`
  - `course_id`

### 6. Správa aut v autopůjčovně
Půjčovna eviduje auta, zákazníky a výpůjčky.

- **Tabulka 1** - `cars`
  - `make`
  - `model`
- **Tabulka 2** - `customers`
  - `firstname`
  - `lastname`
  - `driver_license`
- **Tabulka 3** - `rentals`
  - `car_id`
  - `customer_id`
  - `rental_date`
  - `return_date`

### 7. Sklad náhradních dílů
Evidence dílů, dodavatelů a objednávek.

- **Tabulka 1** - `parts`
  - `name`
  - `part_number`
- **Tabulka 2** - `suppliers`
  - `name`
  - `contact`
- **Tabulka 3** - `orders`
  - `part_id`
  - `supplier_id`
  - `order_date`

### 8. Systém hodnocení restaurací
Uživatelé hodnotí restaurace a přidávají komentáře.

- **Tabulka 1** - `restaurants`
  - `name`
  - `location`
- **Tabulka 2** - `reviews`
  - `user_name`
  - `restaurant_id`
  - `rating`
  - `comment`

### 9. Správa inventáře kanceláře
Sledování zásob, kategorií a dodavatelů.

- **Tabulka 1** - `items`
  - `name`
  - `quantity`
- **Tabulka 2** - `categories`
  - `name`
- **Tabulka 3** - `suppliers`
  - `name`
  - `contact`

### 10. Evidence úkolů v týmu
Správa projektových úkolů, přiřazení k členům týmu.

- **Tabulka 1** - `tasks`
  - `title`
  - `description`
  - `status`
- **Tabulka 2** - `team_members`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `assignments`
  - `task_id`
  - `team_member_id`

### 11. Správa parkovacích míst v garáži
Rezervace a správa parkovacích míst.

- **Tabulka 1** - `parking_spots`
  - `number`
  - `level`
- **Tabulka 2** - `reservations`
  - `spot_id`
  - `vehicle_plate`
  - `reservation_date`

### 12. Katalog filmů a hodnocení
Evidence filmů a uživatelských hodnocení.

- **Tabulka 1** - `movies`
  - `title`
  - `genre`
- **Tabulka 2** - `ratings`
  - `user_name`
  - `movie_id`
  - `rating`

### 13. Správa fitness centra
Záznam členů, cvičebních plánů a rezervací lekcí.

- **Tabulka 1** - `members`
  - `firstname`
  - `lastname`
- **Tabulka 2** - `workout_plans`
  - `name`
  - `description`
- **Tabulka 3** - `class_reservations`
  - `member_id`
  - `class_id`
  - `reservation_date`

### 14. Evidence návštěv v zoo
Záznam návštěvníků a zvířat, která viděli.

- **Tabulka 1** - `visitors`
  - `firstname`
  - `lastname`
- **Tabulka 2** - `animals`
  - `name`
  - `species`
- **Tabulka 3** - `visits`
  - `visitor_id`
  - `animal_id`
  - `visit_date`

### 15. Správa knih v antikvariátu
Evidování knih, autorů a žánrů.

- **Tabulka 1** - `books`
  - `title`
- **Tabulka 2** - `authors`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `genres`
  - `name`

### 16. Systém správy konferencí
Evidence konferencí, řečníků a účastníků.

- **Tabulka 1** - `conferences`
  - `name`
  - `date`
- **Tabulka 2** - `speakers`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `attendees`
  - `conference_id`
  - `attendee_name`

### 17. Správa objednávek v e-shopu
Záznam produktů, zákazníků a objednávek.

- **Tabulka 1** - `products`
  - `name`
  - `price`
- **Tabulka 2** - `customers`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `orders`
  - `product_id`
  - `customer_id`
  - `order_date`

### 18. Evidence darů pro charitu
Záznam dárců a darovaných věcí.

- **Tabulka 1** - `donors`
  - `firstname`
  - `lastname`
- **Tabulka 2** - `donations`
  - `donor_id`
  - `item`
  - `date`

### 19. Správa recepce hotelu
Evidence pokojů, hostů a rezervací.

- **Tabulka 1** - `rooms`
  - `number`
  - `type`
- **Tabulka 2** - `guests`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `bookings`
  - `room_id`
  - `guest_id`
  - `checkin_date`
  - `checkout_date`

### 20. Správa zaměstnanců firmy
Záznam zaměstnanců, oddělení a projektů.

- **Tabulka 1** - `employees`
  - `firstname`
  - `lastname`
  - `position`
- **Tabulka 2** - `departments`
  - `name`
- **Tabulka 3** - `projects`
  - `name`
  - `department_id`

### 21. Správa školních tříd
Evidence tříd, žáků a třídních učitelů.

- **Tabulka 1** - `classes`
  - `name`
  - `year`
- **Tabulka 2** - `students`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `class_teachers`
  - `class_id`
  - `teacher_name`

### 22. Správa výpůjček v knihovně
Záznam čtenářů, knih a výpůjček.

- **Tabulka 1** - `readers`
  - `firstname`
  - `lastname`
- **Tabulka 2** - `books`
  - `title`
- **Tabulka 3** - `loans`
  - `reader_id`
  - `book_id`
  - `loan_date`
  - `return_date`

### 23. Správa soutěžících v soutěži
Evidence soutěžících, kategorií a výsledků.

- **Tabulka 1** - `contestants`
  - `firstname`
  - `lastname`
- **Tabulka 2** - `categories`
  - `name`
- **Tabulka 3** - `results`
  - `contestant_id`
  - `category_id`
  - `score`

### 24. Správa objednávek v restauraci
Záznam jídel, stolů a objednávek.

- **Tabulka 1** - `dishes`
  - `name`
- **Tabulka 2** - `tables`
  - `number`
- **Tabulka 3** - `orders`
  - `dish_id`
  - `table_id`
  - `order_time`

### 25. Správa návštěv v nemocnici
Záznam pacientů, lékařů a návštěv.

- **Tabulka 1** - `patients`
  - `firstname`
  - `lastname`
- **Tabulka 2** - `doctors`
  - `firstname`
  - `lastname`
  - `specialization`
- **Tabulka 3** - `visits`
  - `patient_id`
  - `doctor_id`
  - `visit_date`

### 26. Správa vozového parku firmy
Evidence vozidel, řidičů a jízd.

- **Tabulka 1** - `vehicles`
  - `make`
  - `model`
- **Tabulka 2** - `drivers`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `trips`
  - `vehicle_id`
  - `driver_id`
  - `trip_date`

### 27. Správa inventáře ve skladu knih
Evidování knih, skladových míst a zásob.

- **Tabulka 1** - `books`
  - `title`
- **Tabulka 2** - `locations`
  - `name`
- **Tabulka 3** - `stock`
  - `book_id`
  - `location_id`
  - `quantity`

### 28. Správa projektů a úkolů
Evidence projektů, úkolů a členů týmu.

- **Tabulka 1** - `projects`
  - `name`
- **Tabulka 2** - `tasks`
  - `title`
  - `status`
- **Tabulka 3** - `team_members`
  - `firstname`
  - `lastname`
- **Tabulka 4** (volitelná) - `assignments`
  - `task_id`
  - `team_member_id`

### 29. Správa objednávek květin
Záznam květin, zákazníků a objednávek.

- **Tabulka 1** - `flowers`
  - `name`
- **Tabulka 2** - `customers`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `orders`
  - `flower_id`
  - `customer_id`
  - `order_date`

### 30. Správa kurzů a studentů
Evidence kurzů, studentů a jejich zápisů.

- **Tabulka 1** - `courses`
  - `name`
  - `description`
- **Tabulka 2** - `students`
  - `firstname`
  - `lastname`
- **Tabulka 3** - `enrollments`
  - `student_id`
  - `course_id`
  - `enroll_date`

---


