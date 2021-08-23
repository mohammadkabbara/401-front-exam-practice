import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';
import { withAuth0 } from "@auth0/auth0-react";

export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrFav: [],
            show: false,
            email: this.props.auth0.user.email,

        }
    }

    ////////////////

    componentDidMount = async (req, res) => {
       // console.log(this.state.email)
       
        await axios.get(`http://localhost:3030/favorite?email=${this.state.email}`).then(response => {
            this.setState({
                arrFav: response.data
            })
            

        })
       

    };
////////////////////
    deleteFromFavorite = async (index) => {
 
    const { user } = this.props.auth0;

        await axios.delete(`http://localhost:3030/favorite/${index}?email=${user.email}`).then(response => {
            this.setState({
                arrFav: response.data
            })
        })
        console.log(index)
    }
////////////////////////////
    handleShow() {
        this.setState({
            show: true
        })
    }

    handleClose() {
        this.setState({
            show: false
        })
    }
    /////////////////////////////////
    updatedData = async (e) => {
        

        e.preventDefault()
        let updateopj = {
          email: this.props.auth0.email,
          name: e.target.name.value,
          img_path: e.target.img_path.value,
    
        }
        
        // http://localhost:3008/update/index
    
        let response = await axios.put(`http://localhost:3030/favorite/${this.state.index}?email=${this.props.auth0.email}`, updateopj
        )
        await this.setState({
            arrFav: response.data
        })
    
      }
    render() {

        return (
            <div>
                {
                    this.state.arrFav.map((item, index) => {
                        return (
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={`${item.img_path}`} alt="" />
                                <Card.Body>
                                    <Card.Title>{`${item.name}`}</Card.Title>

                                    <Button variant="primary" onClick={() => this.deleteFromFavorite(index)} >Delete</Button>

                                    <Button variant="primary" onClick={() => this.handleShow(index)} >Update</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                {
                    <UpdateForm 
                    handleShow={this.handleShow}  handleClose={this.handleClose}  img_path={this.state.img_path} name={this.state.name} show={this.state.show} updatedData={this.updatedData} index={this.state.index} />


                }
            </div>
        )
    }
}

export default withAuth0(Favorite);
