import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/24/comments`)
            .then((response) => {
                if (!response.ok) throw new Error('Помилка завантаження');
                return response.json();
            })
            .then((data) => {
                setComments(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching comments:", error);
                setIsLoading(false);
            });
    }, ); 

    return (
        <section className="my-8 p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Відгуки попередніх роботодавців
            </h2>

            {isLoading ? (
                <p>Завантаження відгуків...</p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2">
                    {comments.map((comment) => (
                        <div 
                            key={comment.id} 
                            className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
                        >
                            <h3 className="font-semibold text-blue-600 capitalize">
                                {comment.name}
                            </h3>
                            <p className="text-xs text-gray-500 mb-2">{comment.email}</p>
                            <p className="text-sm text-gray-700 italic">
                                "{comment.body}"
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Reviews;