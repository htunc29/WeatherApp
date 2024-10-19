        $("#iller").change(function(){
            var il = $(this).val();
        const apiUrl = `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${il}`;
        const apiKey = "2hmCx0xbZAAxiOp0TUjLi3:1SXOdSQirDDXMt0uwK6Uoo";
            fetch(apiUrl,{
                method:"GET",
                headers:{
                    "content-type":"application/json",
                    "authorization":`apikey ${apiKey}`
                }
            })
            .then(response => response.json())
            .then(data => {
                $("#il").text(data.city.toUpperCase());
                $("#day").text(data.result[0].day);
                $("#date").html("<b>Tarih :</b> "+data.result[0].date);
                $("#icon").attr("src",data.result[0].icon);
                $("#description").html("<b>Hava Durumu :</b> "+data.result[0].description);
                $("#degree").html("<b>Sıcaklık :</b> "+data.result[0].degree);
                $("#min").html("<b>Minimum Sıcaklık :</b> "+data.result[0].min);
                $("#max").html("<b>Maximum Sıcaklık :</b> "+data.result[0].max);
                $("#night").html("<b>Gece Sıcaklık :</b> "+data.result[0].night);


            })
        });
    