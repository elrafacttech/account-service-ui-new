import Dashboard from "./components/dashboard/Dashboard";
import Notifications from "./components/notifications/Notifications";
import Profile from "./components/profile/Profile";
import Tables from "./components/tables/Tables";
import OrganisationDetails from "./components/organisation details/Organisation Details";
import Sales from "./components/sales/Sales";
import Purchase from "./components/purchase/Purchase";
import Accounts from "./components/accounts/Accounts";
import Receipt from "./components/receipt/Receipt";
import Payment from "./components/payment/Payment";
import Income from "./components/income statement/Income Statement";
import ProductService from "./components/product&service/Product&Service";
import AddSales from "./components/sales/AddSales";
import AddReceipt from "./components/receipt/AddReceipt";
import AddPurchase from "./components/purchase/AddPurchase";
import AddPayment from "./components/payment/AddPayment";
import AddProductService from "./components/product&service/AddProduct&Service";
import Homepages from "./pages/Homepages"
import Login from "./pages/Login"
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { NavbarContext } from "./context/NavbarContext";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  console.log("kkkkkkkk", showSidebar);

  return (
    <>
      <NavbarContext.Provider value={{ showSidebar, setShowSidebar }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/table' element={<Tables />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/income" element={<Income />} />
          <Route path="/productservice" element={<ProductService />} />
          <Route path="/organisationdetails" element={<OrganisationDetails />} />
          <Route path="/addsales" element={<AddSales />} />
          <Route path="/addpurchase" element={<AddPurchase />} />
          <Route path="/addreceipt" element={<AddReceipt />} />
          <Route path="/addpayment" element={<AddPayment />} />
          <Route path="/addproductservice" element={<AddProductService />} />
        </Routes>
      </NavbarContext.Provider>

    </>
  )
}

export default App
