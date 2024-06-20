import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
    {
        path: '',
        component: SecureComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'designation',
                loadChildren: () => import('./Designation/designations.module').then(m => m.DesignationsModule)
            },
            {
                path:'category',
                loadChildren: () => import('./Category/categories.module').then(m=>m.CategoriesModule)
            },
            {
                path: 'dev-guide',
                loadChildren: () => import('./dev-guide/dev-guide.module').then(m => m.DevGuideModule)
            },
            {
                path:'employee',
                loadChildren: () => import('./Employee/employees.module').then(m=>m.EmployeesModule)

            },
            {
                path: 'supplier',
                loadChildren: () => import('./Supplier/suppliers.module').then(m=>m.SuppliersModule)
            },
            {
                path: 'customer',
                loadChildren: () => import('./Customer/customer.module').then(m=>m.CustomerModule)
            },
            {
                path: 'order',
                loadChildren: () => import('./order/order.module').then(m=>m.OrderModule)
            },
            {
                path: 'invoice',
                loadChildren: () => import('./Invoice/invoice.module').then(m=>m.InvoiceModule)
            },
            {
                path: 'report',
                loadChildren: () => import('./Daily-report/report.module').then(m=>m.ReportModule)
            
            },
            {
                path: '**',
                redirectTo: 'auth/login', pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecureRoutingModule { }
