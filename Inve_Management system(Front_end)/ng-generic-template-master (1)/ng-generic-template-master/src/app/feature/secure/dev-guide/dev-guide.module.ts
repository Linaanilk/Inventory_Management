import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';
import { DevGuideFormComponent } from './components/dev-guide-form/dev-guide-form.component';
import { DevGuideModalsComponent } from './components/dev-guide-modals/dev-guide-modals.component';
import { DevGuideSkeletonsComponent } from './components/dev-guide-skeletons/dev-guide-skeletons.component';
import { DevGuideRoutingModule } from './dev-guide-routing.module';
import { DevGuideComponent } from './dev-guide.component';
import { DevGuidePackagesComponent } from './components/dev-guide-packages/dev-guide-packages.component';

@NgModule({
  declarations: [
    DevGuideComponent,
    DevGuideModalsComponent,
    DevGuideFormComponent,
    DevGuideSkeletonsComponent,
    DevGuidePackagesComponent
  ],
  imports: [
    SharedModule,
    DevGuideRoutingModule,
    SecureSharedModule
  ]
})
export class DevGuideModule { }
