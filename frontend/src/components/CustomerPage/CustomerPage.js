import {useContext , useState ,useEffect} from 'react';
import User from "../../images/user.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container,ListGroup,ListGroupItem} from 'react-bootstrap'
import axios from 'axios'
import './CustomerPage.css'
const CustomerPage = () => {
  const[profile,setProfile]= useState(
    {
    profileName:"",
    profileAddress:"",
    profilePhone:"",
    profileAbout:"",
    profileLike:[],
    profileDislike:[]

  });
  const profileData = async () => {
  try {
  const res = await axios.get("https://ordercustomeruser.herokuapp.com/api/customer");
  console.log( res.data);
  console.log(res.data.data.name)
  setProfile({
  profileName: res.data.data.name,
  profileAddress: res.data.data.address,
  profilePhone: res.data.data.phone,
  profileAbout: res.data.data.about,
  profileLike: res.data.data.likes.map((like, index) => <li key={index}>{like}</li>),
  profileDislike: res.data.data.dislikes.map((dislike, index) => <li key={index}>{dislike}</li>)
  })
  } catch (error) {
    console.log(error);
    }};
   useEffect(() =>{
     profileData();
   },[]);
    return (
      <div className="App">
<Container>
<Card style={{ marginTop:'10px',marginLeft:'15rem',width: '40rem' }}>
  <Card.Img variant="top"style={{width:"50%",marginLeft:'10rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsWGsiGUXzgug60XJ2YDaTGPSK5bIuPzz3BfJdKmtlnbYvtMDUEndyCQmAWcnbsVLNwU&usqp=CAU" />
  <Card.Body>
    <Card.Title>{profile.profileName}</Card.Title>
    <Card.Text>
      This will display the details of the customer his likes and dislikes
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name: {profile.profileName}</ListGroupItem>
    <ListGroupItem>Address: {profile.profileAddress}</ListGroupItem>
    <ListGroupItem>Phone Number: {profile.profilePhone}</ListGroupItem>
    <ListGroupItem>About: {profile.profileAbout}</ListGroupItem>



  </ListGroup>
  <ListGroup horizontal>
  <ListGroupItem style={{display:'flex' ,justifyContent:'center',width:'350px'}}>Likes:   <ul>{profile.profileLike}</ul></ListGroupItem>
  <ListGroupItem style={{display:'flex' ,justifyContent:'center',width:'350px'}}>Dislikes:   <ul>{profile.profileDislike}</ul></ListGroupItem>
</ListGroup>

</Card>
</Container>
</div>
    )
}

export default CustomerPage;
