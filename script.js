async function myFunction5() {

      let url ='https://api.thingspeak.com/channels/1659439/feeds.json?results=1';
        const fetchResults = await fetch(url);
        const jsonResult = await fetchResults.json();
        const feedsResults = jsonResult.feeds;
       
        for (const i in feedsResults) {
          if(feedsResults[i].field1==1){
          document.getElementById("vihrea").setAttribute("id", "punainen");
          }
          else{
          document.getElementById("punainen").setAttribute("id", "vihrea");
          }
      }
        }
myFunction5();