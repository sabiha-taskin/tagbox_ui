import { Component, ViewChild, OnInit, NgZone} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs';
declare var $: any;
let browser;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  subscription: any;
  public isOnline: boolean = navigator.onLine;
  public isChrome: boolean;


  checkInternet() {
    this.subscription = interval(70 * 60).subscribe(x => {
      if (this.isOnline !== navigator.onLine) {
        this.isOnline = navigator.onLine;
      }
    });
  }

  nonChrome() {
    browser = this.get_browser_info();
    if (browser.name.toLowerCase() !== 'chrome') {
        // console.log('if' + browser.name);
        this.isChrome = false;
        // window.location.href = 'www.google.com';
    } else {
        this.isChrome = true;
        // console.log('else' + browser.name);
    }

  }
  ngOnInit() {

    this.nonChrome()
    this.checkInternet();
  }


  constructor(public router: Router, private titleService: Title, private ngZone: NgZone) {
    router.events.subscribe((event) => {
      $('body').removeClass('open');
      $('navbar-cmp').show();
      $('.wrapper .main-panel.colorChng').removeClass('colorChng');
      window.onresize = (e) => {
        this.nonChrome();
        $('navbar-cmp').show();
        $('.wrapper .main-panel.colorChng').removeClass('colorChng');
        };
      if (router.url.length > 2) {
        const name = router.url.replace('/', '');
        const new_name = name.replace('-', ' ');
        // if (router.url.includes('tagbox')) {
        //   $('body').addClass('defaultWhite');
        //   $('.content').addClass('defaultWhite');
        // } else {
        //   $('body').addClass('defaultWhite');
        //   $('.content').removeClass('defaultWhite');
        // }
        this.titleService.setTitle(this.titleCase(new_name));
      }
      window.scroll(0, 0);
   });
  //  window.onresize = (e) => {
  //      ngZone.run(() => {
  //          console.log(window.innerWidth);
  //          console.log(window.innerHeight);
  //          if (window.innerWidth <= 480) {
  //           this.router.navigate(['/']);
  //         }
  //      });
  //  };

  }

  titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  get_browser_info() {
    const ua = navigator.userAgent;
    let tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name: 'IE '};
        }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null)   {return {name: 'Opera'}; }
        }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {M.splice(1, 1, tem[1]); }
    return {  name: M[0] };
 }


}
