let price =55;

let vat = price*12/100;

let delivery =40;
let  total = price+vat;

const allergy= "free";

let payment="Swish visa and master";

const status= "Not available" ;

const tracking="not available";



function display_price (){    
    let  price_id = document.getElementById("price"); 
    let  vat_id = document.getElementById("vat"); 
    let  finalprice_id = document.getElementById("finalprice"); 
    let  delivery_id = document.getElementById("delivery"); 
    const  allergy_id = document.getElementById("allergy"); 
    let  totalcost_id = document.getElementById("totalcost");
    const myorder_status=document.getElementById("order_status" );
    const mypayment_type=document.getElementById("payment_type");


   price_id.textContent= "Price:   "+price;
   vat_id.textContent="VAT 12%:    "+vat;
   finalprice_id.textContent="Final Price:   " +total;
   delivery_id.textContent="Delivery: (50 kr) not place order yet  ";
   allergy_id.textContent="Allergy:   no allergy";
   mypayment_type.textContent=" Payment Type:   will be display after confirmation of order";

    
}

function order_now (){    
    let  price_id = document.getElementById("price"); 
    let  vat_id = document.getElementById("vat"); 
    let  finalprice_id = document.getElementById("finalprice"); 
    let  delivery_id = document.getElementById("delivery"); 
    const  allergy_id = document.getElementById("allergy"); 
    let  totalcost_id = document.getElementById("totalcost"); 
    const myorder_status=document.getElementById("order_status" );
    const mypayment_type=document.getElementById("payment_type");
   

   price_id.textContent= "Price:   "+price;
   vat_id.textContent="VAT 12%:    "+vat;
   finalprice_id.textContent="Final Price:   " +total;
   delivery_id.textContent="Delivery: (50 kr) 50  ";
   allergy_id.textContent="Allergy:   no allergy";
   myorder_status.textContent=" Order Status:   Confirmed"; 
   mypayment_type.textContent=" Payment Type:    Swish";
    
}

function order_status (){    
    let  price_id = document.getElementById("price"); 
    let  vat_id = document.getElementById("vat"); 
    let  finalprice_id = document.getElementById("finalprice"); 
    let  delivery_id = document.getElementById("delivery"); 
    const  allergy_id = document.getElementById("allergy"); 
    let  totalcost_id = document.getElementById("totalcost"); 
    const myorder_status=document.getElementById("order_status" );
    const mypayment_type=document.getElementById("payment_type");
    const mytracking=document.getElementById("tracking");
   

   price_id.textContent= "Price:   "+price;
   vat_id.textContent="VAT 12%:    "+vat;
   finalprice_id.textContent="Final Price:   " +total;
   delivery_id.textContent="Delivery: (50 kr) 50  ";
   allergy_id.textContent="Allergy:   no allergy";
   myorder_status.textContent=" Order Status:   Confirmed"; 
   mypayment_type.textContent=" Payment Type:    Swish";
   mytracking.textContent=" Order Tracking ID;    1254875123SE"
    
}




