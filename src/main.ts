import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Typescript Problems</h1>
   <ol>
   <li>Start from the first problem and work your way down</li>
    <li> Each problem has a description and a test</li>
    <li> Write your solution in answer folder.</li>
    <li> Test your solution by running the test file.</li>
    <li> If you pass the test, move to the next problem.</li>
    <li> File format is exercise1.ts</li>
    <li> Test file format is exercise1.test.ts</li>
   </ol>

   <h2>Project Set Up locally</h2>
    <ol>
    <li>Clone the repository</li>
    <li>Run npm install</li>
    <li>Run npm run test</li>
    </ol>
  </div>
`
