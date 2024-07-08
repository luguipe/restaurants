import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Define an interface for the component's props
interface RestaurantCardProps {
  name: string;
  _id: string;
}

export const RestaurantCard = (props: RestaurantCardProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          `Some quick example text to build on the card title and make up the
          bulk of the card`&apos;s content.
        </Card.Text>
        <Link href={`/restaurants/${props._id}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>

  );
}