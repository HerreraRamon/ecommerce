import dotenv from 'dotenv';
dotenv.config();
export default {

    CLUSTER: process.env.CLUSTER || 'NO SE ENCONTRO EN .ENV',
    HOST: process.env.HOST || 'NO SE ENCONTRO EN .ENV',
    PORT: process.env.PORT || 'NO SE ENCONTRO EN .ENV',
    API_URL: process.env.API_URL || 'NO SE ENCONTRO EN .ENV',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'NO SE ENCONTRO EN .ENV',
    DATABASE: process.env.DATABASE || 'NO SE ENCONTRO EN .ENV',
    DB_USER: process.env.DB_USER || 'NO SE ENCONTRO EN .ENV',
    DB_PASSWORD: process.env.DB_PASSWORD || 'NO SE ENCONTRO EN .ENV',
}