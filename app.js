const convertTemp = document.getElementById('fval');

document.getElementById('btn').addEventListener('click', function(){
    let tValue = parseFloat(convertTemp.value);
    document.getElementById('cval').innerHTML = (1.8 * tValue) + 32;
});
