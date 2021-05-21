import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container,Table,ListGroup,ListGroupItem} from 'react-bootstrap'
import axios from 'axios'
const OrderPage = () => {
 let totalPriceQty = 0;
 let tax = 0;
 let totalItem = 0;
 let totalBill = 0;

 const [order, setOrder] = useState({
     restaurantName: "",
     restaurantStreet: "",
     restaurantCity: "",
     restaurantState: "",
     restaurantZipcode: "",
     items: []
 });
 const orderData = async () => {
        try {
                /* http://localhost:9000/api/order :- to run local host*/
            const res = await axios.get("https://ordercustomeruser.herokuapp.com/api/order");
            setOrder({
                restaurantName: res.data.data.restaurant.name,
                restaurantStreet: res.data.data.restaurant.street,
                restaurantCity: res.data.data.restaurant.city,
                restaurantState: res.data.data.restaurant.state,
                restaurantZipcode: res.data.data.restaurant.zipcode,
                items: res.data.data.items
            })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        orderData();
    }, []);
    return (
      <Container style={{marginTop:'3rem'}}>
    <Card style={{width:'30rem' ,marginRight:'4rem',marginLeft:'20rem',marginBottom:'3rem'}}>
    <Card.Header><h4>RESTAURANT</h4></Card.Header>

      <Card.Body>

  <ListGroup className="list-group-flush">
    <ListGroupItem ><strong>Name: </strong> {order.restaurantName}</ListGroupItem>
    <ListGroupItem ><strong>Street: </strong> {order.restaurantStreet}</ListGroupItem>
      <ListGroupItem ><strong>City: </strong> {order.restaurantCity}</ListGroupItem>
        <ListGroupItem ><strong>Zipcode: </strong> {order.restaurantZipcode}</ListGroupItem>
  </ListGroup>
      </Card.Body>
    </Card>
    <Card style={{marginBottom:'3rem'}}>
    <Card.Header><h4>ITEMS OF THE ORDER</h4></Card.Header>
    <Card.Body>
    <Table striped bordered hover>
    <thead>
    <tr>
    <th>Name</th>
    <th>Category</th>
    <th>Price</th>
    <th>Currency</th>
    <th>Tax %</th>
    <th>Quantity</th>
    </tr>
    </thead>
    <tbody>
    {order.items.map((item, index) => {
    totalItem = item.quantity + totalItem;
    totalPriceQty = item.price * item.quantity + totalPriceQty;
    tax = item.tax_pct/100 * totalPriceQty;
    totalBill = totalPriceQty + tax;
    return (
    <tr key={index}>
    <td>{item.name}</td>
    <td>{item.category}</td>
    <td>{item.price}</td>
    <td>{item.currency}</td>
    <td>{item.tax_pct}%</td>
    <td>{item.quantity}</td>
    </tr>
    )
    })}
    </tbody>
    </Table>
    </Card.Body>
    <ul>
    <li>Total Items: {totalItem}</li>
    <li>Total Tax: {tax}</li>
    <li>Total Bill: {totalBill}</li>
    </ul>
    </Card>
  </Container>

    )
}

export default OrderPage;
