import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function Accordian() {
  return (
    <Accordion style={{width:'500px'}} className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do I need a personal injury report?</Accordion.Header>
        <Accordion.Body>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How much is my case worth?</Accordion.Header>
        <Accordion.Body>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What should I do right after car accident</Accordion.Header>
        <Accordion.Body>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How much is my case worth?</Accordion.Header>
        <Accordion.Body>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;
