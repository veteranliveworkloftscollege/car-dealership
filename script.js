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


    const carTemplate = car => {
       return `
        <div class="col-md-6 col-lg-4">
            <img class="img-responsive" src="${car.image}" alt="">
            <h3>${car.year} ${car.make} ${car.model}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, consequuntur?</p>
            <div class="row">
                <div class="col-xs-12">
                    <div class="price">
                        <p>$<span class="regular-price">${$.number(car.price)}</span>  <button id="add-tax" style="float: right;" class="btn btn-default">Add tax</button></p>
                    </div>
                   
                </div>
            </div>
        </div>
        `
    }


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
        output.push(carTemplate(car));

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

            let output2 = [];
            let count = 0;
            $(inventory).each( function(i, car) {
                if ( formData[0].value === '0' && formData[1].value === '0' ) {
                    count++;
                    output2.push(carTemplate(car));                    
                }else if( formData[0].value === car.model && formData[1].value === '0' ) {
                    count++;
                    output2.push(carTemplate(car));
                }else if( formData[0].value === '0' && formData[1].value == car.year ) {
                    count++;
                    output2.push(carTemplate(car));
                }else if( car.model === formData[0].value && car.year === parseInt(formData[1].value) ) {
                    count++;
                    output2.push(carTemplate(car));
                }

                if( count > 0 ) {
                    $('.ajax-inventory').html(output2);
                }else {
                    $('.ajax-inventory').html(`<div class="col-md-12">
                        <h2 class="text-center">Nothing found...</h2>
                    </div>`);
                }
                

            });

        //console.log(formData);
    });

    // Add taxes
    $('body').on('click', '#add-tax', function(e){
        e.preventDefault();

        let regPrice = parseInt($(this).parent().find('.regular-price').text().replace(/\,/g, ''));

        const tax = regPrice * 0.04;

        const total = regPrice + tax;

        $(this).parent().find('.regular-price').html($.number(total));
        $(this).attr('disabled', true);
    })
});