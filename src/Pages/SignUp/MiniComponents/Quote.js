function Quote() {
    // let quoteDiv = document.getElementById('quoteDiv');

    // fetch("https://type.fit/api/quotes")
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(data) {
    //     let randomNum = Math.round(Math.random()*1000);
    //    quoteDiv.innerHTML = data[randomNum].text + "<br><br>-" + data[randomNum].author;  
    //     console.log(data[0].text);
    //   });

  
        
              fetch("https://type.fit/api/quotes")
            .then(function (response) {
                return response.json();
            })
            .then(function loadQuote(data) {
                let randomNum = Math.round(Math.random() * 1000);
                return (
                    <>
                        
                            {data[randomNum].text}
                                <br />
                                <br />
                            {data[randomNum].author}
                        
                    </>
                )
            });



    // function loadQuote() {
    //     const data = loadQuoteData();
        
    //     console.log(data);
    //     let randomNum = Math.round(Math.random() * 1000);
    //     return (
    //         <>
                
    //                 {data[randomNum].text}
    //                     <br />
    //                     <br />
    //                 {data[randomNum].author}
                
    //         </>
    //     )
    // }




    return (
        <>
            <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
                <div className="self-start hidden lg:flex flex-col  text-gray-300">

                    <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
                    <p className="pr-3 text-sm opacity-75" id="quoteDiv"></p>
                </div>
            </div>
        </>
    )
}

export default Quote;