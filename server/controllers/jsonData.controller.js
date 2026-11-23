import { getJsonDataService } from "../services/jsonData.service.js";

export const getJsonDataConytroller = async (_, res) => {
  //auth service
  //extract data from params and req.body and send to service
  const data = await getJsonDataService();

  res.set("Cache-Control", "private, max-age=3600");

  return res.status(200).json({
    status: "success",
    data,
  });
};
