import React from 'react'

export default function page({params}) {
    const id = parseInt(params.id)
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
      const singleData = data.find(d=>d.id == id)
      console.log(singleData)
  return (
    <div>
    <h1>ID :{id}</h1>
     <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-lg">
         
         <img src={singleData?.img} alt={singleData?.name} className="h-[120px] w-[200px] object-cover rounded-md" />
         <h2 className="text-lg font-semibold">{singleData?.id}</h2>
         <h2 className="text-lg font-semibold">{singleData?.name}</h2>
         <p className="text-sm text-gray-600 text-center">{singleData?.details}</p>
       
          
        </div>
    
    </div>
  )
}
