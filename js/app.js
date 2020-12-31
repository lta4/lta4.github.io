console.log("hello world");

//////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET
//////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1nkqxGiQQqLYrhYJf3PPX4E41jCEUxImH-Yxgf1fbWGA/1/public/full?alt=json")
.then((data) => {
    // CHECKING MY DATA
    console.log(data)

    // //PUT OUR PROJECTS IN A VARIABLE
    // const rawProjects = data.feed.entry

    // //log our projects
    // console.log(rawProjects)

    //prettify our projects array
    const projects = data.feed.entry.map((item) => {
        return {
            name: item.gsx$name.$t,
            img: item.gsx$img.$t,
            // description: project.gsx$description.$t,
            live: item.gsx$live.$t,
            github: item.gsx$github.$t
        }
    })

    console.log(projects)

    const final = projects.map((project) => {
        return `
        <my-card name=${project.name} img=${project.img} live=${project.live} github=${project.github}></my-card>
        `
    })

    console.log(final)

    const $section = $("section")

    $section.html(final.join(""))
    ///////////////////////////
    //USE JQUERY TO RENDER PROJECTS TO PAGE
    ///////////////////////////




    ///////////////////////////////////////
})

//////////////////////////////////////////
// PHP VALIDATION
///////////////////////////////////////////

/////PHP EMPTY TO CHECK FOR EMPTY FIELDS
// if (empty($_POST["name"]))
// {
//     echo "Name is required";
// }

/////PASS NON EMPTY VALUES TO FILTER INPUT
// function test_input($data)
// {
//     $data = trim($data);
//     $data = stripslashes($data);
//     $data = htmlspecialchars($data);
//     return $data;
// }

///////APPLY PREGMATCH TO GET USER INPUT IN CORRECT FORMAT
// preg_match("/^[a-zA-Z ]*$/"_POST['name']);
// preg_match("/([w-]+@[w-]+.[w-]/",$POST['email']);

////////MAIL MESSAGE WITH PHP MAIL
// MediaList("receiver_mail_id@xyz.com",$msg, $header);

////////////////////////////////
// PULL DATA FROM BLOG FROM HEADLESS CMS
/////////////////////////////////
