/*
const misProductos = [
    {id: "1", nombre: "BowlerHat", precio: 29, img: "../img/BowlerHat.png", idCat: "cabeza"},
    {id: "2", nombre: "CowboyHat", precio: 35, img: "../img/CowboyHat.png", idCat: "cabeza"},
    {id: "3", nombre: "Hood", precio: 75, img: "../img/Hood.png", idCat: "cabeza"},
    {id: "4", nombre: "PsychicFoilHelmet", precio: 250, img: "../img/PsychicFoilHelmet.png", idCat: "cabeza"},
    {id: "5", nombre: "Tribal headdress", precio: 75, img: "../img/Tribal_headdress.png", idCat: "cabeza"},
    {id: "6", nombre: "Tuque", precio: 27, img: "../img/Tuque.png", idCat: "cabeza"},
    {id: "7", nombre: "Ceremonial hood", precio: 37, img: "../img/Ceremonial_hood.png", idCat: "cabeza"},
    {id: "8", nombre: "Ritual Mask", precio: 46, img: "../img/Ritual_mask.png", idCat: "cabeza"},
    {id: "9", nombre: "Airwire headset", precio: 230, img: "../img/AirwireHeadset.png", idCat: "cabeza"},
    {id: "10", nombre: "Array headset", precio: 360, img: "../img/ArrayHeadset.png", idCat: "cabeza"},
    {id: "11", nombre: "Face Mask", precio: 14, img: "../img/ClothMask.png", idCat: "cabeza"},
    {id: "12", nombre: "Gas Mask", precio: 106, img: "../img/GasMask.png", idCat: "cabeza"},
    {id: "13", nombre: "Authority Cap", precio: 34, img: "../img/Authority_cap.png", idCat: "cabeza"},
    {id: "14", nombre: "Broadwrap", precio: 41, img: "../img/Broadwrap.png", idCat: "cabeza"},
    {id: "15", nombre: "Flophat", precio: 27, img: "../img/Flophat.png", idCat: "cabeza"},
    {id: "16", nombre: "HeadWrap", precio: 28, img: "../img/Headwrap.png", idCat: "cabeza"},
    {id: "17", nombre: "Shadecone", precio: 35, img: "../img/Shadecone.png", idCat: "cabeza"},
    {id: "18", nombre: "Slave Collar", precio: 35, img: "../img/Slave_collar.png", idCat: "cabeza"},
    {id: "19", nombre: "Slicecap", precio: 23, img: "../img/Slicecap.png", idCat: "cabeza"},
    {id: "20", nombre: "Tailcap", precio: 28, img: "../img/Tailcap.png", idCat: "cabeza"},
    {id: "21", nombre: "Torture Crown", precio: 33, img: "../img/Torture_crown.png", idCat: "cabeza"},
    {id: "22", nombre: "Visage mask", precio: 23, img: "../img/Visage_mask.png", idCat: "cabeza"},
    {id: "23", nombre: "Beret", precio: 52, img: "../img/Beret.png", idCat: "cabeza"},
    {id: "24", nombre: "Coronet", precio: 80, img: "../img/Coronet.png", idCat: "cabeza"},
    {id: "25", nombre: "Blindfold", precio: 27, img: "../img/Blindfold.png", idCat: "cabeza"},
    {id: "26", nombre: "Crown", precio: 120, img: "../img/Crown.png", idCat: "cabeza"},
    {id: "27", nombre: "Psyfocushelmet", precio: 500, img: "../img/Psyfocushelmet.png", idCat: "cabeza"},
    {id: "28", nombre: "Eltex Skullcap", precio: 500, img: "../img/Eltex_skullcap.png", idCat: "cabeza"},
    {id: "29", nombre: "LadiesHat", precio: 75, img: "../img/LadiesHat.png", idCat: "cabeza"},
    {id: "30", nombre: "Stellic Crown", precio: 102, img: "../img/Stellic_crown.png", idCat: "cabeza"},
    {id: "31", nombre: "TopHat", precio: 75, img: "../img/TopHat.png", idCat: "cabeza"},
    {id: "32", nombre: "Button Down Shirt", precio: 61, img: "../img/Button-Down_Shirt.png", idCat: "torso"},
    {id: "33", nombre: "T-Shirt", precio: 52, img: "../img/T-Shirt.png", idCat: "torso"},
    {id: "34", nombre: "Tribal wear", precio: 77, img: "../img/Tribalwear.png", idCat: "torso"},
    {id: "35", nombre: "Kid Romper", precio: 41, img: "../img/KidRomper.png", idCat: "torso"},
    {id: "36", nombre: "Kid Shirt", precio: 27, img: "../img/KidShirt.png", idCat: "torso"},
    {id: "37", nombre: "Kid Tribal wear", precio: 40, img: "../img/KidTribalwear.png", idCat: "torso"},
    {id: "38", nombre: "Psyfocus Shirt", precio: 400, img: "../img/PsyfocusShirt.png", idCat: "torso"},
    {id: "39", nombre: "Ruffle shirt", precio: 93, img: "../img/Ruffleshirt.png", idCat: "torso"},
    {id: "40", nombre: "Sash", precio: 33, img: "../img/Sash.png", idCat: "torso"},
    {id: "41", nombre: "Corset", precio: 84, img: "../img/Corset.png", idCat: "torso"},
    {id: "42", nombre: "Psyfocus Vest", precio: 500, img: "../img/PsyfocusVest.png", idCat: "torso"},
    {id: "43", nombre: "Royal vest", precio: 84, img: "../img/Royalvest.png", idCat: "torso"},
    {id: "44", nombre: "Duster", precio: 121, img: "../img/Duster.png", idCat: "torso"},
    {id: "45", nombre: "Jacket", precio: 102, img: "../img/Jacket.png", idCat: "torso"},
    {id: "46", nombre: "Parka", precio: 116, img: "../img/Parka.png", idCat: "torso"},
    {id: "47", nombre: "Robe", precio: 109, img: "../img/Robe.png", idCat: "torso"},
    {id: "48", nombre: "Lab coat", precio: 97, img: "../img/Lab_coat.png", idCat: "torso"},
    {id: "49", nombre: "Heavy Bandolier", precio: 99, img: "../img/HeavyBandolier.png", idCat: "torso"},
    {id: "50", nombre: "Kid Parka", precio: 64, img: "../img/KidParka.png", idCat: "torso"},
    {id: "51", nombre: "Burka", precio: 82, img: "../img/Burka.png", idCat: "torso"},
    {id: "52", nombre: "Slave body strap", precio: 102, img: "../img/Slave_body_strap.png", idCat: "torso"},
    {id: "53", nombre: "Cape", precio: 136, img: "../img/Cape.png", idCat: "torso"},
    {id: "54", nombre: "Psyfocus Robe", precio: 600, img: "../img/PsyfocusRobe.png", idCat: "torso"},
    {id: "55", nombre: "Royal robe", precio: 170, img: "../img/Royalrobe.png", idCat: "torso"},
    {id: "56", nombre: "Pants", precio: 52, img: "../img/Pants.png", idCat: "piernas"},
    {id: "57", nombre: "Kid Pants", precio: 27, img: "../img/KidPants.png", idCat: "piernas"},
]
*/
/*
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}
*/