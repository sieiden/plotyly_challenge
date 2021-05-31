function optionChanged(){

    //Get input value from drop down
    let bio = d3.select("#selDataset").node().value;

    //build plot with new data
    buildPlot(bio);
};

function buildPlot(bio){
    d3.json("././samples.json").then(function(data){
        let ids = data.samples.map(d =>d.id);
        let sample_value = data.samples.map(d =>d.sample_values);
        let otu_ids = data.samples.map(d =>d.otu_ids);
        let otu_labels = data.samples.map(d =>d.otu_labels);
        console.log(bio);
        let filteredData = data.samples.filter(d => d.id === bio);
        console.log(filteredData);
        // ids.forEach((i)=>{
        //     if(bio === i){
        //         console.log(sample_value)
        //     }
        // });
        // console.log(ids.indexOf('943'));
        // let trace1 = {
        //     y: otu_ids,
        //     x: sample_value,
        //     orientation:'h',
        //     type:"bar"
        // };
        // let data1 = [trace1];
        // let layout = {
        //     title: "Top 10 Bacteria Cultures Found"
        // }
          
        // Plotly.newPlot('bar', data1, layout);
    });
};

// //load in initial bio data
function init(){
    //read data
    d3.json("././samples.json").then((samples)=>{
    console.log(samples);

    //build dropdownMenu with initial page being blank
    let ids = samples.names
    let selector = d3.select("#selDataset");
    selector.append("option").text("");
    ids.forEach((i)=>{
        let option = selector.append("option");
        option.text(i);
    });
    //make all dashboard blank
});
};


init();


