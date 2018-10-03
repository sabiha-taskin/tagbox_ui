import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserLoginService } from '../../services/user-login.service';
import { LoggedInCallback, CognitoUtil } from '../../services/cognito.service';
import { environment } from '../../../environments/environment';
import * as screenfull from 'screenfull';
declare var $: any;

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements LoggedInCallback, OnInit {
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    loginUserName: String;
    isProduction = environment.production;

    @ViewChild('navbar-cmp') button;

    constructor(private cognitoUtil: CognitoUtil, public router: Router,
        public userService: UserLoginService,
        location: Location, private renderer: Renderer, private element: ElementRef) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        // this.userService.isAuthenticated(this);
        const target = $('html')[0]; // Get DOM element from jQuery collection
        $('#fullscreen').on('click', event => {
            if (screenfull.enabled) {
                screenfull.toggle(target);
            }
        });

        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ( this.cognitoUtil.getCurrentUser() ) {
            let uname = this.cognitoUtil.getCurrentUser().getUsername();
            this.loginUserName = uname.split("@")[0].replace(".", ' ');
        }

    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if ( !isLoggedIn ) {
            this.router.navigate(['/login']);
        }

        if ( isLoggedIn ) {
            console.log('now, logged in user');
            console.log(this.cognitoUtil.getCurrentUser());
            let uname = this.cognitoUtil.getCurrentUser().getUsername();
            this.loginUserName = uname.split("@")[0].replace(".", ' ');
        }
    }

    onLogout() {
        this.userService.logout();
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/login']);
    };

    getTitle() {
        let titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }

    sidebarToggle() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible === false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

openNav() {
    document.getElementById('mySidenav').style.width = '80px';
    document.getElementById('main').style.width = 'calc(100% - 80px)';
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.width = '100%';
  }
  toggleNav() {
      if ($('#arrowicon').hasClass('opened')) {
          $('#arrowicon').attr('class', 'closed');
          $('#arrowicon').html('&rarr;');
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('main').style.width = '100%';
      } else if ($('#arrowicon').hasClass('closed')) {
        $('#arrowicon').attr('class', 'opened')
        $('#arrowicon').html('&larr;');
        document.getElementById('mySidenav').style.width = '80px';
        document.getElementById('main').style.width = 'calc(100% - 80px)';
      }
  }
}
