export const fetchWeather = async () => {
  const response = await fetch(
    'https://api.weatherapi.com/v1/current.json?key=b0475d538f704796a1d135646250708'
  );
  if (!response.ok) throw new Error('Failed to fetch weather');
  return await response.json();
};