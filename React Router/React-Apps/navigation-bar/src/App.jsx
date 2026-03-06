import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { useSearchParams } from "react-router-dom";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams
  return (
    <>
      
    </>
  );
}