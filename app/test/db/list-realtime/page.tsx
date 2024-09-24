'use client';
import { database } from '@/firebaseConfig'
 
import { useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const GetPersonalInfoStream = () => {
  const starCountRef = ref(database, 'personal-information/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
  // data-stream state will trigger when data change in database

  return (
    <><div className="data">up date on data coming</div></>
  );
};

export default GetPersonalInfoStream;