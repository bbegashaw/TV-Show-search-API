const form = document.querySelector('#searchForm');
const input = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const btnclear = document.querySelector('#clear');
const container = document.createElement("div");
container.className = "bds";
const topRes = document.querySelector('.topRes');


form.addEventListener('submit', async function(e)
{
    e.preventDefault();
    topRes.classList.remove('topRes');
    document.querySelector(".bd").append(container);
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`);
    console.log(response.data);
    makeImages(response.data);
    input.value = '';
    await btn.addEventListener('click',function()
    {
        document.querySelector(".bds").innerHTML = "";
    })
})


const makeImages = (shows) =>
{
    
    
    for(let res of shows)
    {
        if(res.show.image){
        let img = document.createElement('IMG');
        img.setAttribute("id","imgAttr");
        img.src = res.show.image.medium;
        const title = document.createElement('span');
        const br = document.createElement('br');
        title.innerHTML = res.show.name;
        title.className = "info";
        const rating = document.createElement('span');
        rating.innerHTML = res.show.rating;
        // const rating = document.createElement('')
        document.querySelector('.bds').append(img);
        document.querySelector('.bds').append(title);
        document.querySelector('.bds').append(br);
        
        }
    }

    
}


