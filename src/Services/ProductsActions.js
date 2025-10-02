import { tablesDB } from "../lib/appwrite"

export async function fetchProducts() {
    const response = await tablesDB.listRows({
        databaseId: import.meta.env.VITE_APPWRITE_Database_ID,
        tableId: import.meta.env.VITE_APPWRITE_Table_ID
    })
    return response
}