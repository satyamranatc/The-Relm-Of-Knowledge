import React,{useState} from 'react'

export default function CourseDetails({SelectedCourse}) {

    let [AllCourses,setAllCourses] = useState([

        {
            Cid:1,
            CName: "Introduction To Gravity",
            description: "By The ref of University Physics",
            category:"Science",
            instructor: "Kavin Watt",
            duration:"1 Month",
            thumbnail: "https://static.vecteezy.com/system/resources/previews/022/006/618/non_2x/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg"
        },{
            Cid:2,
            CName: "Advanced Quantum Mechanics",
            description: "By The ref of University Physics",
            category:"Science",
            instructor: "John Doe",
            duration:"2 Months",
            thumbnail: "https://s3.amazonaws.com/msoe/files/callouts/wide_xlrg_computer-science-landing-page.jpg"
        },{
            Cid:3,
            CName: "Advanced Topics in Astrophysics",
            description: "By The ref of University Physics",
            category:"Science",
            instructor: "Sarah Smith",
            duration:"3 Months",
            thumbnail: "https://images.shiksha.com/mediadata/images/articles/1681295706phpPEZE4t.jpeg"
        },{
            Cid:4,
            CName: "The History Of India",
            description: "By The ref of NCERT",
            category:"SST",
            instructor: "Sarah Smith",
            duration:"3 Months",
            thumbnail: "https://images.shiksha.com/mediadata/images/articles/1681295706phpPEZE4t.jpeg"
        },
        {
            Cid:5,
            CName: "The World's Largest Ocean",
            description: "By The ref of NCERT",
            category:"SST",
            instructor: "Sarah Smith",
            duration:"3 Months",
            thumbnail: "https://images.shiksha.com/mediadata/images/articles/1681295706phpPEZE4t.jpeg"
        },{
            Cid:6,
            CName: "The World's Fastest Mars Rover",
            description: "By The ref of NCERT",
            category:"SST",
            instructor: "Sarah Smith",
            duration:"3 Months",
            thumbnail: "https://images.shiksha.com/mediadata/images/articles/1681295706phpPEZE4t.jpeg"
        }

    ])

    let ShowCase = AllCourses.filter(e=>e.category == SelectedCourse.name)

  return (
    <div>
        <center>
            <h1>
                Course Details
            </h1>
        </center>

        <div id="CourseContainer">
            {
                ShowCase.map(c=>(
                    <div key = {c.Cid} className='CourseCard' >
                        <img src={c.thumbnail} alt={c.CName} />
                        <h2>{c.CName}</h2>
                        <p>{c.description}</p>
                        <p>Instructor: {c.instructor}</p>
                        <p>Duration: {c.duration}</p>
                    </div>
                ))
            }
        </div>

            
           
    </div>
  )
}
