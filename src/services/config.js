import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
  

const firebaseConfig = {
  apiKey: "AIzaSyCWurGoTipaNHdRwOgbJlbuSCZdKfYVNhQ",
  authDomain: "rimworld-e-commerce.firebaseapp.com",
  projectId: "rimworld-e-commerce",
  storageBucket: "rimworld-e-commerce.appspot.com",
  messagingSenderId: "610629307906",
  appId: "1:610629307906:web:24b639a1775c4e6e01611b"
  };
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)



////////////////////////
/*
const misProductos = [
    { nombre: "BowlerHat", precio: 29, img: "../public/img/BowlerHat.png", idCat: "cabeza", stock: 30 },
    { nombre: "CowboyHat", precio: 35, img: "../img/CowboyHat.png", idCat: "cabeza", stock: 30 },
    { nombre: "Hood", precio: 75, img: "../img/Hood.png", idCat: "cabeza", stock: 30 },
    { nombre: "PsychicFoilHelmet", precio: 250, img: "../img/PsychicFoilHelmet.png", idCat: "cabeza", stock: 30 },
    { nombre: "Tribal headdress", precio: 75, img: "../img/Tribal_headdress.png", idCat: "cabeza", stock: 30 },
    { nombre: "Tuque", precio: 27, img: "../img/Tuque.png", idCat: "cabeza", stock: 30 },
    { nombre: "Ceremonial hood", precio: 37, img: "../img/Ceremonial_hood.png", idCat: "cabeza", stock: 30 },
    { nombre: "Ritual Mask", precio: 46, img: "../img/Ritual_mask.png", idCat: "cabeza", stock: 30 },
    { nombre: "Airwire headset", precio: 230, img: "../img/AirwireHeadset.png", idCat: "cabeza", stock: 30 },
    { nombre: "Array headset", precio: 360, img: "../img/ArrayHeadset.png", idCat: "cabeza", stock: 30 },
    { nombre: "Face Mask", precio: 14, img: "../img/ClothMask.png", idCat: "cabeza", stock: 30 },
    { nombre: "Gas Mask", precio: 106, img: "../img/GasMask.png", idCat: "cabeza", stock: 30 },
    { nombre: "Authority Cap", precio: 34, img: "../img/Authority_cap.png", idCat: "cabeza", stock: 30 },
    { nombre: "Broadwrap", precio: 41, img: "../img/Broadwrap.png", idCat: "cabeza", stock: 30 },
    { nombre: "Flophat", precio: 27, img: "../img/Flophat.png", idCat: "cabeza", stock: 30 },
    { nombre: "HeadWrap", precio: 28, img: "../img/Headwrap.png", idCat: "cabeza", stock: 30 },
    { nombre: "Shadecone", precio: 35, img: "../img/Shadecone.png", idCat: "cabeza", stock: 30 },
    { nombre: "Slave Collar", precio: 35, img: "../img/Slave_collar.png", idCat: "cabeza", stock: 30 },
    { nombre: "Slicecap", precio: 23, img: "../img/Slicecap.png", idCat: "cabeza", stock: 30 },
    { nombre: "Tailcap", precio: 28, img: "../img/Tailcap.png", idCat: "cabeza", stock: 30 },
    { nombre: "Torture Crown", precio: 33, img: "../img/Torture_crown.png", idCat: "cabeza", stock: 30 },
    { nombre: "Visage mask", precio: 23, img: "../img/Visage_mask.png", idCat: "cabeza", stock: 30 },
    { nombre: "Beret", precio: 52, img: "../img/Beret.png", idCat: "cabeza", stock: 30 },
    { nombre: "Coronet", precio: 80, img: "../img/Coronet.png", idCat: "cabeza", stock: 30 },
    { nombre: "Blindfold", precio: 27, img: "../img/Blindfold.png", idCat: "cabeza", stock: 30 },
    { nombre: "Crown", precio: 120, img: "../img/Crown.png", idCat: "cabeza", stock: 30 },
    { nombre: "Psyfocushelmet", precio: 500, img: "../img/Psyfocushelmet.png", idCat: "cabeza", stock: 30 },
    { nombre: "Eltex Skullcap", precio: 500, img: "../img/Eltex_skullcap.png", idCat: "cabeza", stock: 30 },
    { nombre: "LadiesHat", precio: 75, img: "../img/LadiesHat.png", idCat: "cabeza", stock: 30 },
    { nombre: "Stellic Crown", precio: 102, img: "../img/Stellic_crown.png", idCat: "cabeza", stock: 30 },
    { nombre: "TopHat", precio: 75, img: "../img/TopHat.png", idCat: "cabeza", stock: 30 },
    { nombre: "Button Down Shirt", precio: 61, img: "../img/Button-Down_Shirt.png", idCat: "torso", stock: 30 },
    { nombre: "T-Shirt", precio: 52, img: "../img/T-Shirt.png", idCat: "torso", stock: 30 },
    { nombre: "Tribal wear", precio: 77, img: "../img/Tribalwear.png", idCat: "torso", stock: 30 },
    { nombre: "Kid Romper", precio: 41, img: "../img/KidRomper.png", idCat: "torso", stock: 30 },
    { nombre: "Kid Shirt", precio: 27, img: "../img/KidShirt.png", idCat: "torso", stock: 30 },
    { nombre: "Kid Tribal wear", precio: 40, img: "../img/KidTribalwear.png", idCat: "torso", stock: 30 },
    { nombre: "Psyfocus Shirt", precio: 400, img: "../img/PsyfocusShirt.png", idCat: "torso", stock: 30 },
    { nombre: "Ruffle shirt", precio: 93, img: "../img/Ruffleshirt.png", idCat: "torso", stock: 30 },
    { nombre: "Sash", precio: 33, img: "../img/Sash.png", idCat: "torso", stock: 30 },
    { nombre: "Corset", precio: 84, img: "../img/Corset.png", idCat: "torso", stock: 30 },
    { nombre: "Psyfocus Vest", precio: 500, img: "../img/PsyfocusVest.png", idCat: "torso", stock: 30 },
    { nombre: "Royal vest", precio: 84, img: "../img/Royalvest.png", idCat: "torso", stock: 30 },
    { nombre: "Duster", precio: 121, img: "../img/Duster.png", idCat: "torso", stock: 30 },
    { nombre: "Jacket", precio: 102, img: "../img/Jacket.png", idCat: "torso", stock: 30 },
    { nombre: "Parka", precio: 116, img: "../img/Parka.png", idCat: "torso", stock: 30 },
    { nombre: "Robe", precio: 109, img: "../img/Robe.png", idCat: "torso", stock: 30 },
    { nombre: "Lab coat", precio: 97, img: "../img/Lab_coat.png", idCat: "torso", stock: 30 },
    { nombre: "Heavy Bandolier", precio: 99, img: "../img/HeavyBandolier.png", idCat: "torso", stock: 30 },
    { nombre: "Kid Parka", precio: 64, img: "../img/KidParka.png", idCat: "torso", stock: 30 },
    { nombre: "Burka", precio: 82, img: "../img/Burka.png", idCat: "torso", stock: 30 },
    { nombre: "Slave body strap", precio: 102, img: "../img/Slave_body_strap.png", idCat: "torso", stock: 30 },
    { nombre: "Cape", precio: 136, img: "../img/Cape.png", idCat: "torso", stock: 30 },
    { nombre: "Psyfocus Robe", precio: 600, img: "../img/PsyfocusRobe.png", idCat: "torso", stock: 30 },
    { nombre: "Royal robe", precio: 170, img: "../img/Royalrobe.png", idCat: "torso", stock: 30 },
    { nombre: "Pants", precio: 52, img: "../img/Pants.png", idCat: "piernas", stock: 30 },
    { nombre: "Kid Pants", precio: 27, img: "../img/KidPants.png", idCat: "piernas", stock: 30 },
]
import { collection, doc, writeBatch } from "firebase/firestore";
const subirProductos = async () => {
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    misProductos.forEach((producto) => {
        const nuevoDoc = doc(productosRef)
        batch.set(nuevoDoc, producto)
    })
    try {
        await batch.commit();
        console.log('Productos subidos exitosamente')
    } catch (error) {
        console.log("error subiendo productos; " + error)
    }
}

subirProductos()
*/