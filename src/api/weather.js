export const fetchWeather = async () => {
  const response = await fetch(
    'https://api.weatherapi.com/v1/current.json?key=API KEY'
  );
  if (!response.ok) throw new Error('Failed to fetch weather');
  return await response.json();
};