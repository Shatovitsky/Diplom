import { AUTO_COMPLETE_URL } from '../constants';

const getAutoCompleteCity = async (query) => {
  const request = await fetch(`${AUTO_COMPLETE_URL}=Minsk`);
  return await request.json();
};

export default getAutoCompleteCity;
