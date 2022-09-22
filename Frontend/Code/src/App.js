import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
//import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error'
//import Help from './components/Help'
import Contact from './components/Contact'
import About from './components/About'
import { Routes } from 'react-router-dom'
import TrainList from './components1/TrainList'
import { useState } from 'react'
//import Pagination from './components/Pagination'
import All_Trains from './components/All_Trains'
//import Modal from './components/Modal'
import Profile from './components1/Profile'
import UserLogin from './components1/UserLogin'
import AddBooking from './components1/AddBooking'
import Bookinglist from './components1/Bookinglist'
import Addticket from './components1/AddTicket'
import Fullticket from './components1/FullTicket'
import Trainlist1 from './components1/TrainList1'
import AddTrain from './components1/AddTrain'
//import Modal from './components/Modal'
import Adminlogin from './components1/Adminlogin'
import UserList from './components1/UserList'
import { Logout } from './components1/LogOut'
import Bookingbyemail from './components1/Bookingbyemail'
import SignUp1 from './components/SignUp1'
import Adminprofile from './components1/Adminprofile'
import TrainDetails from "./components1/TrainDetails";
//import Pagination1 from './components1/Pagination1'


const App = () => {
  const [train, setTrains] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = train.slice(firstPostIndex, lastPostIndex);
  return (
    <Router>
      <Header />

      {/* <Switch>
        <Route exact path="/">
          <Showcase />
          <Destinations />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Train">
          <Train />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch> */}
      <Routes>
        {/* Land-Page Home, About */}
        <Route path="/" element={<Showcase />} />
        <Route path="/" element={<Destinations />} />
        <Route path="/aboutus" element={<About />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/edit/:id" element={<SignUp1 />} />
        {/* <Route path="/help" element={<Help />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/Train" element={<TrainList train={currentPosts} />} />
        {/* <Route path="/Modal" element={<Modal />} /> */}
        {/* <CryptoList coinsData={currentPosts} /> */}
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<UserLogin />} />
        <Route path="/Booking" element={<Bookinglist />} />
        <Route path="/AddBooking" element={<AddBooking />} />
        <Route path="/booking/edit/:id" element={<AddBooking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Booking" element={<Bookinglist />} />
        <Route path="/Addticket" element={<Addticket />} />
        <Route path="/fullticket" element={<Fullticket />} />
        <Route path="/addtrain" element={<AddTrain />} />
        <Route path="/traindetails" element={<TrainDetails />} />
        <Route path="/trainlist/edit/:id" element={<AddTrain />} />
        <Route path="/trainlist1" element={<Trainlist1 />} />
        {/* <Route path="/Modal" element={<Modal />} /> */}
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/Train" element={<TrainList />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Bookingbyemail" element={<Bookingbyemail />} />
        <Route path="/adminprofile" element={<Adminprofile />} />
        <Route
          path="/trainlist/edit/:trains.train_no"
          element={<Trainlist1 />}
        />
      </Routes>
    </Router>
  );
};


export default App
