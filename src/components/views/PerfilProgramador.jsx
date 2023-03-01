import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";
import Contexto from "../contexto/Contexto";


export default function Perfil() {
  const [programadorDetalle, setProgramadorDetalle] = useState([]);
  const [ProgramadorStack, setProgramadorStack] = useState([]);
  const { programadores } = useContext(Contexto);

  const navigate = useNavigate();

  const irContacto = (id) => {
    navigate(`/contacto/${id}`);
    console.log(id);
  };
  const { id } = useParams();

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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-4 col-sm-12  ajustes-card">
            
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

            <Button
              className="button-contactar"
              onClick={() => irContacto(programadorDetalle.id)}
            >
              Contactar 
            </Button>
          </div>

          <div className="col-xl-9 col-md-8 col-sm-12">
            <div className="resumen-de-habilidades">
              <h2>Resumen de habilidades</h2>

              <p className="resumen-texto">
                tabla programador_lenguaje.experiencia
              </p>
            </div>

            <h2>informacion personal</h2>
            <div className="informacion-personal">
              <p>Edad: {programadorDetalle.edad}</p>
              <p>Email: {programadorDetalle.email}</p>
              <p>Telefono: {programadorDetalle.telefono}</p>
            </div>

            <h2>repositorios</h2>
            <div className="repositorio">
              <Card.Link href={programadorDetalle.link_github}>
                repositorio github{" "}
              </Card.Link>
              <Card.Link href={programadorDetalle.link_vercel}>
                repositorio vercel{" "}
              </Card.Link>
            </div>

            <h2>BIO</h2>
            <div className="bio">
              <p>{programadorDetalle.biografia}</p>
            </div>

            <h2>Mi oferta de valor</h2>
            <div className="oferta-de-valor">
              <p>en que me destaco</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
