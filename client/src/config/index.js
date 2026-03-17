import { Component } from "lucide-react";

export const registerFormControls = [
    {
        name: "username",
        label: "User Name",
        placeholder: "Name",
        type: "text",
        componentType:"input",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Email",
        type: "email",
        componentType:"input",
        
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Password",
        componentType:"input",
        type: "password",
        
    },
]

export const loginFormControls = [
    {
        name: "email",
        label: "Email",
        placeholder: "Email",
        type: "email",
        componentType:"input",
        
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Password",
        componentType:"input",
        type: "password",
        
    },
]

export const addProductFormElements = [
  {
    name: "image",
    label: "Product Image",
    componentType: "file",
    type: "file",
  },
  {
    name: "title",
    label: "Title",
    placeholder: "Enter product title",
    componentType: "input",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter product description",
    componentType: "textarea",
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
    ],
  },
  {
    name: "brand",
    label: "Brand",
    placeholder: "Enter brand name",
    componentType: "input",
    type: "text",
  },
  {
    name: "price",
    label: "Price",
    placeholder: "Enter price",
    componentType: "input",
    type: "number",
  },
  {
    name: "salePrice",
    label: "Sale Price",
    placeholder: "Enter sale price",
    componentType: "input",
    type: "number",
  },
  {
    name: "totalStock",
    label: "Total Stock",
    placeholder: "Enter stock",
    componentType: "input",
    type: "number",
  },
  {
    name: "averageReview",
    label: "Average Review",
    placeholder: "Enter average rating (e.g. 4.5)",
    componentType: "input",
    type: "number",
  },
];