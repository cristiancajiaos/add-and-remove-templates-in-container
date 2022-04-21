import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild("tpl", { read: TemplateRef }) tpl: TemplateRef<any>;

  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.vc.createEmbeddedView(this.tpl);
    this.vc.createEmbeddedView(this.tpl);
    this.vc.createEmbeddedView(this.tpl);
  }
}
