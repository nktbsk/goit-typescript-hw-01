// ? Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними.

import axios from 'axios';

fetchData('API_KEY')

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
