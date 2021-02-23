import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name: 'Photography (20GB)',
    price: '$9.99/mo',
    description: 'Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).',
    },
    {name: 'Photography Pro (40GB)',
    price: '$209.99/mo',
    description: 'Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).',
    },
    {name: 'All Apps',
    price: '$52.99/mo',
    description: 'Get all 20+ creative desktop and mobile apps including Photoshop, Illustrator, InDesign, Premiere Pro, and Acrobat.',
    },
    {name: 'Acrobat Pro',
    price: '$14.99/mo',
    description: 'The complete PDF solution for working anywhere (includes desktop, web, and mobile access).',
    }
]
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
       
      </header>
    </div>
  );
}

function Product(props) {
  const divStyle={
    width: '300px',
    height: '300px',
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
    color:'black',
    padding:'10px',
    margin: '20px'
  }
const {name, price, description} = props.product;
  return(
    <div style={divStyle}>
      
      <h5 style={{marginBottom: '0px', padding: '0px', textAlign: 'start'}}>{name} </h5>
      <p style={{fontSize: '30px', margin: '0px', padding: '0px', textAlign: 'start'}}> {price} </p>
      <p style={{fontSize: '15px', margin: '20px 0 0 0', padding: '0px', textAlign: 'start'}}> {description} </p>
      <div style={{display:'flex', marginTop: '50px'}}>
      <p style={{width:'60%', fontSize: '15px', padding: '0px', textAlign: 'start', verticalAlign: 'sub'}}>Add Adobe Stock, Get a 30 day free Trail</p>
      <button style={{padding: '0px 10px', marginLeft: '20px', backgroundColor: 'black', borderRadius: '5px', cursor: 'pointer'}}>Buy Now</button>
      </div>
    </div>
  )
}

export default App;
