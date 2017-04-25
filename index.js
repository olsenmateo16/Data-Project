function getLADataFromAPI(){
    var endpoint = 'https://data.lacity.org/resource/ngkp-kqkn.json'
    var inputEl = document.getElementById('search')
    var searchTerm = inputEl.value.toUpperCase()
    
    fetch(endpoint)
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        var finalHTML = ''
        var wantedData = json.filter(function(item){
            return item.city
            // console.log(item.city)
            // if (searchTerm === item.city) {
            //     return true
            // }
            // return false
        })
        
        console.log(wantedData)
        
        
        wantedData.forEach(function(item){
            finalHTML += 
            `
                <div class="col s6 m6">
                  <div class="card">
                    <div class="card-image">
                      <img src="http://placehold.it/300x250">
                      <span class="card-title">${item.business_name}</span>
                    </div>
                    <div class="card-content">
                      <p>
                        ${item.primary_naics_description}
                      </p>
                      <p>
                        ${item.street_address}
                      </p>
                    </div>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
            `
        })
        
        document.getElementById('result').innerHTML = finalHTML
        console.log(wantedData)
    })
    .catch(function(error){
        console.log(error)
    })
}