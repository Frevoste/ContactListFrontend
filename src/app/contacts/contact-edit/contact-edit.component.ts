import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})


export class ContactEditComponent implements OnInit{
  id!: number;
  editMode = false;
  contactForm!: FormGroup;
  /**
   *
   */
  constructor(private route: ActivatedRoute,private contactService: ContactService,private router: Router) {
  }


  ngOnInit(){
    this.route.params.subscribe((params: Params)=>
    {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }
  private initForm(){
    let contactFirstName = '';
    let contactLastName = '';
    let contactEmail = '';
    let contactPhoneNumber = '';
    let contactBirthDate = '';
    let contactCategory = '';
    let contactSubCategory = '';


    if(this.editMode){
      const contact = this.contactService.getContact(this.id);
      contactFirstName = contact.firstName;
      contactLastName = contact.lastName;
      contactEmail = contact.email;
      contactPhoneNumber = contact.phoneNumber;
      contactBirthDate = contact.birthDate;
      contactCategory = contact.category;
      contactSubCategory = contact.subCategory;
    }
    this.contactForm = new FormGroup({
      'firstName':new FormControl(contactFirstName),
      'lastName':new FormControl(contactLastName),
      'email':new FormControl(contactEmail),
      'phoneNumber':new FormControl(contactPhoneNumber),
      'birthDate':new FormControl(contactBirthDate),
      'category':new FormControl(contactCategory),
      'subCategory':new FormControl(contactSubCategory),

    })
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route})
  }
  onSubmit(){
    // const newContact = new Contact(
    //   0,
    //   this.contactForm.value['firstName'],
    //   this.contactForm.value['lastName'],
    //   this.contactForm.value['email'],
    //   this.contactForm.value['phoneNumber'],
    //   this.contactForm.value['birthDate'],
    //   this.contactForm.value['Category'],
    //   this.contactForm.value['SubCategory'],
    // );
    if (this.editMode){
      this.contactService.updateContact(this.id, this.contactForm.value);
    } else {
      this.contactService.addContact(this.contactForm.value);
    }
    this.onCancel();
  }
}
