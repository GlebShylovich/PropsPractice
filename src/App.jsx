import Card from './Components/Card/Card.jsx';
import './style/App.scss';


const data = [
  {
    tariff: '300',
    cost: '300',
    speed: '10' ,
    color: 'aqua',
    darkcolor: 'darkaqua',
    text: 'The amount of included traffic is not limited'
  },
  {
    tariff: '450',
    cost: '450',
    speed: '50' ,
    color: 'green',
    darkcolor: 'darkgreen',
    text: 'The amount of included traffic is not limited'
  },
  {
    tariff: '550',
    cost: '550',
    speed: '100' ,
    color: 'indianred',
    darkcolor: 'darkred',
    text: 'The amount of included traffic is not limited'
  },
  {
    tariff: '650',
    cost: '650',
    speed: '200' ,
    color: 'darkslategray',
    darkcolor: 'darkgray',
    text: 'The amount of included traffic is not limited'
  }
]

function App() {
  return (
    <div className="App">
      <Card tariff={data[0].tariff} cost={data[0].cost} speed ={data[0].speed} color={data[0].color} darkcolor={data[0].darkcolor} text={data[0].text}/>
      <Card tariff={data[1].tariff} cost={data[1].cost} speed ={data[1].speed} color={data[1].color} darkcolor={data[1].darkcolor} text={data[1].text}/>
      <Card tariff={data[2].tariff} cost={data[2].cost} speed ={data[2].speed} color={data[2].color} darkcolor={data[2].darkcolor} text={data[2].text}/>
      <Card tariff={data[3].tariff} cost={data[3].cost} speed ={data[3].speed} color={data[3].color} darkcolor={data[3].darkcolor} text={data[3].text}/>
    </div>
  );
}

export default App;
