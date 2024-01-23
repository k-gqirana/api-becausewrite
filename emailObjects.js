// Add URL to resource page at the bottom
const welcomeEmail = {
  subject: "Well, that's a step in the right direction.",
  html: `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
              background-color: rgb(255, 225, 188);
              color: rgb(221, 114, 5);
          }
  
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: white;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          h1 {
              color: rgb(221, 114, 5);
          }
  
          p {
              margin-bottom: 15px;
            color: black;
          }
  
          a {
              color: rgb(221, 114, 5);
              text-decoration: none;
              font-weight: bold;
          }
  
          .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: rgb(221, 114, 5);
              color: white;
              border-radius: 5px;
              text-decoration: none;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <h1>Welcome to Because Write!</h1>
          <p>Thank you for subscribing to our IELTS exam tips service. We are thrilled to have you on board as we help you prepare and succeed in your IELTS journey.</p>
          <p>At Because Write, we understand the importance of achieving your best score, and we're here to support you every step of the way. Our expert tips and resources will empower you to excel in your IELTS exam.</p>
          <p>To get started, explore our latest tips and insights on our <a href="[Your Landing Page URL]" target="_blank">landing page</a>. Feel free to reach out if you have any questions or need assistance.</p>
          <p>Best of luck with your IELTS preparation!</p>
          <p>Warm regards,</p>
          <p>The Because Write Team</p>
          <p><a href="[Your Contact Page URL]" class="button">Get More Tips here</a></p>
      </div>
  </body>
  
  </html>
    `,
};

