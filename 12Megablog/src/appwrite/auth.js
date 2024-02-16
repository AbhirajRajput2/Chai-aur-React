import conf from '../conf/conf.js'
import {Client,Account,ID} from 'appwrite'

export class Authservice {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if(userAccount)
            return this.login({email,password});
            else
            return userAccount;
        }
        catch(err){
            throw err;
        }
    }

    async login({email,password}){
      try{
        return await this.account.createEmailSession(email,password);
      } 
      catch(err){
        throw err;
      } 
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(err){
            console.log("Appwrite serive :: getCurrentUser :: error", err);
        }
    }

    async logout(){
        try{
            return await this.account.deleteSession();
        }
        catch(err){
            console.log("Appwrite serive :: logout :: error", err);
        }
    }
}

const authservice=new Authservice();

export default authservice;