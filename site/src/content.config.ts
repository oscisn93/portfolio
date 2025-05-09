import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { courseSchema, projectSchema, workoutSchema } from "./lib/validators";


const workouts = defineCollection({
  loader: file("src/data/exercises.json"),
  schema: workoutSchema,
});

const courses = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/courses",
  }),
  schema: courseSchema,
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/projects",
  }),
  schema: projectSchema,
});

export const collections = { projects, workouts, courses };
