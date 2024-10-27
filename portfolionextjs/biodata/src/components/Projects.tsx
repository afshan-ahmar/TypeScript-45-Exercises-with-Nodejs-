import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data=[
    {
    id: 0,
    title: "Static Interactive Resume",
    decs: "A React & typescript based app for curriculum vitaei",
    img:"/project01.jpg",
    tags :["React","node","CSS","Typescript"],
    },
{
    id: 1,
    title: "Dynamic Interactive Resume",
    decs: "A React & typescript based app for dynamic resume",
    img:"/project02.jpg",
    tags :["React","node","CSS","Typescript"],


},
{
    id: 2,
    title: "Resume Interactive Form",
    decs: "A React & typescript based app RESUME FORM",
    img:"/project3.jpg",
    tags :["React","node","CSS","Typescript"],


},
{
    id: 3,
    title: "Website About Education ",
    decs: "A React & typescript based Educational Website",
    img: "/websiteeducation.jpg",
    tags :["React","node","CSS","Typescript"],


},

{
  id: 4,
  title: "My First Website About Flowers ",
  decs: "A React & typescript based website",
  img:"/websiteflowers.jpg",
  tags :["React","node","CSS","Typescript"],


},

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32 flex'>
        <Heading  title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'></div>
      {data.map((el)=>(<Card 
      key={el.id}
      title={el.title}
      desc={el.decs}
      img={el.img}
      tags={el.tags}

      />))}
    </div>
  )
}

export default Projects
