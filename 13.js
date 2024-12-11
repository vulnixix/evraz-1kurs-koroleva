function shpuntik() {
        let kot = document.getElementById("ispugalsa?");
        let som =+ kot.value;

        let sigma = document.getElementById("yaDryg");
        let popygay = sigma.value;

        let mama = document.getElementById("vintik");
        let wave =+ mama.value;


        if (popygay === '+') {
            let krolik = document.getElementById("frog");
            krolik.innerHTML =  som + wave
        }
        else if (popygay === '*') {
            let krolik = document.getElementById("frog");
            krolik.innerHTML =  som * wave
        }

        else if (popygay === '-') {
            let krolik = document.getElementById("frog");
            krolik.innerHTML =  som - wave
        }

        else if (popygay === '/') {
            let krolik = document.getElementById("frog");
            krolik.innerHTML =  som / wave
        }

        else {
            let krolik = document.getElementById("frog");
            krolik.innerHTML =  "я не знаю такой операции"
        }


}