class careersaarthi{

  static renderPackages(parent){
    try{  parent.classList.add('main-section')
  }catch(e){
   return console.error('Argument must be an HTML element')
  }
  if(parent.nodeName !== 'SECTION'){console.warn("Parent element is recommended to be a section")}
  document.title+= " | Career Saarthi"


    parent.innerHTML =  
      `
      <div class="section-container">
  
    <!-- 
      colors:#39F57F7 ,  #515EF3
     -->
     <div class="container-cs container-1">
      <img class="icon" src="https://www.careersaarthi.com/wp-content/uploads/2021/07/cpp.png" width="280" height="280" alt="ccp" title="cpp">
        <h3 class="container-heading">Career Planning Package</h3>
        <p>
          Our most popular & highly acclaimed package that leverages our AI based Psychometric assessment to discover student’s strengths with a personalized 30 page comprehensive report for a suitable career path and clear actionable roadmap.
        </p>
        <a href = "" class="button-a">
          Know More 
        </a>
     </div>
     <div class="container-cs container-2">
      <img class="icon" src="https://www.careersaarthi.com/wp-content/uploads/2021/07/india.png" width="258" height="280" alt="india" title="india">
        <h3 class="container-heading">India Complete Package</h3>
        <p>
          Career Planning package + College shortlisting + Admission forms filling assistance + Interview Preparations + SOP, Essays, Resume writing assistance
        </p>
        <a href = "" class="button-a">
          Know More 
        </a>
     </div>
     <div class="container-cs container-3">
      <img class="icon" src="https://www.careersaarthi.com/wp-content/uploads/2021/07/international.png" width="264" height="280" alt="international studies" title="international">
        <h3 class="container-heading">International Complete Package</h3>
        <p>
          Career Planning package + Country selection + University selection + Admission forms filling assistance + Interview Preparations + SOP, Essays, Resume writing assistance + Visa interview preparation
        </p>
        <a href = "" class="button-a">
          Know More 
        </a>
     </div>
     <div class="container-cs container-4">
      <img class="icon" src="https://www.careersaarthi.com/wp-content/uploads/2021/07/worker.png" width="280" height="280" alt="worker" title="worker">
        <h3 class="container-heading">Career Planning
          for Professionals</h3>
        <p>
          A package for professionals that leverages our AI based Psychometric assessment to discover strengths with a personalized 30 page comprehensive report for a suitable career path and clear actionable roadmap
        </p>
        <a href = "" class="button-a">
          Know More 
        </a>
     </div>
    </div>
      `
  
  }
  static renderAbout
}
