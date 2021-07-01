/* eslint-disable no-plusplus */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = process.env.APIKEY;
const url = process.env.URL;

export const consultaWeather = async (cidade, dias) => {
  try {
    const previsao = [];
    const consulta = await axios.get(`${url + api}&q=${cidade}&days=${dias}`);
    for (let i = 0; i < consulta.data.forecast.forecastday.length; i++) {
      const obj = {
        cidade: consulta.data.location.name,
        data: consulta.data.forecast.forecastday[i].date,
        min: consulta.data.forecast.forecastday[i].day.mintemp_c,
        max: consulta.data.forecast.forecastday[i].day.maxtemp_c,
      };
      previsao.push(obj);
    }
    return previsao;
  } catch (err) {
    throw new Error(err);
  }
};

export default consultaWeather;
