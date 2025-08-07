export const fetchWeather = async () => {
  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Jakarta');
  if (!response.ok) throw new Error('Failed to fetch weather');
  return await response.json();
};
