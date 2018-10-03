import { Directive, ElementRef, HostListener, Input } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[customScroller]'
})
export class ScrollerDirective {

    @Input('customScroller') customScroller: any;
    @Input('scrollDuration') scrollDuration: number;
    @Input('condition') condition: any;

    constructor(private myElement: ElementRef) {}
    @HostListener('click') clicking() {
        try {
            const ele = document.getElementById(this.customScroller);
            const body = $('html,body') ; // $('.main-panel');
            if (this.scrollDuration === undefined || this.scrollDuration === null) {
               body.animate({scrollTop: $('#' + this.customScroller).offset().top }, 800, 'swing');
            } else {
                if (this.condition === undefined || this.condition === null) {
                    setTimeout(() => {
                        body.animate({scrollTop: $('#' + this.customScroller).offset().top }, 800, 'swing')}, this.scrollDuration )
                } else {
                    body.animate({scrollTop: $('#' + this.customScroller).offset().top }, 800, 'swing');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

}
