'use client';
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from '@/firebaseConfig'


const GetPersonalInfo = () => {
    const starCountRef = ref(database, 'personal-information/');
    get(starCountRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  return (
    <><div className="data"></div></>
  );
};

export default GetPersonalInfo;