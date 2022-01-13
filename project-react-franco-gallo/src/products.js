export const extractProducts = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})
/*
    Una "Promise" (promesa) cuya funcion es llamar al array.  
    "setTimeout" es una funcion que te sirve para relentizar una tarea el tiempo que quieras. En este caso el 2000 indica 2 segundos.
*/

const products = [
    {
        id: '1',
        name: 'Corsair Graphite 780T',
        price: 290,
        stock: 3,
        marca: 'corsair',
        img: 'assets/image/products/Corsair-Graphite-780T/Corsair-Graphite-780T-0.webp'    
    },
    {
        id: '2',
        name: 'Cooler Master MB511',
        price: 80,
        stock: 7,
        marca: 'cooler-master',
        img: 'assets/image/products/Cooler-Master-MB511/Cooler-Master-MB511-0.webp'    
    },
    {
        id: '3',
        name: 'Asus GX601 Rog',
        price: 319.74,
        stock: 0,
        marca: 'asus',
        img: 'assets/image/products/Asus-GX601-Rog/Asus-GX601-Rog-0-1.webp'    
    },
    {
        id: '4',
        name: 'AeroCool Cylon LED',
        price: 39.54,
        stock: 14,
        marca: 'aeroCool',
        img: 'assets/image/products/AeroCool-Cylon-LED/AeroCool-Cylon-LED-0.webp'    
    },
    {
        id: '5',
        name: 'Asus TUF GT501',
        price: 196.54,
        stock: 5,
        marca: 'asus',
        img: 'assets/image/products/Asus-TUF-GT501/Asus-TUF-GT501-0.webp'    
    },
]
