import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  //create connection to database
  const jateDb = await openDB('jate', 1);
  //create transaction
  const tx = jateDb.transaction('jate', 'readwrite');
  //create and open object store
  const store = tx.objectStore('jate');
  //add data to object store
  const request = store.put(content);

  const result = await request;

  console.log('Data added to the database', result);
};
// console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
