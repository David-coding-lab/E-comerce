import { Client, Account, Databases} from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('exclusiveecommerceapp'); // Replace with your project ID

export const account = new Account(client);

export { ID } from 'appwrite';
