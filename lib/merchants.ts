"use server";
import db from "./firebase/firestore";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { z } from "zod";
import { Merchant, MerchantInput, MerchantInputSchema } from "./zod-schemas";

const collectionInstance = collection(db, "merchants");

export async function createMerchant(merchant: MerchantInput) {
  const validMerchant = MerchantInputSchema.parse(merchant);
  const docRef = await addDoc(collectionInstance, validMerchant);
  console.log(
    "Document written with ID: ",
    docRef.id,
    "Merchant: ",
    validMerchant
  );
  return docRef.id;
}

export async function getMerchants(): Promise<Merchant[]> {
  const querySnapshot = await getDocs(collectionInstance);
  const merchants = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Merchant)
  );
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
