"use server";
import db from "./firebase/firestore";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { z } from "zod";

const Merchant = z.object({
  name: z.string().min(1),
  soldBy: z.string(),
  description: z.string().optional(),
  imageUrl: z.string(),
  dateCreated: z.string().date(),
});

type Merchant = z.infer<typeof Merchant>;

const collectionInstance = collection(db, "merchants");

export async function createMerchant(merchant: Merchant) {
  const validMerchant = Merchant.parse(merchant);
  const docRef = await addDoc(collectionInstance, validMerchant);
  console.log(
    "Document written with ID: ",
    docRef.id,
    "Merchant: ",
    validMerchant
  );
  return docRef.id;
}

export async function getMerchants() {
  const querySnapshot = await getDocs(collectionInstance);
  const merchants = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return merchants;
}

export async function getMerchant(id: string) {
  const docRef = doc(collectionInstance, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error(`No document with id: "${id}" found`);
  }
}
