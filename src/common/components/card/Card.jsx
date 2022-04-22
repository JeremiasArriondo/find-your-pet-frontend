import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const CardPets = () => {
  return (
        <Card cover css={{ w: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            Perdido!
            </Text>
        </Col>
        </Card.Header>
        <Card.Body>
        <Card.Image
            src="https://www.dondeir.com/wp-content/uploads/2020/12/pasarela-virtual-de-perros-y-gatos-en-adopcion.jpg"
            height={400}
            width="100%"
            alt="Card example background"
        />
        </Card.Body>
        <Card.Footer
        blur
        css={{
            position: "absolute",
            bgBlur: "#ffffff",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
        }}
        >
        <Row>
            <Col>
            <Text color="#000" size={12}>
                Encontrado el dia viernes, por calle Lavalle
            </Text>
            </Col>
            <Col>
            <Row justify="flex-end">
                <Button flat auto rounded color="secondary">
                <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                >
                    Contactar
                </Text>
                </Button>
            </Row>
            </Col>
        </Row>
        </Card.Footer>
    </Card>
    )
};

export default CardPets;