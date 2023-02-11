import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { AlertI } from './components/AlertI';
import { InputNota } from './components/InputNota';
import { useForm } from './hooks/useForm';
import { INotes } from './interfaces/IInputNota';
import { defaultNotes } from './util';

function App() {
  const [savedNotes, setNotes] = useState<INotes[]>(defaultNotes);
  const [emptyNotes, setEmptyNotes] = useState<number>(3);
  const [note, setNote] = useState<number>(0);
  const form = useRef<HTMLFormElement>(null)
  const { serialize } = useForm();
  useEffect(() => {
    document.title = "Calculadora de notas"
  }, []);
  const drawInputs = (i: number, data: INotes) => {
    return (
      <Col key={i} sm="auto">
        <InputNota setNotes={setNotes} LoopKey={i} defaultV={data} />
      </Col>
    )
  }
  const deleteNotes = () => {
    setEmptyNotes(3);
    setNote(0);
    form?.current?.reset();
    setNotes(defaultNotes);
  }
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = serialize(e.target as HTMLFormElement);
    setNotes(prev => {
      for (let k = 0; k < savedNotes.length; k++) {
        prev[k].value = formData[`nota[${k}]`];
        prev[k].percentage = formData[`percentage[${k}]`];
      };
      return prev;
    });
    const empty = savedNotes.filter((value) => ["", 0].includes(value.value)).length;
    setEmptyNotes(empty);
    if (empty > 1) {
      return Swal.fire({
        title: "Advertencia",
        text: "Hay notas sin cargar",
        icon: "warning",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
    calculateNote();
  }
  const calculateNote = () => {
    let nota = 0;
    for (let j = 0; j < savedNotes.length; j++) {
      const item = savedNotes[j];
      nota += (item.value * (item.percentage / 100));
    }
    setNote(nota);
    return nota;
  }
  return (
    <Container fluid className="mt-4">
      <Card>
        <Card.Header>Notas estudiante</Card.Header>
        <form ref={form} onSubmit={submitForm}>
          <Card.Body>
            <Row className='justify-content-center'>
              {savedNotes.map((value, key) => (
                drawInputs(key, value)
              ))}
            </Row>
            <Row className='justify-content-center mt-2'>
              <AlertI emptyNotes={emptyNotes} savedNotes={savedNotes} note={note} />
            </Row>
            <Row className='justify-content-center mt-2'>
              <Col sm="auto">
                <Button size='sm' variant='warning' onClick={deleteNotes}>
                  Borrar
                </Button>
              </Col>
              <Col sm="auto">
                <Button type='submit' size='sm' variant='primary'>
                  Calcular
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </form>
      </Card>
    </Container>
  );
}

export default App;
