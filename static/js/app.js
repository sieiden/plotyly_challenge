//load in bio data
function init(){
    //read data
    d3.json("././samples.json").then((samples)=>{
    console.log(samples);

    //build dropdownMenu
    let names = samples.names
    let selector = d3.select("#selDataset");
    names.forEach((i)=>{
        let option = selector.append("option");
        option.text(i);
    });
    //build demographic table for sample 940
    console.log(samples.metadata[0]);
});
};

init();


// function optionChanged(){
//     //select dropdown menu and select value
//     let dropdownMenu = d3.select("#selDataset");
//     let dataset = dropdownMenu.property("value");

//     //Initialize x and y arrays
//     let x = [];
//     let y = [];


// }
