

import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { NgbModal, NgbActiveModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { RandomInt } from '../common/index';

@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
  <h4 class="modal-title text-capitalize">color click</h4>
  <button tabindex="0" type="button" class="close" aria-label="Close" (click)="modalService.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <p class="text-capitalize">change {{color.name}} to random color that already exist in this table</p>
</div>
<div class="modal-footer">
    <button tabindex="0" type="button" class="btn btn-outline-primary text-capitalize" 
      aria-label="Save" (click)="modalService.close('Save click')">&radic; random</button>
    <button tabindex="0" type="button" class="btn btn-outline-dark text-capitalize" 
      aria-label="Close" (click)="modalService.dismiss('Close click')">close</button>
</div>
  `
})
export class NgbdModalContent {
  @Input() color: Color;

  constructor(public modalService: NgbActiveModal) {  }
}

export class Color {
  constructor(parameters?: Partial<Color>) {
    Object.assign(this, parameters);
  }

  id: number;
  name: string;
  color: string;

}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  
  ngOnInit() {
    (window as any).cmp = this;
  }
  
  colors: Color[] = [
    {id: 1, name: 'Red', color: 'red'},
    {id: 2, name: 'Blue', color: 'blue'},
    {id: 3, name: 'White', color: 'white'},
    {id: 4, name: 'Green', color: 'green'},
    {id: 5, name: 'Yellow', color: 'yellow'},
  ];
  
  logs: string[] = [];

  options: NgbModalOptions = { ariaLabelledBy: 'modal-confirm', size: 'sm' };

  @ViewChild('modalTemplate')
	modalTemplate: any;

  newColor: Color = new Color();
  colorName: string = 'some';
  async openAddModal() {
    const modalRef: NgbModalRef = this.modalService.open(this.modalTemplate, this.options);
    let isChange = await this.registerModal(modalRef);
    console.log('openAddModal', {isChange, color: this.newColor});
    if (isChange) {
      let ids: number[] = this.colors.map(color => color.id);
      let id: number = Math.max(...ids) + 1;
      this.colors.push(Object.assign({id: id}, this.newColor));
      this.logs.push(`New Color ${this.newColor.color}`);
    }
  }

  
  public get isSaveDisabled() : boolean {
    let isValid: boolean = (this.newColor.color != undefined && this.newColor.color != '') 
    && (this.newColor.name != undefined && this.newColor.name != '');
    return !isValid;
  }

  async openRandomModal(color: Color, itemIndex: number) {
    //const modalRef: NgbModalRef = this.modalService.open(this.modalTemplate, this.options);
    const modalRef: NgbModalRef = this.modalService.open(NgbdModalContent, this.options);
    modalRef.componentInstance.color = color;
    let isChange = await this.registerModal(modalRef);
    console.log('openRandomModal', isChange);
    if (isChange) {
      const randomInt = RandomInt(0, this.colors.length - 1);
      const colorToAssign = this.colors[randomInt];
      const newColor = Object.assign({}, colorToAssign, {id: color.id});
      console.log('isChange', {randomInt, colorToAssign, newColor});
      this.colors.splice(itemIndex, 1, newColor);
      this.logs.push(`Update ${color.id} to ${colorToAssign.color}`);
    }
    
  }
    
  registerModal(modalRef: NgbModalRef): Promise<boolean> {
    return new Promise<boolean>((res, rej) => {
      modalRef.result.then((result) => {
        //this.closeResult = `Closed with: ${result}`;
        //console.log('result', this.closeResult);
        res(true);
        
      }, (reason) => {
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        //console.log('reason', this.closeResult);
        res(false);
      });
    });
  }
  
}


//export const apiModules = [ ApiTestComponent ];
