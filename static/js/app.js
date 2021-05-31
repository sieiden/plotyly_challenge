function optionChanged(){

    //Get input value from drop down
    let bio = d3.select("#selDataset").node().value;

    //build plot with new data
    buildPlot(bio);
};

function buildPlot(bio){
    d3.json("././samples.json").then(function(data){
        let filteredData = data.samples.filter(d => d.id === bio);
        let sample_values = filteredData[0].sample_values.sort(function(a,b){return b-a});
        let otu_ids = filteredData[0].otu_ids;
        let otu_labels = filteredData[0].otu_labels;
        console.log(filteredData);
        console.log(sample_values);
        console.log(otu_ids);
        console.log(otu_labels);

        //build horizontal bar chart
        let trace1 = {
            y: toString(otu_ids).slice(0,10),
            x: sample_values.slice(0,10),
            marker: otu_ids.slice(0,10),
            text: otu_labels,
            orientation:'h',
            type:"bar"
        };
        let data1 = [trace1];
        let layout = {
            title: "Top 10 Bacteria Cultures Found"
        }
        Plotly.newPlot('bar', data1, layout);

        //build bubble chart
        let trace2 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker:{
                color: otu_ids,
                size: sample_values
            }
        };
        let data2 = [trace2];
        let layout2 = {
            title: "Bacteria Cultures Per Sample"
        };
        Plotly.newPlot('bubble', data2, layout2);
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
});
};


init();


