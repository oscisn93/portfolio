export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const date = data.get("date")!!;
  const time = data.get("time")!!;
  const incidentType = data.get("incident-type")!!;
  const area = data.get("area")!!;
  const size = data.get("size")!!;
  const onScene = data.get("on-scene")!!;
  const pCode = data.get("p-code")!!;
  const personnel = data.get("personnel")!!;
  const summary = data.get("summary")!!;

  return new Response(
    JSON.stringify({
      message: "success",
    }),
    { status: 200 }
  );
};
