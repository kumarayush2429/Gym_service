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
    'X-RapidAPI-Key': '461833cf9fmshd2d6e81f3a5fa8cp16e2dcjsn51a7b9aac8a0',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url ,options)=>{
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