const emailTips = [
  {
    subject:
      "I'm writing the IELTS exam, in a month, and I feel like I'm nowhere ... ",
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: rgb(255, 225, 188);
                color: rgb(221, 114, 5);
            }
    
            .container {
                max-width: 650px; /* Fixed width for desktop screens */
                margin: 20px auto;
                padding: 20px;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            }
    
            h2 {
                color: rgb(221, 114, 5);
            }
    
            p {
                margin-bottom: 15px;
                font-size: 18px; /* Adjusted font size for <p> tags */
                color: black;
            }
    
            em {
                color: rgb(221, 114, 5);
                font-style: italic;
            }
    
            img {
                max-width: 100%;
                height: auto;
                display: block;
                margin: 10px 0;
            }
    
            ul {
                padding: 2%;
                text-align: left;
                color: black;
                font-size: 16px;
            }
    
            li {
                margin-bottom: 8px;
                display: flex;
                align-items: center;
            }
    
            h6 {
                color: rgb(221, 114, 5);
            }
    
            .mini-heading {
                color: rgb(221, 114, 5);
                font-size: 1.15rem;
            }
    
            .tip-day {
                font-weight: bold;
            }
    
            /* Graph Colors */
            .glass {
                color: #bc3e53;
            }
    
            .aluminim {
                color: #77b894;
            }
    
            .paper {
                color: #5b84a5;
            }
    
            .plastics {
                color: #b3856a;
            }
    
            blockquote {
                margin-left: 20%;
                width: 60%;
            }
    
            blockquote p {
                padding: 15px;
                background: rgb(255, 225, 188);
                border-radius: 5px;
            }
    
            blockquote p::before {
                content: 'x81';
            }
    
            blockquote p::after {
                content: 'x82';
            }
    
            /* Responsive Styles */
            @media only screen and (max-width: 600px) {
                .container {
                    padding: 10px;
                    border-radius: 10px; /* Remove border radius for full-width */
                    width: 80%; 
                    margin: 2% 8%;
                }  
    
                .container h2{
                    font-size: 15px;
                }
                .container p{
                    font-size: 13px;
                }
    
                .container ul {
                    padding-left: 10px;
                    font-size: 12px; 
                }
    
                blockquote {
                    margin-left: 25%;
                    width: 50%;
                }
            }
    
            @media only screen and (max-width: 768px) {
                h2 {
                    font-size: 28px;
                }
    
                p {
                    font-size: 18px;
                }
    
                ul {
                    padding-left: 30px;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <h2>Worry not, at Because Write, we got You!</h2>
            <p>Hey there, are you preparing for the IELTS exam? You're probably stressing about the Writing Task 1. But don't worry, we've got your back! In this email, we'll give you a sneak peek of the details on how to write an awesome IELTS Task 1 essay without losing your mind.</p>
    
            <p class="mini-heading">Tip of the Day: <span class="tip-day">Read and Understand the Task!</span></p>
            <img src="../assets/Task_1_Line_Graph.jpg" />
            <p class="mini-heading">Rephrasing the question:</p>
            <p>"This graph shows the proportions of four different materials that were recycled from 1982 to 2010 in a particular country."</p>
            <p class="tip-day">Becomes:</p>
            <p>“<span class="glass">The line graph displays the recycling trends</span> of a <span class="aluminim">select few materials</span> <span class="paper">over the span of almost 3 decades from 1982 to 2010 </span>  <span class="plastics"> in a specific region. </span>”</p>
            <p class="tip-day">A breakdown:</p>
            <ul>
                <li>“This graph shows the proportions of” —> <span class="glass"> The line graph displays the recycling trends of </span></li>
                <li>“four different materials” —> <span class="aluminim">a select few materials </span></li>
                <li>“from 1982 to 2010” —> <span class="paper"> "over the span of almost 3 decades from 1982 to 2010 </span></li>
                <li>“in a particular country” —> <span class="plastics"> in a specific region </span></li>
            </ul>
            <p>Now that we understand the task, let's write the introduction.</p>
            <p class="mini-heading">Writing the Introduction!</p>
            <p>The purpose of an introduction is to provide the examiner with a clear overview of your upcoming writing.</p>
            <ul>
                <li>1. Rephrase the question in your own words.</li>
                <li>2. Explain the visual diagram's nature, data source, and collection timeframe.</li>
                <li>3. For two diagrams, give a brief introduction for each.</li>
                <li>4. Aim for concise and effective communication.</li>
            </ul>
            <p class="mini-heading">Remember</p>
            <blockquote>
                <p>Any fool can know. The point is to understand.</p>
                <footer style="color: black;">- Albert Einstein</footer>
            </blockquote>
            <!-- Footer -->
        </div>
    </body>
    
    </html>
    `,
  },
  {
    subject: "Why you worried? We said we got you.",
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: rgb(255, 225, 188);
                color: rgb(221, 114, 5); 
                font-family: sans-serif;
            }
    
            .container {
                max-width: 650px; /* Fixed width for desktop screens */
                margin: 20px auto;
                padding: 20px;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            } 
    
            h2 {
                color: rgb(221, 114, 5);
            }
    
            p {
                margin-bottom: 15px;
                font-size: 18px; /* Adjusted font size for <p> tags */
                color: black;
            }
    
            em {
                color: rgb(221, 114, 5);
                font-style: italic;
            }
    
            img {
                max-width: 100%;
                height: auto;
                display: block;
                margin: 10px 0;
            }
    
            ul {
                padding: 2%;
                text-align: left;
                color: black;
                font-size: 18px; 
            }
    
            li {
                margin-bottom: 8px;
                display: flex;
                align-items: center; 
                list-style-type: disc !important;
            }
    
            h6 {
                color: rgb(221, 114, 5);
            }
    
            .mini-heading {
                color: rgb(221, 114, 5);
                font-size: 1.15rem;
            }
    
            .tip-day {
                font-weight: bold;
            }
    
            /* Graph Colors */
            .glass {
                color: #bc3e53;
            }
    
            .aluminim {
                color: #77b894;
            }
    
            .paper {
                color: #5b84a5;
            }
    
            .plastics {
                color: #b3856a;
            }
    
            thead,
            tfoot {
                background-color: rgb(221, 114, 5);
                color: #fff;
            }
    
            tbody {
                background-color: rgb(255, 225, 188);
                color: black;
            }
    
            caption {
                padding: 10px;
                caption-side: bottom; 
                color: black; 
                font-weight: bold; 
                font-size: large;
            }
    
            table {
                border-collapse: collapse;
                border: 2px solid rgb(0, 0, 0);
                letter-spacing: 1px;
                /* font-family: sans-serif; */
                font-size: 16px;
            }
    
            td,
            th {
                border: 1px solid rgb(190, 190, 190);
                padding: 5px 10px;
                text-align: center;
            }
    
            td {
                text-align: center;
            } 
    
            a{
                text-decoration: none; 
                color: rgb(240, 167, 78);
            }
    
            blockquote {
                margin-left: 20%;
                width: 60%;
            }
    
            blockquote p {
                padding: 15px;
                background: rgb(255, 225, 188);
                border-radius: 5px;
            }
    
            blockquote p::before {
                content: '\x81';
            }
    
            blockquote p::after {
                content: '\x82';
            }
    
            /* Responsive Styles */
            @media only screen and (max-width: 600px) {
                .container {
                    padding: 10px;
                    border-radius: 10px; /* Remove border radius for full-width */
                    width: 80%; 
                    margin: 2% 8%;
                }  
    
                .container h2{
                    font-size: 15px;
                }
                .container p{
                    font-size: 12px;
                } 
    
                .container ul {
                    padding-left: 10px;
                    font-size: 12px; 
                    list-style-type: disc;
                } 
    
                table{
                    font-size: 14px;
                }
    
                blockquote {
                    margin-left: 25%;
                    width: 50%;
                }
            }
    
            @media only screen and (max-width: 768px) {
                h2 {
                    font-size: 28px;
                }
    
                p {
                    font-size: 18px;
                }
    
                ul {
                    padding-left: 30px;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <h2>Let's build on that Task 1 we sent you days back.</h2>
            <p>So, we were given a line graph and were required to summarise the main points and make relevant comparisons. Let's continue writing our essay.</p>
    
            <p class="mini-heading">Tip of the Day <span class="tip-day">Plan Your Essay</span></p>
            <img src="../assets/Task_1_Line_Graph.jpg" />
            <p class="mini-heading">The Overview:</p>
            <p>The overview in your response should summarise what you see in the visual diagram. It should summarise the main: </p>
            <ul>
                <li>> Trends</li>
                <li>> Changes</li>
                <li>> Developments</li> 
                <li>> Stages</li>
                <li>> Noticable features</li>
            </ul>
            <p class="mini-heading">What you should look out for</p>
            <table>
                <thead>
                  <tr>
                    <th>DOs</th>
                    <th scope="col">DON'Ts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Use cohesive devices to summarise the main features of the task (Overall, In summary) </th>
                    <td>Use specific data and numbers in your overview, this part is only meant to be a summary </td>
                  </tr>
                  <tr>
                    <th scope="row">Identify key trends in the data. Is there an increase, decrease or overall fluctuation in the data? Are there any maximums or minimums? Is the data consistent? </th>
                    <td>Focus on everything in the overview, the overview should only be a summary of the most notable information. </td>
                  </tr>
                </tbody>
              </table>
              <p class="tip-day">Here is our overview: </p>
              <p class="aluminim"><span class="glass">Overall</span>, paper, cardboard and glass containers were the most recycled materials, <span class="glass"> whereas</span> the rate of aluminium recycling had the most significant increase,<span class="glass"> while </span> plastics saw little to no increase over the given period.  </p> 
              <ul>
                <li>> Cohesive devices and linking words (<span class="glass">in red</span>) </li>
                <li>> Key features (<span class="aluminim">in green</span>)</li>
                <li><a href="https://7esl.com/linking-words/"> <span style="color: black;">> </span>More on Linking words and how to use them</a></li>
              </ul> 
              <p>Now we have paraphrased the question and written the overview, let's put them together to form the <span style="font-weight: bold;"> Introduction: </span> </p> 
    
              <p style="font-weight: bold;"> <em style="color: black;">The line graph displays the recycling trends of a select few materials over the span of almost 3 decades from 1982 to 2010 in a specific region. Overall, paper, cardboard and glass containers were the most recycled materials, whereas the rate of aluminium recycling had the most significant increase, while plastics saw little to no increase in recycling over the given period. </em></p>
    
            <p class="mini-heading">Remember</p>
            <blockquote>
                <p>Planning is the compass that turns dreams into reality, guiding each step with purpose and transforming uncertainty into opportunity</p>
                <footer style="color: black;">- Mpesh</footer>
            </blockquote>
            <!-- Footer -->
        </div>
    </body>
    
    </html>
    `,
  },
  {
    subject: "With becausewrite, I'm going to pass my IELTS writing tasks. ",
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: rgb(255, 225, 188);
                color: rgb(221, 114, 5); 
                font-family: sans-serif;
            }
    
            .container {
                max-width: 650px; /* Fixed width for desktop screens */
                margin: 20px auto;
                padding: 20px;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            } 
    
            h2 {
                color: rgb(221, 114, 5);
            }
    
            p {
                margin-bottom: 15px;
                font-size: 18px; /* Adjusted font size for <p> tags */
                color: black;
            }
    
            em {
                color: rgb(221, 114, 5);
                font-style: italic;
            }
    
            img {
                max-width: 100%;
                height: auto;
                display: block;
                margin: 10px 0;
            }
    
            ul {
                padding: 2%;
                text-align: left;
                color: black;
                font-size: 18px; 
            }
    
            li {
                margin-bottom: 8px;
                display: flex;
                align-items: center; 
                list-style-type: disc !important;
            }
    
            h6 {
                color: rgb(221, 114, 5);
            }
    
            .mini-heading {
                color: rgb(221, 114, 5);
                font-size: 1.15rem;
            }
    
            .tip-day {
                font-weight: bold;
            }
    
            /* Graph Colors */
            .glass {
                color: #bc3e53;
            }
    
            .aluminim {
                color: #77b894;
            }
    
            .paper {
                color: #5b84a5;
            }
    
            .plastics {
                color: #b3856a;
            }
    
            thead,
            tfoot {
                background-color: rgb(221, 114, 5);
                color: #fff;
            }
    
            tbody {
                background-color: rgb(255, 225, 188);
                color: black;
            }
    
            caption {
                padding: 10px;
                caption-side: bottom; 
                color: black; 
                font-weight: bold; 
                font-size: large;
            }
    
            table {
                border-collapse: collapse;
                border: 2px solid rgb(0, 0, 0);
                letter-spacing: 1px;
                /* font-family: sans-serif; */
                font-size: 16px;
            }
    
            td,
            th {
                border: 1px solid rgb(190, 190, 190);
                padding: 5px 10px;
                text-align: center;
            }
    
            td {
                text-align: center;
            } 
    
            a{
                text-decoration: none; 
                color: rgb(240, 167, 78);
            }
    
            blockquote {
                margin-left: 20%;
                width: 60%;
            }
    
            blockquote p {
                padding: 15px;
                background: rgb(255, 225, 188);
                border-radius: 5px;
            }
    
            blockquote p::before {
                content: '\x81';
            }
    
            blockquote p::after {
                content: '\x82';
            }
    
            /* Responsive Styles */
            @media only screen and (max-width: 600px) {
                .container {
                    padding: 10px;
                    border-radius: 10px; /* Remove border radius for full-width */
                    width: 80%; 
                    margin: 2% 8%;
                }  
    
                .container h2{
                    font-size: 15px;
                }
                .container p{
                    font-size: 12px;
                } 
    
                .container ul {
                    padding-left: 10px;
                    font-size: 12px; 
                    list-style-type: disc;
                } 
    
                table{
                    font-size: 14px;
                }
    
                blockquote {
                    margin-left: 25%;
                    width: 50%;
                }
            }
    
            @media only screen and (max-width: 768px) {
                h2 {
                    font-size: 28px;
                }
    
                p {
                    font-size: 18px;
                }
    
                ul {
                    padding-left: 30px;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <h2>Writing the Key Features of our Essay .</h2>
            <p>So, now that we have an introduction, lets write the body of the essay.</p>
            <img src="../assets/Task_1_Line_Graph.jpg" />
            <p class="mini-heading">Tip of the Day <span class="tip-day">Write you Essay</span></p>
            <p><em style="color: black;">I mean, what else was I going to do.</em>Alright then, let's put pen to paper. Use proper grammar, vocabulary, and sentence structure. If you're feeling fancy, throw in some linking words and phrases to make your essay look like it was written by a pro.</p>
            <p class="mini-heading">Writing the Key Features</p> 
            <p>The next step is to write the body, i.e., about the key features. It is advisable to split the key features into <span style="font-weight: bold;">two main bodies:</span></p>
            <p><span style="font-weight: bold;">Main Body 1: </span>Present the key features with supporting figures.</p>
            <p><span style="font-weight: bold;">Main Body 2: </span>Make comparisons if relevant or highlight more key features.</p> 
            <p style="font-weight: bold;">What to include in main body 1 and 2? </p> 
            <div><ul>
                <li>> Supporting data for each element (E.g., age groups, products, years) </li>
                <li>> Noticeable figures that stand out (E.g., Highs, lows, fluctuation or period of stability) </li>
                <li>> Figures that have increased or decreased. </li> 
                <li>> Figures that have not changed at all, that remain the same. </li>
                <li>> Names of buildings on a map (E.g., Shop, post office, library) </li> 
                <li>> Roads, pathways, or bridges shown on a map. </li>
                <li>> Things that have changed within the visual diagram (E.g.location, renovation, removal) </li>
                <li>> Things that are new (E.g., buildings, roads, facilities) </li>
                <li>> Each stage in a process </li>
                <li>> Any extra step that may be part of a process </li>
                <li>> The materials or equipment used in the process. </li>
            </ul></div> 
            <p class="mini-heading">Okay, so how do we put the proceeding to use?  </p> 
            <p>Regarding this task the key features would be: </p>
            <p>1. (Identifying the subjects/categories) The names and quantity of the different materials. - Paper & cardboard, glass containers, aluminium cans and plastics </p>
            <p>2. (Global maximums and minimums) Which is the most recycled material, and the least recycled material? - Paper and cardboard are the most recycled materials, plastics are recycled the least. </p>
            <p>3. (Looking for the notable trends) Which materials had notable fluctuations? - Aluminium cans had the most notable increase and plastics had the steadiest trend. Paper & cardboard had a high peak then a drop off. </p> 
            <p style="font-weight: bold;">Main Body 1:</p>
            <p>In 1982, paper, cardboard and glass containers were the only 2 materials that registered any recycling with rates of about 65 and 50 percent respectively, whereas the recycling of aluminium cans and plastics started at a low rate of less than 5% from the respective years of 1986 and 1990. </p>
            <p style="font-weight: bold;">Main Body 2:</p>
            <p>Over the three decades, paper and cardboard remained the most recycled materials with a significant peak of 80% in 1994 before a 10% decrease by 2010, followed by glass containers that saw some fluctuation but eventually reached 60% in the final year evaluated. In contrast, aluminium cans had a substantial and steady uptake in recycling, ultimately reaching a percentage of about 45% in 2010. Finally, plastics had the poorest growth in recycling, reaching a proportion of less than 10% by the end of the twenty-eight years. </p> 
            <p>We have an introduction and two main body points. Let's put our essay together.</p> 
            <ul>
                <li>Introduction</li>
                <li>Main Body 1</li>
                <li>Main body 2</li>
            </ul> 
            <em>
            <p>The line graph displays the recycling trends of a select few materials over the span of almost 3 decades from 1982 to 2010 in a specific region. Overall, paper, cardboard and glass containers were the most recycled materials, whereas the rate of aluminium recycling had the most significant increase, while plastics saw little to no increase in recycling over the given period. </p>
            <p>In 1982, paper, cardboard and glass containers were the only 2 materials that registered any recycling with rates of about 65% and 50% respectively, whereas the recycling of aluminium cans and plastics started at a low rate of less than 5% from the respective years of 1986 and 1990.</p> 
            <p>Over the three decades, paper and cardboard remained the most recycled materials with a significant peak of 80% in 1994 before a 10% decrease by 2010, followed by glass containers that saw some fluctuation but eventually reached 60% in the final year evaluated. In contrast, aluminium cans had a substantial and steady uptake in recycling, ultimately reaching a percentage of about 45% in 2010. Finally, plastics had the poorest growth in recycling, reaching a proportion of less than 10% by the end of the twenty-eight years.</p>
        </em>
            <p class="mini-heading">Remember</p>
            <blockquote>
                <p>Writing is the anchor of our thoughts, the vessel of our imagination, and the conduit through which we share the legacy of our minds with the world.</p>
                <footer style="color: black;">- Homiefromtheculdesac</footer>
            </blockquote>
            <!-- Footer -->
        </div>
    </body>
    
    </html>
    `,
  },
  {
    subject: "",
    html: "",
  },
];

module.exports = {
  welcomeEmail,
};
