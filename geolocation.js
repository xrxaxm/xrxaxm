        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://ipapi.co/json/',false);
        xhr.send();
        var res=JSON.parse(xhr.response);
        document.getElementById("coun").innerHTML=res["country_name"];
    document.getElementById("stat").innerHTML=res["region"];
       document.getElementById("city").innerHTML=res["city"];
        document.getElementById("sim").innerHTML=res["org"];
        document.getElementById("region_code").innerHTML=res["region_code"];   
        document.getElementById("ip").innerHTML=res["ip"];      
        document.getElementById("city").innerHTML=res["city"];
  
document.getElementById("country").innerHTML=res["country"];
  document.getElementById("country_code").innerHTML=res["country_code"];
         document.getElementById("country_code_iso3").innerHTML=res["country_code_iso3"];
 document.getElementById("country_capital").innerHTML=res["country_capital"];
  
   document.getElementById("country_tld").innerHTML=res["country_tld"];
         document.getElementById("postal").innerHTML=res["postal"];
  document.getElementById("latitude").innerHTML=res["latitude"];
  document.getElementById("longitude").innerHTML=res["longitude"];
  document.getElementById("timezone").innerHTML=res["timezone"];
         document.getElementById("country_calling_code").innerHTML=res["country_calling_code"];
 
  document.getElementById("languages").innerHTML=res["languages"];
  
document.getElementById("country_area").innerHTML=res["country_area"];
 
document.getElementById("country_population").innerHTML=res["country_population"];
 
