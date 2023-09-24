

// Years Counter

    let yearsShooter = 0
    window.addEventListener('scroll', function(){
        let years = 0;
        let yearsCounter = document.getElementById("years-counter");

        let objectPosition = yearsCounter.getBoundingClientRect().top;
        let screenSize = window.innerHeight/1.5;
            if(objectPosition < screenSize){
                if( yearsShooter === 0 ){
        
                window.setInterval(function(){
                    yearsCounter.innerHTML = years;
                    if(years<2){
                        years++;
                    };
                },300);
            }
            yearsShooter = 1
        }

    });


// Flights Counter

    let flightsShooter = 0
    window.addEventListener('scroll', function(){
        let flights = 0;
        let flightsCounter = document.getElementById("flights-counter");

        let objectPosition = flightsCounter.getBoundingClientRect().top;
        let screenSize = window.innerHeight/1.5;
            if(objectPosition < screenSize){
                if( flightsShooter === 0 ){
        
                window.setInterval(function(){
                    flightsCounter.innerHTML = flights;
                    if(flights<200){
                        flights = flights + 5;
                    };
                },20);
            }
            flightsShooter = 1
        }

    });


// Km Counter

    let kmShooter = 0
    window.addEventListener('scroll', function(){
        let km = 0;
        let kmCounter = document.getElementById("km-counter");

        let objectPosition = kmCounter.getBoundingClientRect().top;
        let screenSize = window.innerHeight/1.5;
            if(objectPosition < screenSize){
                if( kmShooter === 0 ){
        
                window.setInterval(function(){
                    kmCounter.innerHTML = km;
                    if(km<400000){
                        km = km + 3125;
                    };
                },4);
            }
            kmShooter = 1
        }

    });


// Km Counter

    let paxShooter = 0
    window.addEventListener('scroll', function(){
        let pax = 0;
        let paxCounter = document.getElementById("pax-counter");

        let objectPosition = paxCounter.getBoundingClientRect().top;
        let screenSize = window.innerHeight/1.5;
            if(objectPosition < screenSize){
                if( paxShooter === 0 ){
        
                window.setInterval(function(){
                    paxCounter.innerHTML = pax;
                    if(pax<800){
                        pax = pax + 10;
                    };
                },4);
            }
            paxShooter = 1
        }

    });

