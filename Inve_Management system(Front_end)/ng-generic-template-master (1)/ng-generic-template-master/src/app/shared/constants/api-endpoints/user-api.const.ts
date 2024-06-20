import { environment } from "src/environments/environment";

export const UserAPI = {
    authenticateUser(data:any): string {
        console.log('hi')
        return `${environment.apiBaseUrl}/api/Login?email=`+data.username+`&password=`+data.password;
    },
    designations(): string {
        return `${environment.apiBaseUrl}/api/Designation/GetAllDesignations`;
    },
    designationsAdd(): string {
        return `${environment.apiBaseUrl}/api/Designation/post`;
    },
    designationsId(id:number): string{

        return `${environment.apiBaseUrl}/api/Designation/GetByIdDesignation/${id}`;
    },
    designationsUpdate(): string {
        return `${environment.apiBaseUrl}/api/Designation/put`;
    },

    categories(): string {
        return `${environment.apiBaseUrl}/api/Category/AllCategories`;
    },
    categoriesId(id:number): string{
        return `${environment.apiBaseUrl}/api/Category/GetCategoryById/${id}`;
    },
    getproducts(id:number): string {
        return `${environment.apiBaseUrl}/api/Product/categories/${id}`;
    },
    categoriesAdd(): string {
        return `${environment.apiBaseUrl}/api/Category/post`;
    },
    categoriesUpdate(): string {
        return `${environment.apiBaseUrl}/api/Category/put`;
    },
    productsId(id: number): string{
        return `${environment.apiBaseUrl}/api/Product/GetProductById/${id}`;
    },
    addproducts(): string{
        return `${environment.apiBaseUrl}/api/Product/post`;
    },
    deleteproduct(id:number): string{
        return `${environment.apiBaseUrl}/api/Product/${id}`;
    },
    updateproducts(): string{
        return`${environment.apiBaseUrl}/api/Product/post`;
    },
    getEmployees(): string{
        return `${environment.apiBaseUrl}/api/Employee/GetAllEmployees`;
    },
    getEmployeesById(id:number): string{
        return `${environment.apiBaseUrl}/api/Employee/GetEmployeeById/${id}`;
    },
    updateEmployee(id:number): string{
        console.log('hinbfd')
        console.log('ji:',id);
        return `${environment.apiBaseUrl}/api/Employee/put/${id}`;
    },
    addEmployees(): string{
        return `${environment.apiBaseUrl}/api/Employee/post`;
    },
    deleteEmployee(id:number): string{
        return `${environment.apiBaseUrl}/api/Employee/EmployeeDelete/${id}`;
    },
    getSuppliers(): string{
        return `${environment.apiBaseUrl}/api/Supplier/GetAllSuppliers`;
    },
    addSuppliers(): string{
        return `${environment.apiBaseUrl}/api/Supplier/post`;
    },
    getEmployeeById(id:number): string{
        return `${environment.apiBaseUrl}/api/supplier/supplierGet/${id}`;
    },
    updateSuppliers(): string{
        return `${environment.apiBaseUrl}/api/Supplier/post`;
    },
    deleteSuppliers(id:number): string{
        return `${environment.apiBaseUrl}/api/Supplier/DeleteSuppliers/${id}`;
    },
    getCustomers(): string{
        return `${environment.apiBaseUrl}/api/Customer/GetAllCustomers`;
    },
    addShops(): string{
        return `${environment.apiBaseUrl}/api/Customer/post`;
    },
    updateShops(): string{
        return `${environment.apiBaseUrl}/api/Customer/put`;
    },
    getShopsById(id: number): string{
        return `${environment.apiBaseUrl}/api/Customer/GetUserById/${id}`;
    },
    deleteShops(id:number): string{
        return `${environment.apiBaseUrl}/api/Customer/updateUsers/${id}`;
    },
    getOrders(): string{
        return `${environment.apiBaseUrl}/api/Order/GetAllOrders`;
    },
    addOrders(): string{
        return `${environment.apiBaseUrl}/api/Order`;
    },
    ordersEdit(id:number): string{
        return `${environment.apiBaseUrl}/api/Order/OrderId/${id}`;
    },
    updateOrders(): string{
        
        return `${environment.apiBaseUrl}/api/Order/update`;
    },
    GetProductByName(name:string): string{
        return `${environment.apiBaseUrl}/api/Product/${name}`;
    },
    getInvoices(): string{
        return `${environment.apiBaseUrl}/api/Invoice/GetAllInvoices`;
    },
    addInvoice(): string{
        return `${environment.apiBaseUrl}/api/Invoice/post`;
    },
    getuserDetails(id:number,date:Date): string{
        //console.log('got it')
        return `${environment.apiBaseUrl}/api/Order/UserId/${id}/${date}`;
    },
    getInvoiceById(id:number): string{
        return `${environment.apiBaseUrl}/api/Invoice/InvoiceId/${id}`;
    },
    GetTotalProductQuantity(): string{
        return `${environment.apiBaseUrl}/api/Product/GetTotalProductQuantity`;
    },
    GetOutOfStockProduct(): string{
        return `${environment.apiBaseUrl}/api/Product/GetOutOfStock`;
    },
    GetCategories(): string{
        return `${environment.apiBaseUrl}/api/Category`;
    },
    getProductCountFromCategory(id:number): string{
        return `${environment.apiBaseUrl}/api/Category/GetProductCountFromCategories/${id}`
    },
    getEmployeeByName(name: string): string{
        return `${environment.apiBaseUrl}/api/Employee/EmployeeName/${name}`
    },
    getCustomersByName(name:string): string{
        return `${environment.apiBaseUrl}/api/Customer/userGetByName/${name}`
    },
    getSuppliersByName(name:string): string{
        return `${environment.apiBaseUrl}/api/Supplier/supliername/${name}`
    },
    getProductQtyFromCategory(): string{
        return `${environment.apiBaseUrl}/api/Category/ByProductQty`
    },
    getEveryProductById(id:number):string{
        return `${environment.apiBaseUrl}/api/Product/GetEveryProductsById/${id}`
    },
    changeEmployeePassword(): string
    {
        return `${environment.apiBaseUrl}/api/Employee/PasswordChange`;
    },
    GetAllProducts(): string{
        return `${environment.apiBaseUrl}/api/Product/GetAllProducts`;
    }
}