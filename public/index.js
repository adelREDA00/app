window.addEventListener("load",()=>{
    let long;
    let lat;
    let timeZone = document.querySelector(".location-timezone")
    let deg = document.querySelector(".temp-deg")
    let tempDescr = document.querySelector(".temp-description")

   if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async(position)=>{

            long = position.coords.longitude
            lat = position.coords.latitude

            const api_url = `weather/${lat}/${long}`;
            const response = await fetch(api_url)
            const data = await response.json()
                const temp = data.main.temp
                const name = data.name
                const Wdesc = data.weather[0].description
                const ct = data.sys.country
                let icon 
                //set the dom Elemnts
                deg.innerText=temp
                timeZone.innerText= `${ct}/${name}`
                tempDescr.innerText=Wdesc
                setIcons(icon,document.querySelector(".icon"))

            
        })
    }

    function setIcons (icon,iconID){
        const skycons = new Skycons({color:"white"})
        
        skycons.play()
        return skycons.set(iconID,Skycons.PARTLY_CLOUDY_DAY)
        
    }
})