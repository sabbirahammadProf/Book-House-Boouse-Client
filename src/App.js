import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';

function App() {
  return (
    <>
     <Router>
       <Header></Header>
       <Switch>

         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/login">
          <Login></Login>
         </Route>
         <Route path="/signup">
          <Signup></Signup>
         </Route>
         <Route path="/myorders">
          <MyOrders></MyOrders>
         </Route>
         <Route path="/manageorders">
          <ManageOrders></ManageOrders>
         </Route>

       </Switch>
       <Footer></Footer>
     </Router>
    </>
  );
}

export default App;
