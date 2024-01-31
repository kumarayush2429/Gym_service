export const exerciseOptions = {
  method: 'GET',
  params: {limit: '200'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};


 export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '26d7a45aacmsha7f936468729543p1e66f9jsn9bc8261451bc',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url ,options)=>{
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};