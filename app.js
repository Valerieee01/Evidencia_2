
// vamos a consumir el json de users
const leerUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

// vamos a consumir el json de posts
const leerPost = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json(); 
    } catch (error) {
        console.log(error);
    }
};

// vamos a consumir el json de comments
const leerComments = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        return await response.json(); 
    } catch (error) {
        console.log(error);
    }
};

// vamos a consumir el json de albums
const leerAlbums = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        return await response.json(); 
    } catch (error) {
        console.log(error);
    }
};

// vamos a consumir el json de photos
const leerPhotos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        return await response.json(); 
    } catch (error) {
        console.log(error);
    }
};

// vamos a consumir el json de todos
const leerTodos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return await response.json(); 
    } catch (error) {
        console.log(error);
    }
};

