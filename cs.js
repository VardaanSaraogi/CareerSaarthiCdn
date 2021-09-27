class careersaarthi{

  static renderPackages(parent , arr){
    function extractData(item){
      if(item === "Career Planning Package"){
        let obj = {
          avatar:"https://www.careersaarthi.com/wp-content/uploads/2021/07/cpp.png",
          description:
          `
          Our most popular & highly acclaimed package that leverages our AI based Psychometric assessment to discover student’s strengths with a personalized 30 page comprehensive report for a suitable career path and clear actionable roadmap.

          `,
          link:"#"
        }
        return obj;
      }
      else if(item === "India Complete Package"){
        let obj = {
          avatar:"https://www.careersaarthi.com/wp-content/uploads/2021/07/india.png",
          description:
          `
          Career Planning package + College shortlisting + Admission forms filling assistance + Interview Preparations + SOP, Essays, Resume writing assistance


          `,
          link:"#"
        }
        return obj;
      }
      else if(item === "International Complete Package"){
        let obj = {
          avatar:"https://www.careersaarthi.com/wp-content/uploads/2021/07/international.png",
          description:
          `
          Career Planning package + Country selection + University selection + Admission forms filling assistance + Interview Preparations + SOP, Essays, Resume writing assistance + Visa interview preparation


          `,
          link:"#"
        }
        return obj;
      }
      else if(item === "Career Planning for Professionals"){
        let obj = {
          avatar:"https://www.careersaarthi.com/wp-content/uploads/2021/07/worker.png",
          description:
          `
          A package for professionals that leverages our AI based Psychometric assessment to discover strengths with a personalized 30 page comprehensive report for a suitable career path and clear actionable roadmap

          `,
          link:"#"
        }
        return obj;
      }
    }
    parent.innerHTML +=
    `
    <div class="section-container"></div>

    `
    function renderEach(item){  
      let parsedItem = extractData(item);
      parent=document.querySelector('.section-container')
      parent.innerHTML += `
      <div class="container-cs">
      <img class="icon" src="${parsedItem.avatar}" width="280" height="280" alt="ccp" title="cpp">
        <h3 class="container-heading">${item}</h3>
        <p>
        ${parsedItem.description}
        </p>
        <a href = "${parsedItem.link}" class="button-a">
          Know More 
        </a>
        </div>
      `
    }
    try{  parent.classList.add('main-section')
  }catch(e){
   return console.error('Argument must be an HTML element')
  }
  if(parent.nodeName !== 'SECTION'){console.warn("Parent element is recommended to be a section")}
  document.title+= " | Career Saarthi"
    arr.forEach(item=>{
      renderEach(item);    
    })
  
  }
  static renderAbout
}
