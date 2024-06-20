import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { ModalService } from '@shared/services/modal.service';

@Component({
  selector: 'nggt-dev-guide-form',
  templateUrl: './dev-guide-form.component.html',
  styleUrls: ['./dev-guide-form.component.scss']
})
export class DevGuideFormComponent extends ComponentBase implements FormBase {

  userForm!: FormGroup;

  constructor(
    private modalService: ModalService
  ) {
    super();
  }

  /* Public Methods */
  initVariables(): void { }

  subscribeEvents(): void { }

  load(): void {
    this.buildForm();
  }

  unload(): void { }

  buildForm(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required])
    });
  }

  bindForm(): void { }

  resetForm(): void {
    this.userForm.reset();
  }

  submit(): void {
    if (this.userForm.valid) {

    }
    else {
      this.modalService.showValidationSheet(this.userForm, {
        firstName: {
          required: 'First Name is required.'
        },
        lastName: {
          required: 'Last Name is required.'
        },
      });
    }
  }
}