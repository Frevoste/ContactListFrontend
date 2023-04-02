export class Contact {
    public firstName: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
    public birthDate: string;
    public category: string;
    public subCategory: string;

    /**
     *
     */
    constructor(first:string,last:string,email:string,phone:string,birth:string,category:string,subcategory:string){

        this.firstName=first.toString();
        this.lastName=last.toString();
        this.email=email.toString();
        this.phoneNumber=phone.toString();
        this.birthDate=birth.toString();
        this.category=category.toString();
        this.subCategory=subcategory.toString();
    }
}