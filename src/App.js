import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddService from './components/AddService/AddService';
import NotFound from './components/NotFound/NotFound';
import BookRoom from './components/BookRoom/BookRoom';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
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
         <Route path="/addnewservice">
          <AddService></AddService>
         </Route>
         <Route path="/bookroom/:id">
          <BookRoom></BookRoom>
         </Route>
         <Route path="*">
          <NotFound></NotFound>
         </Route>

       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
  );
}

export default App;
