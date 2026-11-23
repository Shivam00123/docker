export const getJsonDataService = async () => {
  try {
    console.log("fetching...");
    const response = await fetch("https://dummyjson.com/products").then(
      (data) => data.json(),
    );
    return response;
  } catch (error) {
    console.error(`Error fetch data in getJsonDataService ${error}`);
  }
};
