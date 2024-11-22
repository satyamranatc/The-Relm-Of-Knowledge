import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function Courses({setSelectedCourse}) {

    let [Courses,setCourses] = useState([
        {
            id:1,
            name: "Science",
            description: "Yai Science Hai",
            thumbnail: "https://static.vecteezy.com/system/resources/previews/022/006/618/non_2x/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg"
        },{
            id:2,
            name: "Computer Science",
            description: "Tony Stark",
            thumbnail: "https://s3.amazonaws.com/msoe/files/callouts/wide_xlrg_computer-science-landing-page.jpg"

        },
        {
            id:3,
            name: "SST",
            description: "SSt is a Subject",
            thumbnail: "https://images.shiksha.com/mediadata/images/articles/1681295706phpPEZE4t.jpeg"
        }
    ])



  return (
    <div id = "CourseContainer">
        {
                Courses.map((e)=>(
                    <div key = {e.id} className='CourseCard' >
                        <img src={e.thumbnail} alt={e.name} />
                        <h2>{e.name}</h2>
                        <p>{e.description}</p>
                        <Link to = "/CourseDetails" ><button onClick={()=>{
                            setSelectedCourse(e);
                        }}>View More</button></Link>
                    </div>
                ))
        }
    </div>
  )
}
