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

    var payments = [];
    var total;
    function calcTaxes(amount) {}
    var tax = 0;
    
                    if(amount <= 250000){
                    tax = (amount ) * 0.08 + 250000
                    } 
                    
                    if,('cost > 250000) && cost <= 500000) {
                        tax = (income - 250000)*10/100);
                    }
                    if(income > 500000 && cost <= 1000000) {
                        tax = 250000 + ((income -500000)*20/100);

                    if(income > 1000000) {
                        tax = (25000 + 100000) + ((income-250000)*30/100);
                    } 

            

                        console.log($(this).attr('value'));
  
// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}