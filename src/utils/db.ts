import { openDatabase, WebSQLDatabase } from 'expo-sqlite'

let databaseInstance: WebSQLDatabase | null = null;

const getDatabaseInstance = () => {
  if (!databaseInstance) {
    databaseInstance = openDatabase('meals.db', '1')
  }
  return databaseInstance;
}

export const runQuery = <R extends Record<string, string | number>>(query: string, data: Array<string | number>) => new Promise<R[]>((resolve, reject) => {
  getDatabaseInstance().transaction((tx) => {
    tx.executeSql(query, data, (_tx, result) => {
      resolve(result.rows._array);
    })
  }, reject)
});

// type Meal = {
//   name: string;
//   data?: string | number;
// }

// runQuery<Meal>('', [])