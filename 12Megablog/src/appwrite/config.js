import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{

    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases=new Databases(this.client);   
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(err){
            console.log("Appwrite error::CreatePost::",err) 
        }
    }

        async updatePost(slug,{title,content,featuredImage,status}){
            try{
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        
                    }
                )
            }
            catch(err){
                console.log("Appwrite error::UpdatePost::",err)
            }
        }

        async deletePost(slug){
            try{
                 await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
                return true;
            }
            catch(err){
                console.log("Appwrite error::DeletePost error::",err)
                return false
            }
        }

        async getPost(slug){
            try{
                return await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
            }
            catch(err){
                console.log("Appwrite error::getPost error::",err)
            }
        }
    
        async getPost(queries=[Query.equal("status","active")]){
            try{
                return await this.databases(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries
                )
            }
            catch(err){
                console.log("Appwrite error::getPost error::",err)
            }
        }

        //upload file
        async uploadFile(file){
            try{
                return await this.bucket.createFile(
                    conf.appwriteBucketId,
                    ID.unique(),
                    file
                )
            }
            catch(err){
                console.log("Appwrite error::uploadFile error::",err)
            }
        }

        async deleteFile(fileId){
            try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            }
            catch(err){
                console.log("Appwrite error:: deleteFile error::",err)
            }
        }

        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        }
}

const service = new Service();
export default service;