import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationsModule } from './designations.module';
import { DesignationsComponent } from './container/designations/designations.component';
import { DesignationsAddComponent } from './container/designations-add/designations-add.component';
import { DesignationsUpdateComponent } from './container/designations-update/designations-update.component';
import { AuthorizationGuard } from '@core/guards/authorization.guard';
import { AuthenticationGuard } from '@core/guards/authentication.guard';


const routes: Routes = [{ path : '', component: DesignationsComponent,canActivate:[AuthorizationGuard,AuthenticationGuard]},
{ path : 'designations/add', component: DesignationsAddComponent,canActivate:[AuthorizationGuard,AuthenticationGuard]},
{path: 'designations/edit/:id', component: DesignationsUpdateComponent, canActivate:[AuthorizationGuard,AuthenticationGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationsRoutingModule { }
