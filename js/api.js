const btn = document.getElementById("btn");

btn.addEventListener("click" , () =>{

     setTimeout(() =>{
         callApi();
     } , 3000);
     
});

const callApi = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '337ec89bc4msh66b41e032a1f0f6p166c97jsn86573a36ee9c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}