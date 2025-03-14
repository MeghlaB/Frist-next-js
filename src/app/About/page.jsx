import { ClientPageRoot } from 'next/dist/client/components/client-page'
import Link from 'next/link'
import React from 'react'

export default function Aboutpage() {
    const data = [
        {
          "id": 1,
          "name": "John Doe",
          "img": "/iamg3.jpeg",
          "details": "A passionate web developer with expertise in JavaScript."
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "img": "/image.jpg",
          "details": "A UI/UX designer with a love for creating intuitive user experiences."
        },
        {
          "id": 3,
          "name": "Michael Brown",
          "img": "/image2.jpeg",
          "details": "A full-stack developer with experience in MERN stack."
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "img":  "/image2.jpeg",
          "details": "A digital marketer specializing in SEO and social media growth."
        },
        {
          "id": 5,
          "name": "David Wilson",
          "img":  "/image.jpg",
          "details": "A data scientist with a strong background in machine learning."
        }
      ]
      console.log(data)
      
  return (
    <div className="max-w-4xl mx-auto p-6">
    <p className="text-center text-green-700 font-semibold text-xl mb-6">About Pages</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((person) => (
        <div key={person.id} className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-lg">
         <Link href={`/About/${person.id}`}>
         <img src={person?.img} alt={person.name} className="h-[120px] w-[200px] object-cover rounded-md" />
         </Link>
          
        </div>
      ))}
    </div>
  </div>
  )
}

