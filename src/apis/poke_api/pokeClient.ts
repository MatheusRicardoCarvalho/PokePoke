import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2'; 

const poke_api = axios.create({
  baseURL: BASE_URL,
});

export default poke_api;
