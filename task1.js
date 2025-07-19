fetchData() ;
async function fetchData() {
  try {
    res = (
      await fetch("https://fakestoreapi.com/products")
    ).json();

    console.log(res);
    
    const data = await res;
for(let i = 0 ; i < data.length ; i++ ){

     var row = document.createElement("div") ;
    row.className = "row";
    var coloumn = document.createElement("div") ; 
    coloumn.className = "coloumn" ;
    var card = document.createElement("div") ;
    card.className = "card" ;

    var title = document.createElement("h1") ; 

    title.innerHTML =  "Today's Combo Offer"

    card.append(title) ;
    coloumn.append(card) ;
    row.append(coloumn) ;
    document.body.append(row)

    var image = document.createElement("img") ;
    image.className = "img" ;
    image.src = data[i].image ;

    card.append(image) ;

    var type = document.createElement("p") ;
    type.className = "category" ;
    type.innerHTML = data[i].category ;
    card.append(type)


   var thename = document.createElement("p") ; 
   thename.className = "name" ; 
   thename.innerHTML  = data[i].title ;
   card.append(thename) ;

   var price = document.createElement("p") ;
   price.className = "price";
   price.innerHTML = `${Math.floor(data[i].price + 20 )} $`;
   card.append(price) ;

   var price1 = document.createElement("p") ;
   price1.className = "price1";
   price1.innerHTML = `${Math.floor(data[i].price)} $`;
   card.append(price1) ;

   var text = document.createElement("p") ; 
   text.className = "text" ; 
   text.innerHTML = `Available : ${data[i].rating.count}`
   card.append(text)
   var rate = document.createElement("p") ;
   rate.className = "rate" ; 
   rate.innerHTML = `Rating : ${data[i].rating.rate}` ;
   if( data[i].rating.rate >= 4 ){
    rate.className = "rate1"

   }else{
    rate.className = "rate"
   }
   card.append(rate) ;
   
}
  } catch (err) {}
}