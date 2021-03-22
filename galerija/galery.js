

 













const apiKey = "563492ad6f917000010000019a6f60d34d8a4246934d3112f9363818" ;
let galleryDiv= document.querySelector(".gallery"); 
let inputNazivSlika = document.querySelector(".input-container input") ; 
let loadMore = document.querySelector(".load-more") ; 
/*const apiZaSlike ="https://api.pexels.com/v1/curated?per_page=9";*/
 

 async function dohvatiSlikeIzApi(apiMe) {
   const respone = await fetch(apiMe,{
       //ovde smo morali da stavimo  nas api key  za autorizaciju 
    method: "GET", 
    headers: {
        Accept : "application/json" ,
        Authorization :  apiKey ,   
    } ,
  }) ;  
 
    const data  = await respone.json() ; 
    console.log(data) ; 
    
    ubaciUHtmlSlike(data.photos) ; //ubacujem mu kao parametar
                                   //niz slika koje dobijam
                                   //od pexel apia


}

 
    



function ubaciUHtmlSlike(slikesaapia) {
    slikesaapia.forEach(sliku =>{
        const item = document.createElement("div") ; 
        item.classList.add("item") ;
        item.innerHTML = `
        <a href="#">
                <img src="${sliku.src.medium}"> 
              </a>` ; 
  //svaka slika sa apia ima u src vise razlicitih
  //veliciina i ovde sam stavio da je medium a moze
  //svasta landscape small itd itd   
  

  galleryDiv.appendChild(item);
  
  //appendchild dodaje novo dete na kraj 

  
    }) ; 
        
 
    
}


let x = 1 ; 



let searchIkona = document.querySelector(".input-container i") ; 


searchIkona.onclick = function vratiUneto () {
   
    let onoStoSmoUneli = inputNazivSlika.value ; 
    console.log(onoStoSmoUneli) ; 
    

    
    const apiZaSlike =`https://api.pexels.com/v1/search?query=${onoStoSmoUneli}&page=${x}&per_page=6`;
    dohvatiSlikeIzApi(apiZaSlike) ;
    

}

loadMore.onclick=function kliknutoDaSeUcitaJosSlika() {
 
    x=x+1 ; 
    console.log(x);
    let onoStoSmoUneli = inputNazivSlika.value ; 
    console.log(onoStoSmoUneli) ; 
    

    
    const apiZaSlike =`https://api.pexels.com/v1/search?query=${onoStoSmoUneli}&page=${x}&per_page=6`;
    dohvatiSlikeIzApi(apiZaSlike) ;
    }




//razlika izmedju DOMContentLoaded i load eventa je ta sto DomContetn
//je fired kada je ceo dokument ucitan znaci tek kada su ucitane sve slike
//sav tekst i sve ostalo reklame tekstovi itd itd 


