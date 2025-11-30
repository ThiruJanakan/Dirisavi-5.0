export default async function handler(req, res) {
  let body = "";

  // Read body manually
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    const { prompt } = JSON.parse(body);

    const API_KEY = process.env.GEMINI_API_KEY;

    try {
      const result = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }]
              }
            ]
          })
        }
      );

      const data = await result.json();
      return res.status(200).json(data);

    } catch (err) {
      return res.status(500).json({ error: err.toString() });
    }
  });
}
