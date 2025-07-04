import { pgCLient } from "../db";

export const createTable = async () => {
  try {
    const response = await pgCLient.query(`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(30) NOT NULL UNIQUE,
            email VARCHAR(30) NOT NULL UNIQUE,
            password varchar(100) NOT NULL,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);  
        `);
  } catch (error) {
    console.log(`error in tables ${error}`);
    throw new Error("please check the users table");
  }
};

export const createBlog = async () => {
  try {
    const response = await pgCLient.query(`CREATE TABLE IF NOT EXISTS blogs (
            id SERIAL PRIMARY KEY ,
            blogPost VARCHAR(30) UNIQUE NOT NULL,
            description VARCHAR(30) NOT NULL,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            userId  INTEGER ,
            FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
            );
        `);
  } catch (error) {
    console.log(`error in blogs ${error}`);
    throw new Error("please check the blog table");
  }
};
export const comments = async () => {
  try {
    const response = await pgCLient.query(`
            CREATE TABLE IF NOT EXISTS comments (
                id SERIAL PRIMARY KEY,
                comment TEXT NOT NULL,
                date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                blogId  INTEGER,
                userId  INTEGER,
                FOREIGN KEY (blogId) REFERENCES blogs(id) ON DELETE CASCADE,
                FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE 
                );
            `);
  } catch (error) {
    console.log(`error in comments ${error}`);
    throw new Error("please check the comments table");
  }
};
