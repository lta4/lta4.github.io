//////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET
//////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1nkqxGiQQqLYrhYJf3PPX4E41jCEUxImH-Yxgf1fbWGA/1/public/full?alt=json")
.then((data) => {
    

    //prettify our projects array
    const projects = data.feed.entry.map((item) => {
        return {
            name: item.gsx$name.$t,
            img: item.gsx$img.$t,
            live: item.gsx$live.$t,
            github: item.gsx$github.$t
        }
    })

    const final = projects.map((project) => {
        return `
        <my-card name=${project.name} img=${project.img} live=${project.live} github=${project.github}></my-card>
        `
    })

    const $section = $("section")

    $section.html(final.join(""))
    ///////////////////////////
    //USE JQUERY TO RENDER PROJECTS TO PAGE
    ///////////////////////////

    $(document).ready(function(){

        $('a[href=https://codepen.io/Lta4/full/JjKavmN]').click(function(){
          window.open(this.href);
          return false;
        });
      });
})

////////////////////////////////
// PULL DATA FROM BLOG FROM HEADLESS CMS
/////////////////////////////////
