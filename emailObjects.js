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
    subject: "IELTS Task 1, what can I expect? ",
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
                    margin: 0 15%;
                    width: 70%;
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
            <p class="mini-heading">Tip of the Day <span class="tip-day">Conclude</span></p>
           <p>You're almost there, but don't celebrate just yet. Check your essay for errors, typos, and other embarrassing stuff. Make sure your essay is organised and easy to follow. If you're feeling brave, ask a friend to read it over and give you some feedback. </p> 
           <h2>Not so fast… </h2>
           <p>The steps outlined in the previous emails may be a good summary of what you need to do to achieve a high score in your IELTS writing, but what you need more than that is to see these steps in action. So lets write an essay together using these steps (with a few extra tips and tricks), at the end of this course you should have the necessary knowledge and confidence to write an awesome IELTS Task 1 essay! <a>Insert Link Here</a></p>
            <p class="mini-heading">What are we dealing with? </p>  
            <p>You can't go into battle without knowing who your enemy is: </p> 
            <blockquote>
                <p>If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.</p>
                <footer style="color: black;">- Sun Tzu, The Art of War</footer>
            </blockquote> 
            <p>Let's break down all the different types of graphs, charts, and diagrams you might encounter in IELTS Writing Task 1. From line graphs to process diagrams, we'll cover it all! So, take a deep breath and let's dive in. </p> 
            <p style="font-weight: bold;">Line Graphs </p> 
            <p>Line graphs show trends over time. They're like a timeline of data that you can use to compare changes over days, months, or years. </p> 
            <p style="font-weight: bold;">Bar Charts </p>
            <p>Bar charts show comparisons between different groups or categories. They can be vertical or horizontal and are like the bar graphs you may have seen in math class (but don't worry, we won't make you do any calculations!). </p>
            <p style="font-weight: bold;">Pie Charts </p> 
            <p>Pie charts show the distribution of data as percentages of a whole. They're like a delicious pie that's sliced up into different flavours (except, you know, with data instead of pie). </p>
            <p style="font-weight: bold;">Tables </p> 
            <p>Tables present data in rows and columns. They're like a spreadsheet that you can use to organise lots of different types of information, from sales figures to survey results. </p>
            <p style="font-weight: bold;">Maps </p> 
            <p>Maps show geographical information, such as population density or land use. They're like a treasure map that leads you to the treasure of data (okay, maybe not that exciting, but still pretty cool!). </p>
            <p style="font-weight: bold;">Process Diagrams </p> 
            <p>Process diagrams show a sequence of events or steps. They're like a flowchart that you can use to visualise how something works or how a process can be improved. </p> 
            <p>Okay, now that you know the enemy, how do you tackle it? Simple, with becausewrite. <a>Insert Link</a></p> 
            <p class="mini-heading">Remember</p> 
            <blockquote>
                <p>Writing is the anchor of our thoughts, the vessel of our imagination, and the conduit through which we share the legacy of our minds with the world.</p>
                <footer style="color: black;">- Khanya.</footer>
            </blockquote>
            <!-- Footer -->
        </div>
    </body>
    
    </html>
    `,
  },
  {
    subject: "What about task 2? ",
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
                text-align: left;
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
                content: 'X86';
            }
    
            blockquote p::after {
                content: 'X86';
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
                    margin: 0 15%;
                    width: 70%;
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
           <p>You've got task 1 in the bag. Alright, on to task 2. You're probably feeling overwhelmed. But worry not, in this email we'll provide you with a step-by-step approach to ease your mind. </p> 
           <p class="mini-heading">What are the next steps?</p>  
           <p>We'll follow the same procedure as we did for task 1 in the previous emails.></p>
            <p style="font-weight: bold;">Step 1: Understand the Task</p> 
            <p>Read the essay question carefully and make sure you understand what is being asked of you. Pay attention to the topic, the task instructions, and the key words used. If you don't understand something, don't just guess! Look up the meaning of words and phrases you don't know. </p> 
            <p style="font-weight: bold;">Step 2: Plan Your Essay</p> 
            <p>Now that you know what you're dealing with, it's time to plan your essay. Your essay should have four parts: an introduction, two or three main body paragraphs, and a conclusion. In your intro, provide background information on the topic and state your position. In the body, present your arguments and supporting evidence. </p> 
            <p style="font-weight: bold;">Step 3: Write Your Essay </p>
            <p>This is the part where you put pen to paper (or fingers to keyboard). Use proper grammar, vocabulary, and sentence structure. Include a variety of sentence structures to demonstrate your command of the English language. Use linking words and phrases to connect your ideas and make your essay easy to follow. </p>
            <p style="font-weight: bold;">Step 4: Check Your Essay </p> 
            <p>You're almost there, but don't celebrate just yet. Check your essay for errors, typos, and other embarrassing stuff. Make sure your essay is organised and easy to follow. If you're feeling brave, ask a friend to read it over and give you some feedback. </p>
            <h2>Example</h2> 
            <p style="font-weight: bold;">IELTS Writing Task 2 Question </p> 
            <p>Some people argue that it is the responsibility of individuals to lead a healthy lifestyle, while others believe that governments should promote healthy lifestyle choices. Discuss both views and give your own opinion.
            </p> 
            <p>Write at least 250 words.</p>  
            <p class="mini-heading">Writing the introduction</p> 
            <p>The purpose of an introduction is to provide the reader with a clear overview of your upcoming essay.</p> 
            <ul>
                <li>> Introduce the topic and provide background information.</li>
                <li>> State your position on the topic.</li>
                <li>> Preview your arguments in the body paragraphs.</li>
                <li>> Aim for concise and effective communication.</li>
            </ul> 
            <p style="font-weight: bold;">Remember: This is only an example. Just ensure you keep the points above in mind.</p> 
            <p><em style="color: black;">In recent years, many people have become more aware of the importance of leading a healthy lifestyle. While some believe that this is a personal responsibility, others argue that governments should be responsible for promoting healthy lifestyle choices. In this essay, I will argue that individuals should take responsibility for their own health. First, I will explore the benefits of personal responsibility. Second, I will examine the limitations of government intervention. Finally, I will offer some practical advice for individuals who want to improve their health.</em></p> 
            <p class="mini-heading">Writing the Key Features</p> 
            <p>The next step is to write about the key features, which are the arguments you will present in your essay. It is advisable to dedicate one paragraph to each argument and support it with evidence and examples.</p> 
            <p style="font-weight: bold;">What to include in each body paragraph?</p> 
            <ul>
                <li>> A clear topic sentence that presents the argument.</li>
                <li>> Supporting evidence that explains and supports the argument.</li>
                <li>> Examples that illustrate the argument.</li>
                <li>> A concluding sentence that links back to the thesis statement.</li>
            </ul>
            <p>The easiest way to achieve this is to use the PEEL method when structuring your paragraphs.</p> 
            <p class="mini-heading">What is a PEEL Paragraph?</p> 
            <ul style="font-weight: bold;">
                <li>Step 1: Identify your Point.</li>
                <li>Step 2: Incorporate Your Example</li>
                <li>Step 3: Explain How your Example Supports Your Point</li>
                <li>Step 4: Finish of with Your Link</li>
            </ul> 
            <a class="mini-heading" href="https://artofsmart.com.au/english/peel-paragraph/">Learn More About PEEL:</a>
            <p class="mini-heading">Example Body Paragraph:</p>
            <p>One benefit of personal responsibility is that individuals are more likely to take their health seriously. When people are responsible for their own health, they are more likely to exercise regularly, eat a healthy diet, and get enough sleep. For example, a study conducted by the American Heart Association found that people who take personal responsibility for their health have a lower risk of heart disease. In contrast, people who rely on government programs to promote healthy lifestyle choices may not take their health as seriously.</p>  
            <p class="mini-heading">Writing the conclusion</p>
            <p>The purpose of a conclusion is to summarize your arguments and restate your position on the topic.</p>
            <ul>
                <li>> Summarize your key arguments.</li>
                <li>> Restate your position on the topic.</li>
                <li>> Provide a final thought or call to action.</li>
            </ul>
            <p class="mini-heading">Example Conclusion</p>  
            <p>In conclusion, individuals should take responsibility for their own health. Personal responsibility leads to a healthier lifestyle and a lower risk of disease. While governments can play a role in promoting healthy lifestyle choices, they should not be solely responsible for individuals' health. By taking personal responsibility and making healthy choices, individuals can improve their quality of life and reduce their risk of illness.</p>
            <!-- Footer -->
        </div>
    </body>
    
    </html>`,
  },
  //   {
  //     subject: "",
  //     html: ``,
  //   },
];

module.exports = {
  welcomeEmail,
  emailTips,
};
