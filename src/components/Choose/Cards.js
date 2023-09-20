
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ellipse from '../../assets/Ellipse.png'

function Cards() {
  return (
    <div className='cards'>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white' }}>
      {/* <Card.Img  src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>98% Success Rate</Card.Title>
        <Card.Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
        </Card.Text>
        <span className="button-container">Read More</span>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>100% Success Rate</Card.Title>
        <Card.Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
        </Card.Text>
        <span className="button-container">Read More</span>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>100% Success Rate</Card.Title>
        <Card.Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
        </Card.Text>
        <span className="button-container">Read More</span>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;
