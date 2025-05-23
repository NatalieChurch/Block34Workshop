import db from "#db/client";
import { createEmployee } from "./queries/employees.js";
import dotenv from "dotenv";
dotenv.config();


// await db.connect();
// await seedEmployees();
// await db.end();
// console.log("🌱 Database seeded.");

async function seedEmployees() {
  await db.connect();

  await createEmployee({name: "Henry Goldblum", birthday: '2000-02-28', salary: 120000})
  await createEmployee({name: "Jefferson White", birthday: '1000-01-20', salary: 1000})  
  await createEmployee({name: "Goofy MaGee", birthday: '2005-05-24', salary: 20000})
  await createEmployee({name: "Laura Bailey", birthday: '2006-02-19', salary: 80000})
  await createEmployee({name: "Marisha Slay", birthday: '2007-06-04', salary: 9000000})
  await createEmployee({name: "Dominick Lazo", birthday: '2008-08-29', salary: 10000})
  await createEmployee({name: "Natasha Lollipop", birthday: '2009-03-07', salary: 240000})
  await createEmployee({name: "Larry Perry", birthday: '2010-10-13', salary: 160000})
  await createEmployee({name: "Smarty Pants", birthday: '2011-12-12', salary: 180000})
  await createEmployee({name: "Hey There", birthday: '2012-11-17', salary: 90000})
  await createEmployee({name: "Hope Uwell", birthday: '2013-01-26', salary: 20000})
  await createEmployee({name: "Good Bye", birthday: '2014-04-03', salary: 10000})
  
  console.log("🌱 Database seeded.");
  await db.end();

}

seedEmployees();
