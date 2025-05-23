import express from "express";
const router = express.Router();
export default router;
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee, updateEmployees } from "#db/queries/employees";


router.route("/").get(async (req, res) => {
  res.send("Welcome to the Fullstack Employees API.")
})



router.route("/employees").get(async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});



router.route("/employees").post(async (req, res) => {
  if(!req.body){
    return res.status(400).send({error: "Missing request body"})
  }
  
  const {name, birthday, salary} = req.body

  if(!name || !birthday || !salary){
    return res.status(400).send({error: "Missing required params"})
  }

  const employee = await createEmployee({name, birthday, salary})
  
  res.status(201).send(employee)
})



router.route("/employees/:id").get(async (req, res) => {
  const id = Number(req.params.id)

  if(!Number.isInteger(id) || id < 0){
    return res.status(400).send({error: "Please send a positive number"})
  }

  const employee = await getEmployee(id)
  if(!employee){
    return res.status(404).send({error: "Employee does not exist"})
  }

  res.send(employee)
})



router.route("/employees/:id").delete(async (req, res) => {
  const id = Number(req.params.id)

  if(!Number.isInteger(id) || id < 0){
    return res.status(400).send({error: "Please send a positive number"})
  }

  const employee = await getEmployee(id)
  if(!employee){
    return res.status(404).send({error: "Employee does not exist"})
  }

  const deleteEmp = await deleteEmployee(id)
  if(!deleteEmp){
    return res.status(404).send({error: "Employee not found"})
  }

  return res.sendStatus(204)
})



router.route("/employees/:id").put(async (req, res) => {
  const id = Number(req.params.id)
  if(!req.body){
    return res.status(400).send({error: "Please enter the required information"})
  }

  const {name, birthday, salary} = req.body
  if(!name || !birthday || !salary){
    return res.status(400).send({error: "Missing required params"})
  }
  
  if(!Number.isInteger(id) || id < 0){
    return res.status(400).send({error: "Please make sure the ID is a positive number"})
  }

  // const employee = await getEmployee(id)
  // if(!employee){
  //   return res.status(404).send({error: "Employee not found"})
  // }


  const updatedEmp = await updateEmployee({id, name, birthday, salary})
console.log(updatedEmp)
if (!updatedEmp){
  return res.status(404).send({error: "Employee not found"});
}

  return res.status(200).send(updatedEmp);
});

