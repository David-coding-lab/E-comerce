import { Client, Account, TablesDB } from 'appwrite'

export const client = new Client()

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Replace with your project ID

export const account = new Account(client)
export const tablesDB = new TablesDB(client);
export { ID } from 'appwrite'

