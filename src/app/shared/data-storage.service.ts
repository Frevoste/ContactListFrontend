import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../contacts/contact.model";
import { ContactService } from "../contacts/contact.service";
@Injectable({providedIn: 'root'})
export class DataStorageService{
    /**
     *
     */
    constructor(private http: HttpClient,private contactService: ContactService) {
        
    }
    swapDate(originalDate: string): string{
        const [day, month, year] = originalDate.split(".");
        const reversedDate = [year, month, day].join("-");
        return reversedDate;
    }

    /* Problem z aktualizacją tabeli contacts, mimo zapisu nowego kontaktu getContacts zwraca pustą tabele */
    storeContacts(){
        const httpContacts = this.contactService.getContacts();
        for(const contact of httpContacts)
        {
            let tmpContact = contact;
            tmpContact.birthDate = this.swapDate(tmpContact.birthDate);
            tmpContact.birthDate += "T00:00:00";
            console.log(JSON.stringify(tmpContact));
            this.http.post('https://localhost:7011/api/contact', JSON.stringify(tmpContact)).subscribe(response => {
                console.log(response);

            });
            
        }
        
    }

   

    onFetchData(){
        this.http.get<GetResponse>('https://localhost:7011/api/contact?searchPhrase=a&pageSize=5&pageNumber=1&sortBy=FirstName&sortDirection=ASC').subscribe(contacts => {
 
        this.contactService.setContacts(contacts.items);
        
        })
    }
}

export interface GetResponse  {
    items: {
        firstName: string;
            lastName: string;
            email: string;
            phoneNumber: string;
            birthDate:string;
            category: string;
            subCategory: string;
    }[]
    totalPages: number;
    itemsFrom: number;
    itemsTo: number;
    totalItemsCount:number;
}