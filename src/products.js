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
        tag: 'corsair',
        img: 'https://www.corsair.com/medias/sys_master/images/images/hdb/h73/8838899892254/-CC-9011063-WW-Gallery-780T-Black-0002.png'    
    },
    {
        id: '2',
        name: 'Cooler Master MB511',
        price: 80,
        stock: 7,
        tag: 'cooler-master',
        img: 'https://www.techinn.com/f/13747/137476712/cooler-master-caja-torre-masterbox-mb511d-rgb-malla.jpg'    
    },
    {
        id: '3',
        name: 'Asus GX601 Rog',
        price: 319.74,
        stock: 0,
        tag: 'asus',
        img: 'https://www.neobyte.es/21937-thickbox_default/caja-asus-gx601-rog-strix-helios-cristal-templado.jpg'    
    },
    {
        id: '4',
        name: 'AeroCool Cylon LED',
        price: 39.54,
        stock: 14,
        tag: 'aeroCool',
        img: 'https://www.venex.com.ar/products_images/1532119672_gabineteaerocoolcylonrgbledmidtoweratxpretod_nq_np_696620mlb27015804106_032018f.jpg'    
    },
    {
        id: '5',
        name: 'Asus TUF GT501',
        price: 196.54,
        stock: 5,
        tag: 'asus',
        img: 'https://media.ldlc.com/r1600/ld/products/00/05/40/71/LD0005407186_2.jpg'    
    },
]
