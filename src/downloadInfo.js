import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const api = process.env.APIKEY
const url = process.env.URL

export async function consultaWeather(cidade,dias){
    try{
    console.log('iniciando consulta')
    console.log(url+api+'&q='+cidade+'&days='+dias)
    let previsao =[]
    let consulta = await axios.get(url+api+'&q='+cidade+'&days='+dias)
    for (let i = 0; i < consulta.data.forecast.forecastday.length; i++) {
        let obj = {
            cidade: consulta.data.location.name,
            data: consulta.data.forecast.forecastday[i].date,
            min: consulta.data.forecast.forecastday[i].day.mintemp_c,
            max: consulta.data.forecast.forecastday[i].day.maxtemp_c,
            }
        previsao.push(obj)
        }
        return previsao
    } catch (err) {
        console.log('DEU ERRO AQUI',err)
    }
}
