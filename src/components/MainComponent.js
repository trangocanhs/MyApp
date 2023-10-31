import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './AboutComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[1]}
          />
      );
    }
    
    const DishWithId = ({match}) => {
      const {dishId} = useParams();
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    
    const mapStateToProps = state => {
      return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
      }
    }
    
    return (
      <div>
        <Header />
        <Routes>
            <Route path='/home' Component={HomePage} />
            <Route exact path='/menu' element={<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
            <Route to="/home" element={<Navigate to="/menu" />}/>
            <Route exact path='/contactus' Component={Contact} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/aboutus' Component={About}/>
        </Routes>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotion: state.promotion,
    leaders: state.leaders
  }
}
export default (connect(mapStateToProps)(Main));