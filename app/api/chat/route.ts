export async function POST(req: Request) {
  const { prompt } = await req.json()

  const response = await fetch("http://127.0.0.1:8000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  })

  const data = await response.json()

  return Response.json({ message: data.generated_text })
}