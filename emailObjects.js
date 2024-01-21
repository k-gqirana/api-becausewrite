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
    html: "",
  },
];

module.exports = {
  welcomeEmail,
};
