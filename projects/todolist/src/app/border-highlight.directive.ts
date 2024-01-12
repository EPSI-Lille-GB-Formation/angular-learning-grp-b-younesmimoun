import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[border-highlight]',
  standalone: true
})
export class BorderHighlightDirective {


  @HostBinding('style.borderSize')
  defaultBorderSize = "3px";

  @HostBinding('style.borderColor')
  defaultBorderColor = "transparent";

  @HostBinding('style.borderStyle')
  defaultBorderStyle = 'solid'
  constructor() { }

  ngOnInit(){

  }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.defaultBorderColor = "blue"
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.defaultBorderColor = "transparent"
  }
}
