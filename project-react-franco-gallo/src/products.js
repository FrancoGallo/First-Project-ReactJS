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
        img: 'assets/image/Corsair-Graphite-780T.jpg'    
    },
    {
        id: '2',
        name: 'Cooler Master MB511',
        price: 80,
        stock: 7,
        img: 'assets/image/Cooler-Master-MB511.jpg'    
    }
]
