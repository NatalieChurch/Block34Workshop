import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

import dotenv from "dotenv";
dotenv.config();


// await db.connect();
// await seedEmployees();
// await db.end();
// console.log("🌱 Database seeded.");

async function seedEmployees() {
  await db.connect()

  await createEmployee("Henry Goldblum", '2000-02-28', 120000)
  await createEmployee("Jefferson White", '1000-01-20', 1000)  
  await createEmployee("Goofy MaGee", '2005-05-24', 20000)
  await createEmployee("Laura Bailey", '2006-02-19', 80000)
  await createEmployee("Marisha Slay", '2007-06-04', 9000000)
  await createEmployee("Dominick Lazo", '2008-08-29', 10000)
  await createEmployee("Natasha Lollipop", '2009-03-07', 240000)
  await createEmployee("Larry Perry", '2010-10-13', 160000)
  await createEmployee("Smarty Pants", '2011-12-12', 180000)
  await createEmployee("Hey There", '2012-11-17', 90000)
  await createEmployee("Hope Uwell", '2013-01-26', 20000)
  await createEmployee("Good Bye", '2014-04-03', 10000)

  await db.end();
  console.log("🌱 Database seeded.");
}

seedEmployees();
