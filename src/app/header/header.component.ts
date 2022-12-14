import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:any

  constructor( private users : UsersInfoService, @Inject(PLATFORM_ID) private platformid : object ) {

    if(isPlatformBrowser(this.platformid)){

    if(localStorage.getItem('userT')){

    this.users.userInfo().subscribe(
      res=>{

        console.log(res)

        let result = JSON.parse(JSON.stringify(res))

        this.isLoggedIn = result.status

      },
      err=>{
        console.log(err)
        this.isLoggedIn = false
      }
    )

    }

  }

   }

  ngOnInit(): void {

    if(isPlatformBrowser(this.platformid)){

    const menu = document.querySelector('.menu-bar p') as HTMLElement
    const logo = document.querySelector('.logo') as HTMLElement
    const header = document.querySelector('header') as HTMLElement
    const mnav = document.querySelectorAll('#m-nav a')
    const nav = document.querySelectorAll('.desktop')
    const navA = document.getElementsByClassName('link-item')
    

window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > header.offsetHeight + 80) {
        header.style.backgroundColor = 'white';
        header.classList.add('shadow')

        logo.style.color = 'black';
        menu.style.color = 'black';

        mnav.forEach((a:any)=>{
          a.style.color = 'black';
          a.style.borderColor = 'black';
        })

        for(var i = 0; i<navA.length; i++){
          let t = navA[i] as HTMLElement
          t.style.color = 'black';
        }

    } else {
       header.style.backgroundColor = '';
       header.classList.remove('shadow')
       nav.forEach((a:any)=>{
        a.style.color = '';
      })
        logo.style.color = '';
        menu.style.color = '';
        mnav.forEach((a:any)=>{
          a.style.color = '';
          a.style.borderColor = '';
        })
        
        for(var i = 0; i<navA.length; i++){
          let t = navA[i] as HTMLElement
          t.style.color = '';
        }

    }
}
    }
  }

}
