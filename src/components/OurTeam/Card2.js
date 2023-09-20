import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ellipse from '../../assets/Ellipse.png'

function Card2() {
  return (
    <div className='cards'>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white' }}>
      {/* <Card.Img  src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Daniel Daf</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>301 Cases</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'#E3B748', color:'black' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Sanfole</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>850 Cases</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Cesforila</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>470 Cases</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white', marginTop:'75px' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Colleen</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>180 Cases</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white', marginTop:'75px' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Haldone</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>212 Cases</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white', marginTop:'75px' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Nik Jeo</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>350 Cases</Card.Subtitle>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Card2;