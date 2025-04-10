// server.js
constexpress=require('express');
constaxios=require('axios');
constpath=require('path');

constapp=express();
constport=3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API route to fetch weather data
app.get('/weather/:city', async (req, res) => {
  const { city } =req.params;

  try {
    constapiKey='84b545b474472e158267e5dc4145df78'; // Replace with your OpenWeatherMap API key
    constresponse=awaitaxios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    consttemperature=response.data.main.temp;
    consthumidity=response.data.main.humidity;
    constpressure=response.data.main.pressure;
    res.json({ temperature, humidity, pressure });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error:'Internal Server Error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
