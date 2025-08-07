import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest } from '../redux/todo/todoSlice';
import Loader from './Loader';

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.todos.weather);
  const loading = useSelector((state) => state.todos.loading);

  useEffect(() => {
    dispatch(fetchWeatherRequest());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (!weather) return <p>Gagal memuat data cuaca</p>;

  return (
    <div>
      <h4>Cuaca di {weather.location.name}</h4>
      <p>{weather.current.condition.text}</p>
      <p>Suhu: {weather.current.temp_c}°C</p>
    </div>
  );
};

export default WeatherInfo;