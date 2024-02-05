import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Orders from './pages/Orders';
import Books from './pages/Books';
import Customers from './pages/Customers';
import Home from './pages/Home';
import BookRoutes from './pages/BookRoutes';
import Book from './pages/Book';
import CreateBook from './pages/AddBook';
import AddBook from './pages/AddBook';
import Customer from './pages/Customer'
import CustomerRoutes from './pages/CustomerRoutes'
import AddCustomer from './pages/AddCustomer';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Home />
        </>
        <Routes>
          <Route
            path='/orders'
            element={
              <Orders />
            }
          />

          <Route
            path='books'
            element={
              <BookRoutes />
            }
          >
            <Route index path='' element={<Books />} />
            <Route path=':id' element={<Book />} />
            <Route path='add-book' element={<AddBook />} />
          </Route>



          <Route
            path='customers'
            element={
              <CustomerRoutes />
            }
          >
            <Route index path='' element={<Customers />} />
            <Route path=':id' element={<Customer />} />
            <Route path='add-customer' element={<AddCustomer />} />
          </Route>


          {/* <Route
            path='/customers'
            element={
              <Customers />
            }
          /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
