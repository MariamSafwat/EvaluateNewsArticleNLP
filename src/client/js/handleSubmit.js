import { linkChecker } from "./linkChecker";

async function handleSubmit(event) {
  event.preventDefault();
  
  let formText = document.getElementById("article-url").value;
  // check if the text is url
  if (linkChecker(formText)) {
    try {
      
      let submitBtn = document.getElementById("btn-submit");
      // Call api to get response data
      const apiCall = await fetch(`http://localhost:8081/scan/${formText}`);
      const apiResponse = await apiCall.json();
      console.log(apiResponse);
      // Update the form elements
      document.getElementById("text").innerHTML = `Text: ${apiResponse.sentence_list[0].text.toLowerCase()}`;
      document.getElementById("agreement").innerHTML = `Agreement: ${apiResponse.agreement.toLowerCase()}`; 
      document.getElementById("subjectivity").innerHTML = `Subjectivity: ${apiResponse.subjectivity.toLowerCase()}`;
      document.getElementById("confidence").innerHTML = `Confidence: ${apiResponse.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${apiResponse.irony.toLowerCase()}`;

    } catch (err) {
      console.log(err.message);   
    }
  } else {
    alert("Please type a valid url");
  }
}

export { handleSubmit };
