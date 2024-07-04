import { useRef, useState } from "react"
import "./Quiz.css"
import {data} from './data.ts'

const Quiz = () => {

    let [index,setIndex] = useState(0)
    let [ques, setQues] = useState(data[index])
    let [lock, setLock] = useState(false)
    let [score,setScore] = useState(0)
    let [result,setResult] = useState(false)

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)
    let option_array = [Option1,Option2,Option3,Option4]

    let checkAns = (e: any, ans: number) => {
      if (lock === false) {
      
        if (ques.ans === ans) {
          e.target.classList.add("correct");
          setLock(true);
          setScore(prev=>prev+1);
        }else {
            e.target.classList.add("wrong");
            setLock(true)
            option_array[ques.ans-1].current.classList.add("correct")
          }
      } 
    };

    let Next = () =>{
        if(lock===true){
          if(index === data.length-1){
            setResult(true)
            return 0
          }
            setIndex(++index)
            setQues(data[index])
            setLock(false)
            option_array.map((option)=>{
                option.current.classList.remove("correct")
                option.current.classList.remove("wrong")
                return null
            })
        }
    }

    let Reset =()=>{
      setIndex(0)
      setQues(data[0])
      setScore(0)
      setLock(false)
      setResult(false)
    }

    return (
      <div className="container">
        <h1>Quiz</h1>
        <hr />
        {result?<></>:<>
          <h2>{index+1}.{ques.question}</h2>
        <ul>
          <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{ques.option1}</li>
          <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{ques.option2}</li>
          <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{ques.option3}</li>
          <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{ques.option4}</li>
        </ul>
        <button onClick={Next}>Next</button>
        <p>{index+1} of {data.length} question</p>
        </>}
        {result?<>
          <h2>You Scored {score} out of {data.length}</h2>
        <button onClick={Reset}>Reset</button>
        </>:<></>}
        
      </div>
    )
  }
  
  export default Quiz