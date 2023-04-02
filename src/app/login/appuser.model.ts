export class Appuser {
        public email: string;
        public password: string;
        public confirmPassword: string;

    /**
     *
     */
    constructor(email:string,password:string){

        this.email=email;
        this.password=password;
        this.confirmPassword=password;
    }
}