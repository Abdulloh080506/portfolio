import React from 'react';
import '../skilline/style.css';

const Skilline = () => {
  return (
    <>
    <section className='skilline'>
        <div className='skilline_text'>
            <h1>What is <span>Skilline ?</span></h1>
            <p>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        </div>
        <div className='skilline_cards'>
            <div className='h1'>
                <div>
                    <h2>FOR INSTRUCTORS</h2>
                    <button>Start a class today</button>
                </div>
            </div>
            <div className='h2'>    
                <div>
                    <h2>FOR STUDENTS</h2>
                    <button>Enter access code</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skilline;