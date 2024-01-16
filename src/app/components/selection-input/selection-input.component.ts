import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-selection-input',
  templateUrl: './selection-input.component.html',
  styleUrls: ['./selection-input.component.scss']
})
export class SelectionInputComponent {



  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Backspace') {
      console.log('Backspace key pressed');
      if(this.selectedUser.length>0){
         if(this.backspace===1){
          this.removeSelectedUser(this.selectedUser[this.selectedUser.length-1])
       }else{
        this.backspace=1
       }
      }
      
    }
  }
  
  backspace:number =0
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  captureInput:string=''
  placeholder:string='search by name....'
  selectedUser:any =[]

  listOfUsers:any=[
    {name:'ashutosh',email:'ashutosh@gmail.com'},
    {name:'abhishek',email:'abhishek@gmail.com'},
    {name:'suresh',email:'suresh@gmail.com'},
    {name:'jagdish',email:'jagdish@gmail.com'},
    {name:'anjali',email:'anjali@gmail.com'},
    {name:'menika',email:'menika@gmail.com'},
    {name:'randeep',email:'randeep@gmail.com'},
    {name:'adarsh',email:'adarsh@gmail.com'},
    {name:'shuhani',email:'shuhani@gmail.com'},
    {name:'agastya',email:'agastya@gmail.com'},
    {name:'adutya',email:'adutya@gmail.com'},
    {name:'rohan',email:'rohan@gmail.com'},
    {name:'jhanvi',email:'jhanvi@gmail.com'},
    {name:'manpreet',email:'manpreet@gmail.com'},
    {name:'prachi',email:'prachi@gmail.com'},
    {name:'surya',email:'surya@gmail.com'},
  ]




  removeSelectedUser(item:any){
    this.selectedUser =  this.selectedUser.filter((e:any)=>{
      return e.name !== item.name
    })
     this.listOfUsers.push(item)
     this.selectedUser.length>0 ? this.placeholder = '' :  this.placeholder = 'search by name....' 
     this.backspace =0
  }
  setSelectedUser(item:any){
    this.listOfUsers =  this.listOfUsers.filter((e:any)=>{
      return e.name !== item.name
    })
     this.selectedUser.push(item)
     this.captureInput=''
     this.selectedUser.length>0 ? this.placeholder = '' :  this.placeholder = 'search by name....' 
     this.backspace=0
  }
}
