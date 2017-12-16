import { Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
    selector:'[mybutton]'
})

export class MyButtonDirective{
    constructor(private el:ElementRef){}
    
    @Input('mybutton') percent: any;

    @HostListener('click') onclick(){
        this.checkPercent();
    }
    
    checkPercent(){
        if(this.percent > .80 && this.percent){
            this.changeColor('green');
        }
        else{
            this.changeColor('blue');
        }
    }

    changeColor(color: string){
        
        this.el.nativeElement.style.background = color;
    }

}