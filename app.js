
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

// definimos una funcion llamada crearObjeto la cual nos siver para crear el objeto donde se almacenara todos los arrays
const crearObjeto = (usuariosPost, usuariosComent, usuariosAlbum, usuariosPhoto, usuariosTodo) => {
    
    const datosUsuario = {
        "posts": usuariosPost,
        "comments": usuariosComent,
        "albums": usuariosAlbum,
        "photos": usuariosPhoto,
        "todos": usuariosTodo,
    };

    console.log(datosUsuario);
};
// definimos una funcion llamda filtrarInfo donde vamos a filtrar toda la informacion de JSON para guardarla en el objeto
const filtarInfo = async () => {
        const usuarios = await leerUser();
        const Posts = await leerPost();
        const Comments = await leerComments();
        const Albums = await leerAlbums();
        const Photos = await leerPhotos();
        const Todos = await leerTodos();
        
    // creamos un forEach por cada user vamos a obtener la informacion
    usuarios.forEach(user => {
        let usuariosPost  = Posts.filter(post => post.id === user.id);
        let usuariosComent = Comments.filter(comment => usuariosPost.some(post => post.id === comment.postId));
        let usuariosAlbum = Albums.filter(album => user.id === album.userId);
        let usuariosPhoto = Photos.filter(photo => usuariosAlbum.some(album => album.id === photo.albumId));
        let usuariosTodo = Todos.filter(todo => todo.userId === user.id);

        //mostramos el id del usuario 
        console.log(`Array del usuario ${user.id}`);
        // llamamos a la funcion crearObjeto para que cree el objeto en cada vuelta del foreach 
        crearObjeto(usuariosPost, usuariosComent, usuariosAlbum, usuariosPhoto, usuariosTodo)

    });
}


const mostrarArrays = async () => {
    try {
        filtarInfo()
    } catch (error) {
        console.error("No se pudo cargar cargar correctamente el JSON");
    }
}

mostrarArrays(); 