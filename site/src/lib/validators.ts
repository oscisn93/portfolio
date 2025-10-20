import { z } from "astro:content";

export const exerciseSchema = z.object({
  name: z.string(),
  sets: z.array(
    z.object({
      reps: z.number(),
      weight: z.number().optional(),
      bodyWeight: z.boolean().default(false),
    })
  ),
});

export const cardioSchema = z.object({
  exercise: z.string(),
  duration: z.string().duration(),
  speed: z.string(),
  distance: z.number(),
});

export const workoutSchema = z.object({
  date: z.string().date(),
  duration: z.string().duration(),
  muscleGroup: z.string(),
  exercises: z.array(exerciseSchema),
  cardio: cardioSchema,
});

export const courseSchema = z.object({
  title: z.string(),
  subject: z.string(),
  description: z.string(),
  startDate: z.string().date(),
  log: z.object({
    date: z.string().date(),
    duration: z.string().duration(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
  }),
});

export const projectFeatureSchema = z.object({
  title: z.string(),
  status: z.enum(["planned", "in-progress", "completed"]).default("planned"),
  subfeatures: z.array(
    z.object({
      item: z.string(),
      competed: z.boolean().default(false),
    })
  ),
});

export const projectSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  url: z.string().url(),
  description: z.string(),
  icon: z.string().url(),
  screenshots: z.array(
    z.object({
      description: z.string(),
      link: z.string().url(),
    })
  ),
  video: z.string().optional(),
  contributors: z.array(
    z.object({
      name: z.string(),
      githubUsername: z.string(),
    })
  ),
  builtWith: z.array(z.string()),
  features: z.array(projectFeatureSchema),
  aknowledgements: z.array(
    z.object({
      name: z.string(),
      link: z.string().url(),
    })
  ),
  createdAt: z.string().date(),
  updateAt: z.string().datetime(),
});

const invalid_type_error = "Invalid type provided for this field.";
const required_error = "This fields must not be blank";

export type Exercise = z.infer<typeof exerciseSchema>;
export type Cardio = z.infer<typeof cardioSchema>;
export type Workout = z.infer<typeof workoutSchema>;
export type Course = z.infer<typeof courseSchema>;
export type ProjectFeature = z.infer<typeof projectFeatureSchema>;
export type Projects = z.infer<typeof projectSchema>;
