import { collection } from "./variables";
import { db, auth } from './firebase'
import 'isomorphic-fetch'

export const logIn = async (data) => {
  return auth.signInWithEmailAndPassword(
    data.email,
    data.password
  )
}
//active socket
export const openSocket = async (data) => {
  const { id, time } = data
  await db.doc(`${collection}/${id}`).update({
    time: time
  });
}


// update response of alumno
export const testExam = async (data) => {
  const { id, arre } = data
  await db.doc(`${collection}/${id}`).update({ test: arre });
}
export const testLogic = async (data) => {
  const { id, arre } = data
  await db.doc(`${collection}/${id}`).update({ logico: arre });

}
export const lenguaExam = async (data) => {
  const { id, arre } = data
  await db.doc(`${collection}/${id}`).update({ lengua: arre });
}

export const mateExam = async (data) => {
  const { id, arre } = data
  await db.doc(`${collection}/${id}`).update({ matematico: arre });

}


//finish test
export const mateCancel = async (data) => {
  await db.doc(`${collection}/${data.id}`).update({ activeMat: false });
  document.cookie = `activeMat=false; max-age=3600; path=/; secure`;
}
export const logiCancel = async (data) => {
  await db.doc(`${collection}/${data.id}`).update({ activeLogic: false });
  document.cookie = `activeLogic=false; max-age=3600; path=/; secure`;
}
export const lenguaCancel = async (data) => {
  await db.doc(`${collection}/${data.id}`).update({ activeLengua: false });
  document.cookie = `activeLengua=false; max-age=3600; path=/; secure`;

}
export const examCancel = async (data) => {
  await db.doc(`${collection}/${data.id}`).update({ activeExam1: false });
  document.cookie = `activeExam1=false; max-age=3600; path=/; secure`;
}
//destroy
export const allCancel = async (data) => {
  await db.doc(`${collection}/${data.id}`).update({
    activeLengua: false,
    activeMat: false,
    activeLogic: false,
    activeExam1: false,
    time: 0,
  });
  document.cookie = `activeExam1=false; max-age=3600; path=/; secure`;
  document.cookie = `activeLengua=false; max-age=3600; path=/; secure`;
  document.cookie = `activeLogic=false; max-age=3600; path=/; secure`;
  document.cookie = `activeMat=false; max-age=3600; path=/; secure`;                
}

/**GET DATA USER */
export const getInitial = async (uid) => {
  const data = await db
    .collection(collection)
    .where("user", "==", uid)
    .get();
  return { data: data?.docs[0]?.data() };
}

export const logOut = async () => {
  document.cookie = `user=undefined; max-age=0; path=/`;
  document.cookie = `activeExam1=undefined; max-age=0; path=/`;
  document.cookie = `activeLengua=undefined; max-age=0; path=/`;
  document.cookie = `activeLogic=undefined; max-age=0; path=/`;
  document.cookie = `activeMat=undefined; max-age=0; path=/`;
  await auth.signOut();
}