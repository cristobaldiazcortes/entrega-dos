    import React, { useContext } from "react";
  import { useNavigate } from "react-router";
  import { Card, ListGroup, Button } from "react-bootstrap";
import Contexto from "../contexto/Contexto";

  
  export default function Home() {
 
  
    const { programadores, setProgramadores } = useContext(Contexto)
    const navigate = useNavigate();
  
    const irProgramador = (id) => {
      navigate(`/freecoders/${id}`);
      console.log(id);
    };
  
    return (
      <>
  
        <div className="home">
         
          {programadores.map((programador) => (
            <Card key={programador.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={programador.foto_url} />
              <Card.Body>
                <Card.Title>{programador.nombre}</Card.Title>
              </Card.Body>
              <div className="orden-ingredientes">
                <ListGroup.Item>
                  <img
                    className="pizzita"
                    src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                    alt="pizzita"
                  />{" "}
                  {programador.area[0]}
                </ListGroup.Item>
                <ListGroup.Item>
                  <img
                    className="pizzita"
                    src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                    alt="pizzita"
                  />{" "}
                  {programador.area[1]}
                </ListGroup.Item>
                <ListGroup.Item>
                  <img
                    className="pizzita"
                    src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                    alt="pizzita"
                  />{" "}
                  {programador.area[2]}
                </ListGroup.Item>
                <ListGroup.Item>
                  <img
                    className="pizzita"
                    src="https://i.postimg.cc/NfQrK0Ky/pizza-1.png"
                    alt="pizzita"
                  />{" "}
                  {programador.area[2]}
                </ListGroup.Item>
              </div>
  
              <h3>edad: ${programador.edad}</h3>
              <div className="botones">
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => irProgramador(programador.id)}
                >
                  Ver más{" "}
                  <img
                    className="ojos"
                    src="https://i.postimg.cc/qMz5V1jv/eyes-1.png"
                    alt="eyes"
                  />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="add"
                  //onClick={() => agregar(pizza)}
                >
                  Añadir{" "}
                  <img
                    className="carrito"
                    src="https://i.postimg.cc/90jZ8F89/shopping-cart.png"
                    alt="shopping-cart"
                  />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </>
    );
  }