import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {

  errorMsg = ''
  successMsg = ''

  loggedIn = false

  role : any

  constructor(changeDetectorRef: ChangeDetectorRef, private user:UsersInfoService, private route:Router) {

    if(localStorage.getItem('userT')){
    this.user.userInfo().subscribe(
      res=>{
        this.loggedIn = true
        // console.log(res)
        let result = JSON.parse(JSON.stringify(res))
        this.role = result.role
      },
      err=>{
        // this.err
        this.route.navigate(['login'])
        alert(err.error.msg)

      }
    )
    }
    else{
      alert("Please login to access this page")
      this.route.navigate(['login'])
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

}
