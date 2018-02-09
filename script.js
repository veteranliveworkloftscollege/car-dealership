$(function() {
    const inventory = [
        {
            "make":"Lamborgini",
            "model": "Aventador",
            "year": 2018,
            "price": 199999,
            "image": "images/inventory-1.jpg"
        },
        {
            "make":"Lamborgini",
            "model": "Centenario",
            "year": 2017,
            "price": 198999,
            "image": "images/inventory-2.jpg"
        },
        {
            "make":"Lamborgini",
            "model": "Asterion",
            "year": 2016,
            "price": 196999,
            "image": "images/inventory-3.jpg"
        },
        {
            "make":"Lamborgini",
            "model": "Gallardo",
            "year": 2012,
            "price": 146991,
            "image": "images/inventory-4.jpg"
        },
        {
            "make":"Lamborgini",
            "model": "Huracan",
            "year": 2015,
            "price": 193996,
            "image": "images/inventory-5.jpg"
        },
        {
            "make":"Lamborgini",
            "model": "Huracan",
            "year": 2016,
            "price": 198996,
            "image": "images/inventory-6.jpg"
        }
    ];


    $('#makeSelect').on('change', function() {
        $(inventory)
    })

    let output = [];
    let models = [];
    let years = [];

    models.push(`<option value="0">All models</option>`);
    years.push(`<option value="0">All years</option>`);

    $(inventory).each( function(i, car) {
        models.push(`<option value="${car.model}">${car.model}</option>`)        
        years.push(`<option value="${car.year}">${car.year}</option>`)        
        output.push(`
        <div class="col-md-4">
            <img class="img-responsive" src="${car.image}" alt="">
            <h3>${car.year} ${car.make} ${car.model}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, consequuntur?</p>
            <div class="row">
                <div class="col-xs-6">
                    <p class="price">$${car.price}</p>
                </div>
                <div class="col-xs-6 text-right">
                    <button class="btn btn-default">Add tax</button>
                </div>
            </div>
        </div>
        `);

        $('.ajax-inventory').html(output);
        $('#modelSelect').html($.unique(models));
        $('#yearSelect').html($.unique(years));
        //console.log(car);
    });

    setTimeout( function() {
        $('.ajax-inventory .loading').hide(300);
    }, 2000);

    $('#search-form').on('submit', function(e)  {
        e.preventDefault();
        const formData = $(this).serializeArray();

        formData.filter(function(cars) {
            output2 = [];
            $(cars).each( function(i, car) {
                //console.log(car.name)
                if( car.name == 'model'  ) {
                    output2.push(`
                    <div class="col-md-4">
                        <img class="img-responsive" src="${car.image}" alt="">
                        <h3>${car.year} ${car.make} ${car.model}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, consequuntur?</p>
                        <div class="row">
                            <div class="col-xs-6">
                                <p class="price">$${car.price}</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <button class="btn btn-default">Add tax</button>
                            </div>
                        </div>
                    </div>
                    `);
                }
               // $('.ajax-inventory').html(output2);
                $('.ajax-inventory').html(`<div class="col-md-12">
                    <h2 class="text-center">Nothing found...</h2>
                </div>`);

            });
        })

        //console.log(formData);
    });

});