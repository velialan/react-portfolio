import './App.css';
import React from 'react'
import { Button, Container } from 'reactstrap';
import axios from 'axios'
function App() {
  const url = 'https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=52.74,52.19,12.91,13.74';

  //Access-Control-Allow-Origin

  // headers = {
  //   "accept-encoding": "gzip, br",
  //   "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
  //   "cache-control": "max-age=0",
  //   "origin": "https://www.flightradar24.com",
  //   "referer": "https://www.flightradar24.com/",
  //   "sec-fetch-dest": "empty",
  //   "sec-fetch-mode": "cors",
  //   "sec-fetch-site": "same-site",
  //   "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
  // }



  let config = {
    headers: {
      'accept-encoding': 'gzip, br',
      'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      'cache-control': 'max-age=0',
      'origin': 'https://www.flightradar24.com',
      'referer': 'https://www.flightradar24.com/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
    }
  };
  async function getData() {
    try {
      const response = await axios.get(url,config);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Container>
      <Button onClick={getData} color="danger">Danger!</Button>
    </Container>
  );
}

export default App;
