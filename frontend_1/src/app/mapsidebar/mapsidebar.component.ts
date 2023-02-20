import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-mapsidebar',
  templateUrl: './mapsidebar.component.html',
  styleUrls: ['./mapsidebar.component.css']
})
export class MapsidebarComponent {

  constructor(private fb: FormBuilder, private service: RouterService, private route: Router){} 
  
  navForm = this.fb.group({ 
    source: new FormControl(''), 
    destination: new FormControl('') 
  }) 
 
  onGo(){ 

    this.route.navigateByUrl('/mappage');
    // this.service.mappage(this.navForm.value).subscribe((navi:any)=>{ 
    //   this.route.navigateByUrl('/mappage'); 
    // }) 
  }

  get source() { return this.navForm.get('source') };
  get destination() { return this.navForm.get('destination') };
}
