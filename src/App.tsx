import React, { useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { AlertI } from './components/AlertI';
import { InputNota } from './components/InputNota';
import { INotes } from './interfaces/IInputNota';
import { defaultNotes } from './util';

function App() {
  const [savedNotes, setNotes] = useState<INotes[]>(defaultNotes);
  const [note, setNote] = useState<number>(0);
  const [less, setLess] = useState<number>(0);
  const [emptyNotes, setEmptyNotes] = useState<number>(0);
  const drawInputs = (i: number, data: INotes) => {
    return (
      <Col key={i} sm="auto">
        <InputNota setNotes={setNotes} LoopKey={i} defaultV={data.value} />
      </Col>
    )
  }
  const deleteNotes = () => {
    console.log("borrar"); 
  }
  const calculateNote = () => {
    setEmptyNotes(savedNotes.filter((value) => value.value === 0).length);
    if(emptyNotes > 1) {
      return Swal.fire({
        title: "Advertencia",
        text: "Hay notas sin cargar",
        icon: "warning",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
    let nota = 0;
    savedNotes.forEach((value) => {
      nota+= value.value * (value.percentage / 100);
    });
    setNote(nota);
  }
  return (
    <Container fluid className="mt-4">
      <Card>
        <Card.Header>Notas estudiante</Card.Header>
        <Card.Body>
          <Row className='justify-content-center'>
            {savedNotes.map((value, key) => (
              drawInputs(key, value)
            ))}
          </Row>
          <Row className='justify-content-center mt-2'>
            <AlertI note={note} less={less} setLess={setLess} emptyNotes={emptyNotes} />
          </Row>
          <Row className='justify-content-center mt-2'>
            <Col sm="auto">
              <Button size='sm' variant='warning' onClick={deleteNotes}>
                Borrar
              </Button>
            </Col>
            <Col sm="auto">
              <Button size='sm' variant='primary' onClick={calculateNote}>
                Calcular
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
