exports.calculatePostage = calculatePostage;
function calculatePostage(weight, type){
    let index = -1;
    if ( type == 'stamped' || type == 'metered'){
        let cutoffs = [1,2,3,3.5];
        for (let i = 0; i < 4; i++) {
            if (weight < cutoffs[i]){
                index = cutoffs[i];
                break;
            }
        }
    } else {
        for (let i = 0; i <= 13; i++){
            if (weight < i) {
                index = i;
                break;
            }
        }
    }

    return prices[index.toString()git ][type];
}

exports.test = function (){
    let results = {
        'stamped': {},
        'metered': {},
        'flat': {},
        'retail': {}
    };
    let types = ["stamped","metered","flat","retail"];
    for (let t = 0; t < 4; t++) {
        for (let i = 0; i <= 13; i += 0.5) {
            results[types[t]][i] = calculatePostage(i, types[t]);
        }
    }
    console.log(results);
};

let prices = {
    "1": {
        'stamped': 0.50,
        'metered': 0.47,
        'flat': 1,
        'retail': 3.50
    },
    "2": {
        'stamped': 0.71,
        'metered': 0.68,
        'flat': 1.21,
        'retail': 3.50
    },
    "3": {
        'stamped': 0.92,
        'metered': 0.89,
        'flat': 1.42,
        'retail': 3.50
    },
    "3.5": {
        'stamped': 1.13,
        'metered': 1.10,
        'flat': 1.63,
        'retail': 3.50
    },
    "4": {
        'stamped': -1,
        'metered': -1,
        'flat': 1.63,
        'retail': 3.50
    },
    "5": {
        'stamped': -1,
        'metered': -1,
        'flat': 1.84,
        'retail': 3.75
    },
    "6": {
        'stamped': -1,
        'metered': -1,
        'flat': 2.05,
        'retail': 3.75
    },
    "7": {
        'stamped': -1,
        'metered': -1,
        'flat': 2.26,
        'retail': 3.75
    },
    "8": {
        'stamped': -1,
        'metered': -1,
        'flat': 2.47,
        'retail': 3.75
    },
    "9": {
        'stamped': -1,
        'metered': -1,
        'flat': 2.68,
        'retail': 4.10
    },
    "10": {
        'stamped': -1,
        'metered': -1,
        'flat': 2.89,
        'retail': 4.45
    },
    "11": {
        'stamped': -1,
        'metered': -1,
        'flat': 3.10,
        'retail': 4.80
    },
    "12": {
        'stamped': -1,
        'metered': -1,
        'flat': 3.31,
        'retail': 5.15
    },
    "13": {
        'stamped': -1,
        'metered': -1,
        'flat': 3.52,
        'retail': 5.50
    }
};
