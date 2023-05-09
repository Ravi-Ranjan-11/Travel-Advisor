import axios from "axios";


  
  export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat, 
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Key': '70d6723eecmsh3a1a62e3880acbbp158758jsn522d33e2f344',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
        });

        return data;
    } catch(error) {
        console.log(error);
    }
}