
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ellipse from '../../assets/Ellipse.png'

function Card1() {
  return (
    <div className='cards'>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white' }}>
      {/* <Card.Img  src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Jane Cooper</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>CEO of Hunt</Card.Subtitle>
        <Card.Text style={{marginTop: '20px'}}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'#2e2e2e', color:'white' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Devon Lane</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>CEO of Hunt</Card.Subtitle>
        <Card.Text style={{marginTop: '20px'}}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'black', color:'white' }}>
      {/* <Card.Img variant="top" src={Ellipse} /> */}
      <Card.Body>
        <Card.Title>Robert Fox</Card.Title>
        <Card.Subtitle style={{marginTop:'5px'}}>CEO of Hunt</Card.Subtitle>
        <Card.Text style={{marginTop: '20px'}}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Card1;