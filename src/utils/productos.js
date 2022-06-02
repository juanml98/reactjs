const productos = [
    {
        id: 1,
        nombre: "iPhone 11", 
        marca: "Apple", 
        precio: 25000,
        descripcion: "Pantalla de 6.1 pulgadas y 256GB de almacenamiento. Cámara de 12 MP. Batería de 3110 mAh con carga rápida, y reconocimiento Face ID.", 
        imagen: '../images/iphone11.jpg'
    },
    {
        id: 2, 
        nombre: "Redmi Note 8", 
        marca: "Xiaomi", 
        precio: 15000,
        descripcion: "Pantalla de 6.3 pulgadas Full HD+, 4GB de RAM con 64GB o 128GB de almacenamiento. La cámara de 48MP. Batería de 4000 mAh.",
        imagen: '../images/redminote8.jpg'
    },
    {
        id: 3, 
        nombre: "Galaxy s10", 
        marca: "Samsung", 
        precio: 20000, 
        descripcion: "Pantalla 6.1 pulgadas, 8GB de RAM y 128GB de almacenamiento. Cámara de 16 MP. Lector de huellas, puerto USB-C, y batería de 3400 mAh.",
        imagen: '../images/galaxys10.jpg'
    },
    {
        id: 4, 
        nombre: "iPhone 12", 
        marca: "Apple", 
        precio: 30000,
        descripcion: "Pantalla de 6.1 pulgadas, 128GB de almacenamiento. Cámara de 12MP. Face ID y carga rápida e inalámbrica.",
        imagen: '../images/iphone12.jpg'
    },
    {
        id: 5, 
        nombre: "Galaxy s22", 
        marca: "Samsung", 
        precio: 17000,
        descripcion: "Cuenta con 6.1 pulgadas a resolución FHD+. 8GB de RAM. Cámara de 50MP. Batería de 3700 mAh, y lector de huellas.",
        imagen: '../images/galaxys22.jpg'
    },
    {
        id: 6, 
        nombre: "iPhone 13 pro max", 
        marca: "Apple", 
        precio: 30000,
        descripcion: "Pantalla de 6.7 pulgadas, almacenamiento de 128GB. Cámara de 12MP. Posee face ID y carga rápida.",
        imagen: '../images/iphone13promax.jpg'
    },
];

export default productos;

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },2000)
    })
}

export const getProductosById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(productos => productos.id === id))
        }, 600)
    })
}