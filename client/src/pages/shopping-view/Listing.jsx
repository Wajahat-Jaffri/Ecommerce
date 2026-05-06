

import React, { useEffect, useState } from "react";
import ProductFilter from "@/components/shopping-view/Filter";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts, fetchProductDetails } from "@/store/shop/index";
import { addToCart, fetchCartItems } from "@/store/cart-slice/index";
import ShoppingProductTile from "../../components/shopping-view/ProductTile";
import ProductDetailsDialog from "@/components/shopping-view/ProductDetails";
import { toast } from "sonner";
import { ArrowUpDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

const ShoppingListing = () => {
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);
  
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  function handleAddtoCart(getCurrentProductId) {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    dispatch(
      addToCart({
        userId: user?.id || user?._id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        // Yeh line cart ko foran refresh karegi
        dispatch(fetchCartItems(user?.id || user?._id));
        toast.success("Added to cart", {
          style: { backgroundColor: "#be185d", color: "#fff" }
        });
      }
    });
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  // --- Filter & Sort Logic ---
  useEffect(() => {
    const storedFilters = JSON.parse(sessionStorage.getItem("filters")) || {};
    setFilters(storedFilters);
  }, []);

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const query = Object.keys(filters).map(key => `${key}=${filters[key].join(",")}`).join("&");
      setSearchParams(new URLSearchParams(query));
    }
  }, [filters]);

  useEffect(() => {
    dispatch(fetchAllFilteredProducts({ filtersParams: filters, sortParams: sort }));
  }, [dispatch, filters, sort]);

  useEffect(() => {
    if (productDetails) setOpen(true);
  }, [productDetails]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter filters={filters} handleFilter={(s, o) => {
         let cpy = {...filters};
         if(!cpy[s]) cpy[s] = [o];
         else {
            const idx = cpy[s].indexOf(o);
            if(idx === -1) cpy[s].push(o);
            else cpy[s].splice(idx, 1);
         }
         setFilters(cpy);
         sessionStorage.setItem("filters", JSON.stringify(cpy));
      }} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <span className="text-sm text-muted-foreground">{productList?.length} Products</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {productList?.map((item) => (
            <ShoppingProductTile 
              key={item._id} 
              product={item} 
              handleGetProductDetails={handleGetProductDetails}
              handleAddtoCart={handleAddtoCart}
            />
          ))}
        </div>
      </div>
      <ProductDetailsDialog open={open} setOpen={setOpen} productDetails={productDetails} handleAddtoCart={handleAddtoCart} />
    </div>
  );
};

export default ShoppingListing;