import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Get all tasks
app.get("/api/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

// Get single task
app.get("/api/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedTask = await prisma.task.findFirst({
      where: { id: parseInt(id) },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
});

// Create a new task
app.post("/api/tasks", async (req: Request, res: Response) => {
  const { title, color } = req.body;
  if (!title || !color) {
    return res.status(400).json({ error: "Title and color are required" });
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        color,
      },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
});

// Update task status or details
app.put("/api/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
});

// Delete a task
app.delete("/api/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send({ succes: true, msg: "Task delete successful" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting task" });
  }
});

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
