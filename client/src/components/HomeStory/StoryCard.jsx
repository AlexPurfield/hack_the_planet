import Card from "react-bootstrap/Card";

function StoryCard() {
  return (
    <Card className="mt-3" bg="dark" data-bs-theme="dark" id = "CustomCardColor">
      <Card.Title className="mx-auto bg-dark mt-2" id = "CustomCardColor">HACK THE PLANET</Card.Title>
      <Card.Body>
        <p style={{ textAlign: "center" }}>
          Welcome to Hack The Planet, where innovation and creativity intersect
          with the cutting-edge world of technology. We are not your typical
          store; we are a haven for tech enthusiasts, problem solvers, and those
          who dare to explore the digital realm fearlessly. At Hack The Planet,
          we're committed to providing you with the latest and greatest in the
          world of electronics, gadgets, and tech gear.
        </p>
      </Card.Body>
    </Card>
  );
}

export default StoryCard;
