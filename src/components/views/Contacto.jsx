import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";
import Contexto from "../contexto/Contexto";

//import Badge from "react-bootstrap/Badge";

//import RangeSlider from 'react-bootstrap-range-slider';
//import '../assets/css/estilocrearperfil.css';

export default function Contacto() {
  const { programadores, setProgramadores } = useContext(Contexto);

  // const navigate = useNavigate();

  //const irContacto = (id) => {
  ///  navigate(`/contacto/${id}`);
  // console.log(id);

  const { id } = useParams();
  const [languages, setLanguages] = useState([]);
  const [programadorDetalle, setProgramadorDetalle] = useState([]);
  const [ProgramadorStack, setProgramadorStack] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");
  const [texto, setTexto] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");

  const obtenerDatos = () => {
    const datosProgramador = programadores.find(
      (programador) => programador.id === id
    );
    if (datosProgramador !== undefined) {
      setProgramadorDetalle(datosProgramador || []);
      setProgramadorStack(datosProgramador.area || []);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, [programadores]);

  const handleLanguagesChange = (event) => {
    const selectedLanguages = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setLanguages(selectedLanguages);
  };

  const handleSaveButtonClick = () => {
    // Save the selected data in browser memory here
    console.log("Selected Languages:", languages);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "image/png",
      "image/jpeg",
    ];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      alert(
        "El archivo seleccionado no es válido. Por favor seleccione un archivo PDF, Word, PNG o JPG."
      );
    }
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
    }
  };

  const handleComments = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    localStorage.setItem("description", description);
    //localStorage.setItem("comments", comments);

    // Your code to handle form submission goes here
  };

  const handleSubmitComments = (event) => {
    event.preventDefault();
    console.log(texto);
    localStorage.setItem("comments", comments);

    // Your code to handle form submission goes here
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 secc-izq">
            <Card>
              <Card.Title className="card-nombre">
                {programadorDetalle.nombre} {programadorDetalle.apellido}
              </Card.Title>
              <Card.Img
                variant="top"
                src={programadorDetalle.foto_url}
                alt="foto-perfil"
              />

              <ListGroup className="list-group-flush">
                {ProgramadorStack.map((area) => (
                  <ListGroup.Item key={area}>{area}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
            
            <div className="precio-horas">
              <p className="precio-texto">
                valor hora
              </p>
              <FaMoneyBillWave className="icono" />
            </div>
    



          </div>

          <div className="col-8">
            <div className="maincontainer">
              <h3>Explica brevemente tu proyecto</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Descripción detallada de aspectos funcionales"
                    required
                  />
                </div>
                <button type="submit" onClick={handleSaveButtonClick}>
                  Guardar
                </button>
              </form>
            </div>

            <div className="stack">
              <div className="stack-orden">
                <h3 className="stack-titulo">Elige el stack requerido:</h3>
                <Form className="stack-form">
                  {[
                    "Python",
                    "JavaScript",
                    "Java",
                    "C++",
                    "PHP",
                    "C#",
                    "Swift",
                    "TypeScript",
                    "Kotlin",
                    "Go",
                    "React",
                    "Angular",
                    "Vue.js",
                    "Ruby on Rails",
                    "Django",
                    "Spring",
                    "Express.js",
                    "Laravel",
                    "Flask",
                    "ASP.NET",
                    "MySQL",
                    "PostgreSQL",
                    "Oracle",
                    "MongoDB",
                    "Microsoft SQL Server",
                    "SQLite",
                    "Cassandra",
                    "Redis",
                    "Firebase Realtime Database",
                    "Amazon Aurora",
                  ].map((language) => (
                    <div key={language} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={language}
                        label={language}
                        multiple
                        onChange={handleLanguagesChange}
                      />
                    </div>
                  ))}
                </Form>
              </div>

              <div className="stack-comentarios">
                <h4>¿No encontraste lo que buscabas? Agregalo acá:</h4>
                <form className="form-texto" onSubmit={handleSubmitComments}>
                  <div>
                    <textarea
                      id="comments"
                      value={comments}
                      onChange={handleCommentsChange}
                      required
                    />
                  </div>
                </form>
                <Button
                  className="button-stack"
                  onClick={handleSaveButtonClick}
                >
                  Guardar
                </Button>
              </div>
            </div>

            <Form onSubmit={handleSubmit} className="form-adicional">
              <Form.Group controlId="formFreeText">
                <Form.Label>
                  Agrega comentarios o preguntas adicionales
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  maxLength={500}
                  value={text}
                  onChange={handleChange}
                />
              </Form.Group>
             
                <Button
                  variant="primary"
                  type="submit"
                  className="button-guardar"
                  onClick={handleSaveButtonClick}
                >
                  Guardar
                </Button>
              
            </Form>

            <div>
              <div
                className="maincontainer"
                style={{ backgroundColor: "#E4E4E4" }}
              >
                <div className="maincontainer">
                  <h4> ¿tienes una imagen o boceto de tu proyecto o idea?</h4>
                  <label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      onChange={handleFileChange}
                      placeholder="sube tu idea aca de manera opcional"
                    />
                  </label>
                </div>
                <p>{selectedFile ? selectedFile.name : "Archivo no subido"}</p>
              </div>
            </div>

            <Form>
              <div>
                <h2>Ingresa tus datos </h2>
              </div>

              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Agregar nombre" />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Agregar apellido" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresar correo" />
              </Form.Group>
              <Form.Group controlId="formTelefono">
                <Form.Label>Numero telefonico</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar numero telefonico"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                enviar solicitud
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
