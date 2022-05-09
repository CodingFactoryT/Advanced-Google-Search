document.getElementById('search-text').select();

function search(){
    var text = document.getElementById('search-text').value;
    window.open('https://www.google.com/search?q=' + text + '&as_filetype=pdf');
}

function ifEnterSearch(e){
    if(e.keyCode == 13){
        search();
    }
}

document.getElementById('search-text').addEventListener('keydown', ifEnterSearch)
document.getElementById('search-button').addEventListener('click', search);
