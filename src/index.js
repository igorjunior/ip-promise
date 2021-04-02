const ip_api_co = require('./service/ip_api_co');
const ip_api_com = require('./service/ip_api_com');

module.exports = async (ip) =>  {
  try{
    return await ip_api_com(ip);
  }catch{
    try{
      return await ip_api_co(ip);
    }catch{
      return {error: "service_error", message: "O serviço não retornou eventos para este ip."};
    }
  }
};
