import { Injectable } from '@angular/core';
import { Contact } from "./contact.model";
import { Subject } from 'rxjs';
@Injectable()
export class ContactService {

    contactsChanged = new Subject<Contact[]>();
    private contacts: Contact[] = [];
  
      getContacts(){
        return this.contacts.slice();
      }

      getContact(index:number){
        return this.contacts[index];
      }

      addContact(contact: Contact){
        this.contacts.push(contact);
        this.contactsChanged.next(this.contacts.slice());
        console.log(this.contacts);
      }

      updateContact(index: number, contact: Contact){
        this.contacts[index] = contact;
        this.contactsChanged.next(this.contacts.slice());
      }

      deleteContact(index: number){
        this.contacts.splice(index,1);
        
        this.contactsChanged.next(this.contacts.slice());
      }
      setContacts(contacts: Contact[]){
        this.contacts = contacts;
        this.contactsChanged.next(this.contacts.slice());
        this.getContacts();
      }
}