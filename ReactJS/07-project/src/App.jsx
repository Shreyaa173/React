import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import './index.css'

const App = () => {
  const users = [
  {
    id: 1,
    img: "https://picsum.photos/400/400?random=1",
    intro: "Frontend Developer passionate about React.",
    tag: "React",
    color: "bg-red-500"
  },
  {
    id: 2,
    img: "https://picsum.photos/400/400?random=2",
    intro: "Backend engineer specializing in Node.js.",
    tag: "Node.js",
    color: "bg-blue-500"
  },
  {
    id: 3,
    img: "https://picsum.photos/400/400?random=3",
    intro: "UI/UX designer creating beautiful experiences.",
    tag: "Design",
    color: "bg-green-500"
  },
  {
    id: 4,
    img: "https://picsum.photos/400/400?random=4",
    intro: "Full Stack Developer and tech enthusiast.",
    tag: "Full Stack",
    color: "bg-yellow-500"
  },
  {
    id: 5,
    img: "https://picsum.photos/400/400?random=5",
    intro: "Machine Learning engineer building AI solutions.",
    tag: "AI/ML",
    color: "bg-purple-500"
  },
  {
    id: 6,
    img: "https://picsum.photos/400/400?random=6",
    intro: "DevOps engineer automating cloud infrastructure.",
    tag: "DevOps",
    color: "bg-pink-500"
  },
  {
    id: 7,
    img: "https://picsum.photos/400/400?random=7",
    intro: "Cybersecurity analyst securing digital assets.",
    tag: "Security",
    color: "bg-orange-500"
  },
  {
    id: 8,
    img: "https://picsum.photos/400/400?random=8",
    intro: "Blockchain developer exploring Web3.",
    tag: "Web3",
    color: "bg-cyan-500"
  },
  {
    id: 9,
    img: "https://picsum.photos/400/400?random=9",
    intro: "Data Scientist transforming data into insights.",
    tag: "Data Science",
    color: "bg-emerald-500"
  },
  {
    id: 10,
    img: "https://picsum.photos/400/400?random=10",
    intro: "Mobile app developer creating Android apps.",
    tag: "Android",
    color: "bg-indigo-500"
  },
  {
    id: 11,
    img: "https://picsum.photos/400/400?random=11",
    intro: "Cloud engineer working with AWS services.",
    tag: "Cloud",
    color: "bg-teal-500"
  },
  {
    id: 12,
    img: "https://picsum.photos/400/400?random=12",
    intro: "Software engineer passionate about clean code.",
    tag: "Software",
    color: "bg-rose-500"
  }
];
  return (
    <div>
      {users.map((user) => {
        return <Section1 users={users} />
      })}
    </div>
  )
}

export default App