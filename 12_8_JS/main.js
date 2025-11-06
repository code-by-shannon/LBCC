const data = [];
console.log(data.length);

data.push(
    {
        name: 'Alice',
        status: 'active'
    }
);

data.push(
    {
        name: 'Bob',
        status: 'inactive'
    }
);

function showStatuses(){
    for(let element of data){
        console.log(element.name +  ' is ' + element.status);
    }
}

showStatuses();



const jsonText = JSON.stringify(data);
console.log(jsonText);

const newData = JSON.parse(jsonText);
console.log(newData);

for(let element of newData){
    console.log(element.name);
}