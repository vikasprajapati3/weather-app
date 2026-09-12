export default async function handler(req, res) {
    try {
        const { q } = req.query;

        if (!q) {
            return res.status(400).json({
                error: "City is required"
            });
        }

        const url =
            `https://api.openweathermap.org/data/2.5/weather` +
            `?q=${encodeURIComponent(q)}` +
            `&appid=${process.env.OPENWEATHER_API_KEY}` +
            `&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error("Weather API error:", error);

        return res.status(500).json({
            error: "Failed to fetch weather data"
        });
    }
}
