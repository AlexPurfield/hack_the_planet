import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  const { _id, name, description, price, imgUrl } = props.product;
  return (
    <Card bg="dark" data-bs-theme="dark" border="dark" className="mt-3">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body className="mx-auto">
        <Card.Title>
          <h3>{name}</h3>
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {description} <p>{price}</p>
        </Card.Text>
        <Button variant="dark" className="mx-auto">
          WE'RE IN
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
