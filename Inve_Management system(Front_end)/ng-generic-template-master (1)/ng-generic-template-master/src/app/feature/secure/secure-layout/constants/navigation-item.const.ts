import { NavigationItem } from "../models";

export const NavigationItems: NavigationItem[] = [
    // {
    //     text: 'Dashboard',
    //     url: 'dashboard'
    // },
    // {
    //     text: 'Dev Guide',
    //     url: 'dev-guide'
    // },
  
    {
        text: 'Categories',
        url: '/category',
        AllowedRole:['Admin','Inventory Manager'],
        icon:"pi pi-list" 
    },
    {
        text: 'Employees',
        url:'/employee',
        AllowedRole:['Admin'],
        icon:"pi pi-user" 
    },
    {
        text: 'Suppliers',
        url: '/supplier',
        AllowedRole:['Admin','Inventory Manager','Sales Manager'],
        icon:"pi pi-user" 
    },
    {
        text: 'Customers',
        url: '/customer',
        AllowedRole:['Admin','Inventory Manager','Sales Manager'],
        icon:"pi pi-user" 
    },
    {
        text:'Orders',
        url:'/order',
        AllowedRole:['Admin','Inventory Manager','Sales Manager'],
        icon:"pi pi-shopping-cart" 
    },
    {
        text:'Invoice',
        url:'/invoice',
        AllowedRole:['Admin','Inventory Manager','Sales Manager'],
        icon:"pi pi-receipt" 
    },
    {
        text:'Report',
        url:'/report',
        AllowedRole:['Admin'],
        icon:"pi pi-book" 
    },
    {
        text: 'Roles',
        url: 'designation',
        AllowedRole:['Admin'],
        icon:"pi pi-user" 
    }
];