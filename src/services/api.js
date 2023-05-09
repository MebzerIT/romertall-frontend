const CONVERTION_API_URL = "http://localhost:8000/api/v1/romertall?param=${value}";

const HISTORY_API_URL = "http://localhost:8000/api/v1/konverteringer/historikk";

const fetchConvertion = async (value) => {
  try {
    const response = await fetch(`${CONVERTION_API_URL}${value}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.integertall) {
      throw new Error(`Response error! integertall not found.`);
    }
    return data.integertall;
  } catch (error) {
    console.error(error);
    return null;
  }
};


const fetchHistory = async () => {
    try {
      const response = await fetch(HISTORY_API_URL);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  export { fetchConvertion, fetchHistory };