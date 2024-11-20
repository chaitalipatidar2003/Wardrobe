import React from 'react'

const CardGrid = () => {

    const homeWearItems = [
        {
          id: 1,
          name: "Comfy Pajamas",
          image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
          description: "Soft and comfortable pajamas for everyday wear.",
        },
        {
          id: 2,
          name: "Lounge Shorts",
          image: "https://plus.unsplash.com/premium_photo-1690341214258-18cb88438805?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
          description: "Relax in style with these breathable lounge shorts.",
        },
        {
          id: 3,
          name: "Cotton T-shirt",
          image: "https://images.unsplash.com/photo-1639591903821-9b5e38f97bbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
          description: "Classic cotton t-shirt for ultimate comfort.",
        },
      ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeWearItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardGrid
