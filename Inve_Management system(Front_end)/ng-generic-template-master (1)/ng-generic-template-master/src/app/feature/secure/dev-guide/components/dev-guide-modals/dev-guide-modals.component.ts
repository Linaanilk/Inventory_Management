import { Component } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { ModalService } from '@shared/services/modal.service';

@Component({
  selector: 'nggt-dev-guide-modals',
  templateUrl: './dev-guide-modals.component.html',
  styleUrls: ['./dev-guide-modals.component.scss']
})
export class DevGuideModalsComponent extends ComponentBase {

  constructor(
    private modalService: ModalService
  ) {
    super();
  }

  initVariables(): void { }

  subscribeEvents(): void { }

  load(): void { }

  unload(): void { }

  showMessage(): void {
    this.modalService.showMessage('Success', '');
  }

  confirm(): void {
    this.modalService.confirm({
      question: 'Are you sure?',
      confirmBtnText: 'Yes',
      cancelBtnText: 'No'
    })
      .subscribe((confirmed: boolean) => {

      });
  }

  showNotification(): void {
    this.modalService.showNotification('Notification');
  }
}
