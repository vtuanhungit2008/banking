
"use server"

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../apwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { parseStringify } from "../utils";
import { log } from "console";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;
export const signIn = async ({password,email}:signInProps) => {
    try {
      const {account} = await createAdminClient();
      const response = await account.createEmailPasswordSession(email,password);
        return parseStringify(response);
    } catch (error) {
        console.log(error);
        
    }
  }
export const signUp = async ({ password, ...userData} : SignUpParams) => {
  const { email, firstName, lastName } = userData;
  console.log("Pass",password);
  
  let newUserAccount;

    try {
      const { account, database } = await createAdminClient();
      newUserAccount = await account.create(
        ID.unique(), 
        email, 
        password, 
        `${firstName} ${lastName}`
        
      );
      console.log(newUserAccount);
      
      if(!newUserAccount) throw new Error('Error creating user')
        
   
      const session = await account.createEmailPasswordSession(email, password);

     cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      });

    return parseStringify(newUserAccount);




    } catch (error) {
        console.log(error);
        
    }
  }
  


  