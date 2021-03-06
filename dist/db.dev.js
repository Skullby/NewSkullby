"use strict";

var firebase = require('firebase');

require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCJnWk_K7J3KpAFdInaV-asun2SQsLTTLw",
  authDomain: "skullby-47415.firebaseapp.com",
  projectId: "skullby-47415"
});
var db = firebase.firestore();
var productos = [{
  id: 1,
  nombre: "Teclado Razer Huntsman Tournament Edition",
  categoria: "teclados",
  foto: "https://i.rtings.com/images/reviews/keyboard/razer/huntsman/huntsman-design-medium.jpg",
  descripcion: "El teclado Razer Huntsman Tournament Edition es un teclado mecánico con interruptores ópticos diseñado para ofrecernos la máxima velocidad a la hora de demostrar nuestras habilidades en todo tipo de torneos de juego. Este teclado monta unos switches ópticos lineales Razer.",
  precio: 16.599,
  stock: 60,
  itemQty: 1,
  destacado: true,
  recomendado: true
}, {
  id: 2,
  nombre: "Logitech G Pro Gaming",
  categoria: "teclados",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 6.599,
  stock: 56,
  itemQty: 1,
  destacado: false,
  recomendado: false
}, {
  id: 3,
  nombre: 'Razer BlackWidow Chroma V2',
  categoria: "teclados",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 1.299,
  stock: 40,
  itemQty: 1,
  destacado: false,
  recomendado: false
}, {
  id: 4,
  nombre: 'G203 Lightsync Logitech',
  categoria: "mouses",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 300,
  stock: 34,
  itemQty: 1,
  destacado: true,
  recomendado: true
}, {
  id: 5,
  nombre: 'Harpoon RGB Wireless Corsair',
  categoria: "mouses",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 600,
  stock: 50,
  itemQty: 1,
  destacado: false,
  recomendado: false
}, {
  id: 6,
  nombre: 'Logitech G Pro',
  categoria: "mouses",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 250,
  stock: 12,
  itemQty: 1,
  destacado: false,
  recomendado: false
}, {
  id: 7,
  nombre: 'Monitor Asus 27 VA27EHEY',
  categoria: "monitores",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 39.999,
  stock: 12,
  itemQty: 1,
  destacado: true,
  recomendado: true
}, {
  id: 8,
  nombre: 'Monitor Samsung S24F350FH led 23.5"',
  categoria: "monitores",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 20.999,
  stock: 12,
  itemQty: 1,
  destacado: false,
  recomendado: false
}, {
  id: 9,
  nombre: 'Monitor Asus VG24VQ TUF Gaming Curvo 23.6',
  categoria: "monitores",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 58.999,
  stock: 12,
  itemQty: 1,
  destacado: false,
  recomendado: true
}, {
  id: 10,
  nombre: 'RTX 3070',
  categoria: "placas-de-video",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 40.999,
  stock: 12,
  itemQty: 1,
  destacado: false,
  recomendado: false
}, {
  id: 11,
  nombre: 'RTX 3080',
  categoria: "placas-de-video",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 60.999,
  stock: 12,
  itemQty: 1,
  destacado: false,
  recomendado: true
}, {
  id: 12,
  nombre: 'RTX 2080 TI',
  categoria: "placas-de-video",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 20.999,
  stock: 12,
  itemQty: 1,
  destacado: false,
  recomendado: false
}, {
  id: 13,
  nombre: 'Intel Core i7-9700F',
  categoria: "cpus",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 30.999,
  stock: 12,
  itemQty: 1,
  destacado: false,
  recomendado: true
}, {
  id: 14,
  nombre: 'AMD Ryzen 7 3700X',
  categoria: "cpus",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 15.999,
  stock: 12,
  itemQty: 1,
  destacado: false,
  recomendado: false
}, {
  id: 15,
  nombre: 'Intel Core i9-9900K',
  categoria: "cpus",
  foto: "https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis lorem a augue aliquam, vitae vestibulum nunc accumsan. Nam euismod.",
  precio: 60.999,
  stock: 12,
  itemQty: 1,
  destacado: true,
  recomendado: false
}];
productos.forEach(function (obj) {
  db.collection("productos").add({
    id: obj.id,
    nombre: obj.nombre,
    categoria: obj.categoria,
    foto: obj.foto,
    descripcion: obj.descripcion,
    precio: obj.precio,
    stock: obj.stock,
    itemQty: obj.itemQty,
    destacado: obj.destacado,
    recomendado: obj.recomendado
  }).then(function (docRef) {
    console.log("Producto registrado con ID: ", docRef.id);
  })["catch"](function (error) {
    console.error("Error al agregar un documento: ", error);
  });
});