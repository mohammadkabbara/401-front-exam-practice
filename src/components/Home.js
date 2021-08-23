import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const server = process.env.Server_URL;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDrink: [],
    };
  }

  //////////////

  componentDidMount = async (req, res) => {
    const { user } = this.props.auth0;
    await axios
      .get(`${process.env.REACT_APP_SERVER}/drinks?email=${user.email}`)
      .then((response) => {
        this.setState({
          arrDrink: response.data,
        });
      });
  };
  ////////////

  addToFavorite(item) {
    const { user } = this.props.auth0;
    const reqbody = {
      name: item.strDrink,
      img_path: item.strDrinkThumb,
      email: user.email,
    };
    axios.post(`${process.env.REACT_APP_SERVER}/favorite`, reqbody);
    console.log(reqbody);
  }
  /////////////////////

  render() {
    return (
      <div>
        {this.state.arrDrink.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`${item.strDrinkThumb}`} />
              <Card.Body>
                <Card.Title>{`${item.strDrink}`}</Card.Title>

                <Button
                  variant="primary"
                  onClick={() => this.addToFavorite(item)}
                >
                  Add to Favorite
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default withAuth0(Home);
