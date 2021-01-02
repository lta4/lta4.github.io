/***************FORMSPREE PROVIDER*************/
// import { FormspreeProvider } from '@formspree/react';
// function App({ Component, pageProps }) {
//   return (
//     <FormspreeProvider project="1578988433538284848">
//       <Component {...pageProps} />
//     </FormspreeProvider>
//   );
// }
// export default App;

// {
//     "forms": {
//       "signupForm": {
//         "name": "Sign-up Form",
//         "actions": [{ "app": "mailchimp", "type": "addOrUpdateContact" }]
//       }
//     }
//   }

//   import { useForm } from '@formspree/react';
//   function SignupForm() {
//     const [state, handleSubmit] = useForm('signupForm');
//     if (state.succeeded) {
//       return <div>Thank you for signing up!</div>;
//     }
//     return (
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" name="email" />
//         <button type="submit" disabled={state.submitting}>Sign up</button>
//       </form>
//     )
//   }

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
